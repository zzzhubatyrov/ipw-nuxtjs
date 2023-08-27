<template>
  <div class="container">
    <input class="searchbar" type="search" placeholder="Поиск" />
    <div class="nav_list"></div>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.searchbar {
  display: flex;
  width: 200px;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #FFF;
  border: none;
}
.searchbar::placeholder {
  color: rgba(0, 0, 0, 0.50);
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>