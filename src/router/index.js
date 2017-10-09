import Vue from 'vue'
import Router from 'vue-router'
import Album from '@/components/Album.vue'
import Singer from '@/components/Singer.vue'

Vue.use(Router)

const routes = [
  { 
    path: '/singer/:id',
    name:'singer', 
    component: Singer 
  },
  { 
    path: '/album/:id',
    name:'album',  
    component: Album 
  }
]

export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
