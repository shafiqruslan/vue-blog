import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getPosts(perPage, page) {
    return apiClient.get('/posts?_limit=' + perPage + '&_page=' + page)
  },
  getPost(id) {
    return apiClient.get('/posts/' + id)
  },
  createPost(post) {
    return apiClient.post('/posts', post)
  },
  createComment(postId, comment) {
    return apiClient.post('/posts/' + postId + '/comments', comment)
  },
  getComments(postId) {
    return apiClient.get('/posts/' + postId + '/comments')
  },
}
