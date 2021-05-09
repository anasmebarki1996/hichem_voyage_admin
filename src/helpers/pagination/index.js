export const calculatePages = (dataLength, limit) => {
  console.log("dataLength : " + dataLength);
  console.log("limit : " + limit);
  let a = Math.floor(dataLength / limit);
  let b = dataLength % limit;
  if (b) a = a + 1;
  console.log("nombre : " + a);

  return a;
};
