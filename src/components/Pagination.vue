<template>
  <div>
    <template v-if="page != 1">
      <router-link
        class="text-gray-700 hover:text-indigo-700 hover:underline"
        :to="{ name: 'post-list', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev Page</router-link
      >
      <template v-if="hasNextPage"> | </template>
    </template>
    <router-link
      class="text-gray-700 hover:text-indigo-700 hover:underline"
      v-if="hasNextPage"
      :to="{ name: 'post-list', query: { page: page + 1 } }"
      rel="next"
    >
      Next Page</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    page: Number,
    hasNextPage: Boolean,
  },
}
</script>

<style></style>
