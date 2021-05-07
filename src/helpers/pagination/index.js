export const calculatePages = (dataLength, limit) => {
  let num = Math.floor(dataLength / limit) + (dataLength % limit) ? 1 : 0;
  return num;
};
