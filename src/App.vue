<template>
  <div id="app">
    <app-header/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/layout/app-header';

export default {
  name: 'App',
  components: {
    AppHeader,
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: sans-serif;
}
</style>
