import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '../views/PostList.vue'
import PostCreate from '../views/PostCreate.vue'
import PostShow from '../views/PostShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'post-list',
    component: PostList,
  },
  {
    path: '/post/create',
    name: 'post-create',
    component: PostCreate,
  },
  {
    //When props is set to true, the route.params will be set as the component props
    path: '/post/:id',
    name: 'post-show',
    component: PostShow,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
