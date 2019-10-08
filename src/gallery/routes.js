const Gallery = () => import(/* webpackChunkName: "gallery-group" */ '@/gallery/views/Gallery');
const GalleryImgDetails = () =>
  import(/* webpackChunkName: "gallery-group" */ '@/gallery/views/GalleryImgDetails');

export default [
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/gallery/:id',
    name: 'img-details',
    component: GalleryImgDetails,
    props: true
  }
];
