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

const OFFER_TITLE = 'Жилье вашей мечты';

const OFFER_DESCRIPTION = 'Уютные апартаменты в центре города по привлекательно цене';

const OFFER_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const OFFER_CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const OFFER_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
}

const getRandomArraylength = (array) => {
  return getRandomInteger(1, array.length - 1)
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const getRandomTrimArray = (array) => {
  return array.slice(getRandomArraylength(array));
};

const getRandomArray = (array) => {
  return getRandomTrimArray(shuffle(array));
}

// eslint-disable-next-line no-unused-vars
const createOffersNearby = () => {

  const LOCATION_X = getRandomFloat(35.65000, 35.70000, 5);
  const LOCATION_Y = getRandomFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) +'.png',
    },
    offer: {
      title: OFFER_TITLE,
      address: `${LOCATION_X}, ${LOCATION_Y}`,
      price: getRandomInteger(1, 100),
      type: getRandomArrayElement(OFFER_TYPE),
      rooms: getRandomInteger(1, 100),
      guests: getRandomInteger(1, 100),
      checkin: getRandomArrayElement(OFFER_CHECKIN),
      checkout: getRandomArrayElement(OFFER_CHECKOUT),
      features: getRandomArray(OFFER_FEATURES),
      description: OFFER_DESCRIPTION,
      photos: getRandomTrimArray(OFFER_PHOTOS),
    },
    location: {
      x: LOCATION_X,
      y: LOCATION_Y,
    },
  };
};
