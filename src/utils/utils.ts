import { RectangleInfo } from './types';

// Generate numbers that won't result in shades of white.
const createRandomNumber = (start: number = 50, end: number = 200) =>
  Math.floor(Math.random() * (end - start) + start);

const createRandomColor = () => {
  return [createRandomNumber(), createRandomNumber(), createRandomNumber()]
    .map((num) => {
      const str = num.toString(16);
      return str.length === 2 ? str : '0' + str;
    })
    .join('');
};

export const generateRectangleInfoList = (): Array<RectangleInfo> => {
  const indices: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const rectangleInfoList: Array<RectangleInfo> = indices.map((index) => ({
    index,
    color: createRandomColor()
  }));
  return rectangleInfoList;
};
