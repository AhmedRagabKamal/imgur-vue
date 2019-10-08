import $httpService from '@/http.service';
import GalleryModel from '@/gallery/models/gallery.model';

export function getGalleryImages({ selectedSection, selectedSort, selectedWindow, showViral }) {
  const requestParams = `/${selectedSection}/${selectedSort}/${selectedWindow}/0?showViral=${showViral}`;
  return $httpService
    .get(requestParams)
    .then(({ data: { data: images = [] } = [] }) =>
      images
        .filter(gallery => gallery.images && gallery.images.find(img => !img.mp4))
        .map(gallery => new GalleryModel(gallery))
    );
}

export function getGalleryImageDetails(imageId) {
  return $httpService.get(`/album/${imageId}`).then(({ data }) => new GalleryModel(data.data));
}

export default { getGalleryImages, getGalleryImageDetails };
