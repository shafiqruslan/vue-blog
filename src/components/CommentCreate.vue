<template>
  <div>
    <div class="my-6 font-semibold text-2xl">Discussions</div>
    <form @submit.prevent="createComment">
      <div class="my-4">
        <div>
          <input
            v-model="comment.author"
            type="text"
            id="author"
            class="
              mt-1
              focus:ring-indigo-500
              focus:border-indigo-500
              block
              w-full
              sm:text-sm
              shadow-sm
              border-gray-300
              rounded-md
            "
            placeholder="Enter your author"
          />
        </div>
        <textarea
          v-model="comment.body"
          id="comment"
          rows="5"
          class="
            shadow-sm
            focus:ring-indigo-500
            focus:border-indigo-500
            mt-1
            block
            w-full
            text-sm
            border-gray-300
            rounded-md
          "
          placeholder="Enter your comment"
        ></textarea>
      </div>
      <div class="mt-6">
        <button
          type="submit"
          class="
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          Create Comment
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Api from '@/services/Api.js'
import moment from 'moment'

export default {
  data() {
    return {
      comment: {
        id: '',
        date: moment().format('Do MMM YYYY'),
        author: '',
        body: '',
      },
    }
  },
  props: ['postId'],
  methods: {
    createComment() {
      Api.createComment(this.postId, this.comment)
        .then((response) => {
          this.$emit('get-comment')
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
