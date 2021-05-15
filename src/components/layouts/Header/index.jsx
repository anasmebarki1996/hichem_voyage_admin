import React from "react";
import { Link } from "react-router-dom";
import { FaExpand } from "react-icons/fa";

import { IoLogOutOutline } from "react-icons/io5";
import { logout } from "store/auth/authAction";
import axios from "helpers/AxiosInstance";
import { useDispatch } from "react-redux";
import * as authActions from "store/auth/authAction";
import Swal from "sweetalert2";

const Header = () => {
  const dispatch = useDispatch();
  const logout = () => {
    axios
      .post("/logout")
      .then(() => {
        dispatch(authActions.logout());
      })
      .catch((error) => {
        Swal.fire(error.data, "", "error");
      });
  };
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="fullscreen"
            href="#"
            role="button"
          >
            <FaExpand />
          </a>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={logout}>
            <IoLogOutOutline />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
