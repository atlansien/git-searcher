<template>
  <div class="mdl-layout-content">
    <div class="page-content">
      <app-search></app-search>
      <app-card v-for="n in 10"></app-card>
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";
import Card from "./Card.vue";
export default {
  components: {
    appSearch: Search,
    appCard: Card
  }
};
</script>

<style scoped>
main {
  background-color: #f6f6f6;
  width: 100px;
  margin: 0 auto;
}

.page-content {
  display: flex;
  flex-direction: column;
}
</style>
