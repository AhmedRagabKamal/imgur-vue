export function getSmallImageWidth({ images }) {
  return images.reduce((prev, curr) => (prev.width < curr.width ? prev : curr));
}

export function getBigImageWidth({ images }) {
  return images.reduce((prev, curr) => (prev.width > curr.width ? prev : curr));
}

export default { getSmallImageWidth, getBigImageWidth };
