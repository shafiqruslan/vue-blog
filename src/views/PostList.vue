<template>
  <div class="flex justify-center">
    <div class="container mx-auto w-1/2 my-10">
      <Post v-for="post in posts" :key="post.id" :post="post" />
      <div class="my-5">
        <Pagination :page="page" :hasNextPage="hasNextPage" />
      </div>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import Pagination from '@/components/Pagination.vue'
import Api from '@/services/Api.js'

export default {
  components: {
    Post,
    Pagination,
  },
  data() {
    return {
      posts: [],
      postsTotal: 0,
    }
  },
  created() {
    this.perPage = 3
    Api.getPosts(this.perPage, this.page)
      .then((response) => {
        console.log('posts', response)
        this.posts = response.data
        this.postsTotal = parseInt(response.headers['x-total-count'])
        // console.log('total', this.postsTotal)
      })
      .catch((error) => {
        console.log('There was an error:', error.response)
      })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    // Only show next page link if we have one
    hasNextPage() {
      return this.postsTotal > this.page * this.perPage
    },
  },
}
</script>
