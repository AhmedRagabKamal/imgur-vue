<template>
  <div class="btn-group">
    <button
      v-for="action in actions"
      :key="action.label"
      @click="$emit('actionClicked', action.value)"
      :class="{'active': section === action.value}"
    >{{action.label}}</button>
  </div>
</template>

<script>
export default {
  name: 'GroupButtons',
  model: {
    prop: 'section',
    event: 'actionClicked',
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
.btn-group button {
  border: 1px solid #6200ea; /* Green border */
  color: #6200ea; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
  outline: 0;
}

.btn-group button:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.btn-group button:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover,
.btn-group button:active,
.btn-group button.active {
  background-color: #6200ea;
  color: white;
}
</style>
