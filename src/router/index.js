import { createRouter, createWebHashHistory } from 'vue-router'
import router_1 from '../components/router_1.vue'
import router_2 from '../components/router_2.vue'
import test_axios from '../components/test_axios.vue'
import axios_in_setup from '../components/axios_in_setup.vue'
 
const routerHistory = createWebHashHistory()

//用此方法无法渲然
//const Home = { template: '<div>Home</div>' }
//const About = { template: '<div>About</div>' }
 
const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', component: router_1 },
    { path: '/about', component: router_2 },
    { path: '/axios', component: test_axios},
    { path: '/axios_in_setup', component: axios_in_setup }
  ]
})
export default router
 







