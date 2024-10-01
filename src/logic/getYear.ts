//function to get the date and full year

export const getYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

//scroll functions

export const scrollUpFunction = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const scrollDown = () => {};
