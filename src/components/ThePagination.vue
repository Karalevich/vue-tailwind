<template>
  <div class="mb-10 mt-20">
    <ul class="flex justify-center">
      <PaginationItem to="#" class="rounded-l-lg">Previous</PaginationItem>
      <PaginationItem to="/card/1">1</PaginationItem>
      <PaginationItem to="/card/2">2</PaginationItem>
      <PaginationItem to="/card/3">3</PaginationItem>
      <PaginationItem to="/card/4">4</PaginationItem>
      <PaginationItem to="/card/5">5</PaginationItem>
      <PaginationItem to="#" class="rounded-r-lg">Next</PaginationItem>
    </ul>
  </div>
</template>

<script setup>
import PaginationItem from '@/components/PaginationItem.vue'
</script>

<style lang="scss" scoped></style>
