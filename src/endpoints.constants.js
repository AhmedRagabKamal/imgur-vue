export default {
  GALLERY_LIST: ({ selectedSection, selectedSort, selectedWindow, showViral }) =>
    `/${selectedSection}/${selectedSort}/${selectedWindow}/0?showViral=${showViral}`,
  IMAGE_DETAILS: imageId => `/album/${imageId}`
};
