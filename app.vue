<template lang="pug">
.app
  router-view
</template>

<script lang="ts">
export default{  
  beforeCreate() {
    this.$router.push({ name: "index" })
  }
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
</style>

<style>
body {
  font-family: 'Inter-medium';
  margin: 0;
}
a {
  text-decoration: none;
}
.mdi {
  margin: auto;
}
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input:-webkit-autofill,
input:-webkit-autofill:focus {
    transition: background-color 600000s 0s;
}
input[data-autocompleted] {
    background-color: transparent !important;
}
</style>