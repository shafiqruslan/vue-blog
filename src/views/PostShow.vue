<template>
  <div class="container mx-auto w-1/2 my-10">
    <div class="border rounded-md bg-white my-2">
      <div class="m-4">
        <div class="text-4xl font-bold my-2">{{ post.title }}</div>
        <div class="flex items-center my-8">
          <div class="text-sm text-gray-700 font-medium my-1">
            {{ post.author }}
          </div>
          <div class="text-xs text-gray-500 font-normal ml-4">
            {{ post.date }}
          </div>
        </div>
        <div class="trix-content">
          <span v-html="post.description"></span>
        </div>
        <hr class="my-10" />
        <div class="px-10">
          <CommentCreate :postId="this.id" @get-comment="getComments" />
          <div class="my-14">
            <Comment
              v-for="comment in comments"
              :key="comment.id"
              :comment="comment"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/services/Api'
import CommentCreate from '@/components/CommentCreate'
import Comment from '@/components/Comment'

export default {
  components: {
    CommentCreate,
    Comment,
  },
  props: ['id'],
  data() {
    return {
      post: Object,
      comments: [],
    }
  },
  methods: {
    getPost() {
      Api.getPost(this.id)
        .then((response) => {
          this.post = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getComments() {
      Api.getComments(this.id)
        .then((response) => {
          this.comments = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  created() {
    this.getPost()
    this.getComments()
  },
}
</script>

<style></style>
