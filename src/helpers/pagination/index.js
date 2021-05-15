export const calculatePages = (dataLength, limit) => {
  let a = Math.floor(dataLength / limit);
  let b = dataLength % limit;
  if (b) a = a + 1;

  return a;
};
