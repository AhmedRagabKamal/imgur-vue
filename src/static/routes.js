const PageNotFound = () =>
  import(/* webpackChunkName: "static-group" */ '@/static/views/PageNotFound');

export default [
  {
    path: '*',
    name: 'page-not-found',
    component: PageNotFound
  }
];
