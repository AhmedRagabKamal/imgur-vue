import { get } from 'lodash-es';

function getSmallImageWidth({ images }) {
  return images.reduce((prev, curr) => (prev.width < curr.width ? prev : curr));
}

function getBigImageWidth({ images }) {
  return images.reduce((prev, curr) => (prev.width > curr.width ? prev : curr));
}

class GalleryModel {
  constructor(data = {}) {
    this.id = get(data, 'id');
    this.title = get(data, 'title');
    this.description = get(data, 'description');
    this.ups = get(data, 'ups');
    this.downs = get(data, 'downs');
    this.score = get(data, 'score');
    this.views = get(data, 'views');
    if (data.images && data.images.length > 1) {
      this.smallImage = get(getSmallImageWidth(data), 'link');
      this.bigImage = get(getBigImageWidth(data), 'link');
    } else {
      this.smallImage = get(data, 'images[0].link');
      this.bigImage = get(data, 'images[0].link');
    }
  }
}

export default GalleryModel;
