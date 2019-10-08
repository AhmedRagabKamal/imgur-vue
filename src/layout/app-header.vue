<template>
  <header class="header">
    <router-link class="header__logo" :to="{name: 'gallery'}">Logo</router-link>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
.header {
  padding: 20px;
  background-color: #6200ea;
  border-color: #6200ea;
  position: sticky;
  top: 0;
  z-index: 1;
}
.header__logo {
  color: white;
  text-decoration: none;
  font-size: 1.5em;
}
</style>
