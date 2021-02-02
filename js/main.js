const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInteger(0, 10));

const getRandomFractionalInteger = (min, max, decimal_places) => {
  return ((Math.random() * (max - min + 1)) + min).toFixed(decimal_places);
}

console.log(getRandomFractionalInteger(0.1, 10.488, 3));
