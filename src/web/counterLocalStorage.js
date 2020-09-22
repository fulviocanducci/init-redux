export const getCounter = () => {
  const value = window.localStorage.getItem('@counter') ?? 0;
  return parseInt(value);
};
export const setCounter = (value) => window.localStorage.setItem('@counter', value);
