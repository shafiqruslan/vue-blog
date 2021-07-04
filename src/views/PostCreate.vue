<template>
  <div class="flex justify-center">
    <div class="w-1/3">
      <div class="text-3xl my-10 font-bold">Create a post</div>
      <form @submit.prevent="createPost">
        <div>
          <label for="author" class="block text-sm font-medium text-gray-700"
            >Author</label
          >
          <input
            v-model="post.author"
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
            placeholder="Enter your name"
          />
        </div>
        <div class="my-4">
          <label for="title" class="block text-sm font-medium text-gray-700"
            >Title</label
          >
          <input
            v-model="post.title"
            type="text"
            id="title"
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
            placeholder="Enter your title"
          />
        </div>
        <div class="my-4">
          <label
            for="description"
            class="block text-sm font-medium text-gray-700"
            >Description</label
          >
          <div class="mt-1">
            <input id="x" type="hidden" v-model="post.description" />
            <trix-editor
              input="x"
              class="
                trix-content
                bg-white
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
              placeholder="Enter your post"
            ></trix-editor>
          </div>
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
            Create Post
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Api from '@/services/Api.js'
import moment from 'moment'
import 'trix'
import 'trix/dist/trix.css'

export default {
  mounted() {
    document.addEventListener('trix-change', this.setTextToTrix) // Listen to the changes on the editor
  },
  data() {
    return {
      post: {
        id: '',
        title: '',
        description: '',
        date: moment().format('Do MMM YYYY'),
      },
    }
  },
  methods: {
    createPost() {
      Api.createPost(this.post)
        .then((response) => {
          console.log(response)
          this.$router.push({
            name: 'post-list',
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setTextToTrix: function () {
      this.post.description = document.getElementById('x').value
    },
  },
}
</script>
