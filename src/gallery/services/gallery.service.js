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

export default { getGalleryImages, getGalleryImageDetails };
