import { getGalleryImages, getGalleryImageDetails } from '@/gallery/services/gallery.service';

export default {
  namespaced: true,
  state: {
    galleryImages: [],
    imgDetails: {},
    filtersData: {
      selectedSection: 'hot',
      selectedSort: 'viral',
      selectedWindow: 'day',
      showViral: true
    }
  },
  actions: {
    async getGalleryItems({ commit, state }) {
      const data = await getGalleryImages(state.filtersData);
      commit('setGalleryImages', data);
    },
    async getGalleryImageDetails({ commit }, imageId) {
      const data = await getGalleryImageDetails(imageId);
      commit('setGalleryImageDetails', data);
    }
  },
  mutations: {
    setGalleryImages(state, payload) {
      state.galleryImages = payload;
    },
    setGalleryImageDetails(state, payload) {
      state.imgDetails = payload;
    },
    setFiltersData(state, payload) {
      state.filtersData = payload;
    }
  }
};
