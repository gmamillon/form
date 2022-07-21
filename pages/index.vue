<template lang="pug">
.index
  router-link(class="link", to="/build") Start building your form !
  router-link(class="link", to="/draft") Start building your form ! (draft)
</template>

<style scoped>
.index {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 15vh;
}
</style>