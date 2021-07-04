<template>
  <div class="border rounded-md bg-white my-2">
    <div class="m-4">
      <div class="flex items-center mb-4">
        <div class="text-sm text-gray-700 font-medium">
          {{ comment.author }}
        </div>
        <div class="text-xs text-gray-500 font-normal ml-3">
          {{ comment.date }}
        </div>
      </div>
      <div class="trix-content">
        <span v-html="comment.body"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: Object,
  },
}
</script>

<style></style>
