import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Website from "../views/Website.vue";
import Blogs from "../views/Blogs.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";

// Blog Posts
import ProjectGroceryManagement from "../views/ProjectGroceryManagement.vue"
import ProjectSublevel from "../views/ProjectSublevel.vue"
import ArkFarm from "../views/ArkFarm.vue"

// Blog Cards
import BTC from "../views/blogs/BTC.vue"
import ETH from "../views/blogs/ETH.vue"
import ADA from "../views/blogs/ADA.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: "/Website",
    name: "Website",
    component: Website,
    meta: {
      title: 'Website'
    }
  },
  {
    path: "/Blogs",
    name: "Blogs",
    component: Blogs,
    meta: {
      title: 'Blogs'
    }
  },  
  {
    path: "/About",
    name: "About",
    component: About,
    meta: {
      title: 'About Me'
    }
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: 'Forgot Password'
    }
  },
  {
    path: "/ProjectSublevel",
    name: "ProjectSublevel",
    component: ProjectSublevel,
    meta: {
      title: 'Project Sublevel'
    }
  },
  {
    path: "/ProjectGroceryManagement",
    name: "ProjectGroceryManagement",
    component: ProjectGroceryManagement,
    meta: {
      title: 'Grocery Management App'
    }
  },
  {
    path: "/ArkFarm",
    name: "ArkFarm",
    component: ArkFarm,
    meta: {
      title: 'ArkFarm'
    }
  },
  {
    path: "/Blogs/BTC",
    name: "BTC",
    component: BTC,
    meta: {
      title: 'BTC'
    }
  },
  {
    path: "/Blogs/ETH",
    name: "ETH",
    component: ETH,
    meta: {
      title: 'ETH'
    }
  },
  {
    path: "/Blogs/ADA",
    name: "ADA",
    component: ADA,
    meta: {
      title: 'ADA'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Joe Archondis`;
    next();
});

export default router;
