<template>
  <router-link :to="{ name: 'post-show', params: { id: post.id } }">
    <div class="border rounded-md bg-white my-2">
      <div class="m-4">
        <div class="text-sm text-gray-700 font-medium my-1">
          {{ post.author }}
        </div>
        <div class="text-xs text-gray-500 font-normal">{{ post.date }}</div>
        <div class="text-3xl font-semibold my-2">{{ post.title }}</div>
        <div class="my-4 flex">
          <div class="w-28 text-gray-800 text-sm">
            <IconHeart iconClass="inline-block" />
            {{ post.likes }} likes
          </div>
          <div class="w-28 text-gray-800 text-sm">
            <IconComment iconClass="inline-block" />
            {{ post.comments }} comments
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import IconComment from '@/components/icons/IconComment.vue'
import IconHeart from '@/components/icons/IconHeart.vue'

export default {
  components: {
    IconComment,
    IconHeart,
  },
  props: {
    post: Object,
  },
}
</script>

<style></style>
