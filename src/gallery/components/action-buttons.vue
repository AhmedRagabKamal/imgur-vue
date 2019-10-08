<template>
  <div class="container">
    <group-buttons :actions="SECTIONS" v-model="filtersData.selectedSection"/>
    <group-buttons
      :actions="SORTS"
      v-model="filtersData.selectedSort"
      v-if="filtersData.selectedSection === 'top'"
    />
    <group-buttons
      v-else-if="filtersData.selectedSection === 'user'"
      :actions="WINDOWS"
      v-model="filtersData.selectedWindow"
    />
    <switch-input
      v-model="filtersData.showViral"
      title="show viral"
      v-if="filtersData.selectedSection === 'user'"
    />
  </div>
</template>

<script>
import { SECTIONS, SORTS, WINDOWS } from '@/gallery/constants/gallery.constant';
import GroupButtons from '@/components/group-buttons';
import SwitchInput from '@/components/switch';

export default {
  name: 'SectionButtons',
  components: {
    GroupButtons,
    SwitchInput,
  },
  data() {
    return {
      SECTIONS,
      SORTS,
      WINDOWS,
      filtersData: {
        selectedSection: 'hot',
        selectedSort: 'viral',
        selectedWindow: 'day',
        showViral: true
      }
    };
  },
  watch: {
    filtersData: {
      handler(newValue) {
        this.$store.commit('galleryStore/setFiltersData', newValue);
        this.$store.dispatch('galleryStore/getGalleryItems');
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: sticky;
  top: 60px;
  margin: 50px auto;
  background: white;
  z-index: 1;
  padding: 10px 60px;
}
@media screen and (max-width: 600px) {
  .container {
    margin: 10px auto;
    padding: 10px;
  }
}
</style>
