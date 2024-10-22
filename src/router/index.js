import { createRouter, createWebHashHistory } from "vue-router";
const env = import.meta.env
let routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录" },
    component: () => import("@/views/login/index.vue"),
  },

  {
    path: "/home",
    name: "home",
    meta: {title: env.VITE_PAGE_TITLE },
    component: () => import("@/views/home/index.vue"),
  },

  {
    // 配置404页面
    path: "/:catchAll(.*)",
		name: "NotFound",
	  meta: { title: "404" },
    component: () => import("@/views/exception/NotFound.vue"),
  },
];
// 路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      // 解决页面从列表页跳转到详情页返回,初始在原来位置
      return savePosition;
    } else {
      // 解决页面跳转后页面高度和前一个页面高度一样
      return { left: 0, top: 0 };
    }
  },
});

// 导航守卫
router.beforeEach((to, from, next) => {
	if(to.meta.title)	document.title=to.meta.title
  next();
});
// 导出
export default router;
