export const formatDate = (unixMs) => {
  const date = new Date(unixMs);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
};
