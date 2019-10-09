<template>
  <div class="btn-group">
    <button
      class="btn-group__button"
      tabindex="0"
      v-for="action in actions"
      :key="action.label"
      @click="$emit('action-clicked', action.value)"
      :class="{'active': section === action.value}"
    >{{action.label}}</button>
  </div>
</template>

<script>
export default {
  name: 'GroupButtons',
  model: {
    prop: 'section',
    event: 'action-clicked',
  },
  props: {
    actions: {
      type: Array,
      default: () => []
    },
    section: {
      type: String,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

.btn-group {
  display: flex;
  flex-wrap: wrap;
  &__button {
    border: 1px solid $primaryColor;
    color: $primaryColor;
    padding: 10px 20px;
    cursor: pointer;
    outline: 0;
  }
  &__button:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &__button:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}

.btn-group button:not(:last-child) {
  border-right: none;
}

.btn-group button:hover,
.btn-group button:active,
.btn-group button:focus,
.btn-group button.active {
  background-color: $primaryColor;
  color: $secondaryColor;
}
@media screen and (max-width: 600px) {
  .btn-group button {
    margin-bottom: 10px;
  }
}
</style>
