<template>
  <div class="page-not-found">
    <figure>
      <img class="page-not-found__image" :src="PageNotFoundImage" alt="page not found">
    </figure>
    <router-link class="page-not-found__link" :to="{name: 'gallery'}">Back to home</router-link>
  </div>
</template>


<script>
import PageNotFoundImage from '@/assets/images/404.png';

export default {
  name: 'PageNotFound',
  data() {
    return {
     PageNotFoundImage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
    display: block;
    margin: auto;
    max-width: 800px;
  }
  &__link {
    font-size: 1.5rem;
    color: $primaryColor;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
