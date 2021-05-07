import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const AxiosInstance = axios.create({
  baseURL: "http://127.55.44.99:30001/API/admin/",
});

axios.interceptors.request.use(
  async (config) => {
    const token = await cookies.get("access_token");
    if (token) {
      config.headers.Authorization = "bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response.data);
    }),
  (error) => {
    if (error.response.status === 422) {
      return new Promise((resolve, reject) => {
        // console.log(error);
        let data = { ...error.response.data };
        let errors = {};
        for (const key in data) {
          errors = {
            ...errors,
            [key]: Array.isArray(data[key]) ? data[key][0] : data[key],
          };
        }
        reject({ status: error.response.status, data: errors });
      });
    } else if (error.response.status === 401) {
      localStorage.removeItem("access_token");
      return new Promise((resolve, reject) => {
        reject({
          status: error.response.status,
          data: "email or password ne sont pas valides",
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        reject({
          status: error.response.status,
          data: "something went wrong",
        });
      });
    }
    // if (!error.response) {
    //   return new Promise((resolve, reject) => {
    //     reject(error);
    //   });
    // }
  }
);

export default AxiosInstance;
