<template>
  <div class="image-wrapper">
    <div class="image">
      <h2 class="image__title">{{imageDetails.title}}</h2>
      <figure>
        <img class="image__img" :src="imageDetails.bigImage" :alt="imageDetails.title">
        <figcaption class="image__caption">{{imageDetails.title}}</figcaption>
      </figure>
      <div class="image__details">
        <p class="image__details__description">{{imageDetails.description}}</p>
      </div>
      <div class="image__analytics">
        <div class="image__analytics__item">
          <svg-icon color="#6200ea" name="upload" original scale="1"></svg-icon>
          <span>{{imageDetails.ups}}</span>
        </div>
        <div class="image__analytics__item">
          <svg-icon color="#6200ea" name="download" original scale="1"></svg-icon>
          <span>{{imageDetails.downs}}</span>
        </div>
        <div class="image__analytics__item">
          <svg-icon color="#6200ea" name="star" original scale="1"></svg-icon>
          <span>{{imageDetails.score}}</span>
        </div>
        <div class="image__analytics__item">
          <svg-icon color="#6200ea" name="eye-stroke" original scale="2"></svg-icon>
          <span>{{imageDetails.views}}</span>
        </div>
      </div>
    </div>
    <div class="link">
      <router-link class="link__gallery" :to="{name: 'gallery'}">Back to gallery</router-link>
    </div>
  </div>
</template>

<script>
import '@/svg/upload';
import '@/svg/download';
import '@/svg/star';
import '@/svg/eye-stroke';

export default {
  name: 'GalleryImgDetails',
  props: {
    galleryImage: {
      type: Object,
      default: () => {},
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    imageDetails() {
      return this.galleryImage || this.$store.state.galleryStore.imgDetails;
    }
  },
  created() {
    if (!this.galleryImage) {
      this.$store.dispatch('galleryStore/getGalleryImageDetails', this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";
.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image {
  border: 1px solid $primaryColor;
  max-width: 800px;
  margin: 40px auto;
  &__title {
    text-align: center;
  }
  &__img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    object-position: top;
    margin: auto;
  }
  &__caption {
    text-align: center;
    padding: 10px;
  }
  &__details {
    &__description {
      text-align: center;
    }
  }
  &__analytics {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    border-top: 1px dashed $primaryColor;
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
.link {
  &__gallery {
    font-size: 1.5rem;
    color: $primaryColor;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
