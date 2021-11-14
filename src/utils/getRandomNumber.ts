const getNumber = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomNumber = (min: number, max: number, length: number): number[] => {
  const arr: number[] = [];

  while (arr.length < length) {
    const num = getNumber(min, max);
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }

  return arr;
};
