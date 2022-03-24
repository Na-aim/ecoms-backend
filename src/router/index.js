import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Products from '../views/Products.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
     component:Register
  },
  {
    path: '/Profile',
    name: 'Profile',
     component:Profile
  },
  {
    path: '/Products',
    name: 'Products',
     component:Products
  },
  {
    path: '/Contact',
    name: 'Contact',
     component: Contact
  },
  {
    path: '/Cart',
    name: 'Cart',
     component: Cart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const publicPages = ['/Login','/Register','/',];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    next('/Login');
  } else {
    next();
  }
});

export default router
