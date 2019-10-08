import $httpService from '@/http.service';
import GalleryModel from '@/gallery/models/gallery.model';
import Endpoints from '@/endpoints.constants';

export function getGalleryImages(filtersData) {
  return $httpService
    .get(Endpoints.GALLERY_LIST(filtersData))
    .then(({ data: { data: images = [] } = [] }) =>
      images
        .filter(gallery => gallery.images && gallery.images.find(img => !img.mp4))
        .map(gallery => new GalleryModel(gallery))
    );
}

export function getGalleryImageDetails(imageId) {
  return $httpService
    .get(Endpoints.IMAGE_DETAILS(imageId))
    .then(({ data }) => new GalleryModel(data.data));
}

export function getSmallImageWidth({ images }) {
  return images.reduce((prev, curr) => (prev.width < curr.width ? prev : curr));
}

export function getBigImageWidth({ images }) {
  return images.reduce((prev, curr) => (prev.width > curr.width ? prev : curr));
}

export default { getGalleryImages, getGalleryImageDetails, getSmallImageWidth, getBigImageWidth };
