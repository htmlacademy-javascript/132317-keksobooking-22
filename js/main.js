// eslint-disable-next-line no-unused-vars
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// eslint-disable-next-line no-unused-vars
const getRandomFloat = (min, max, decimalPlaces) => {
  return ((Math.random() * (max - min + 1)) + min).toFixed(decimalPlaces);
}
