import { createWebHistory, createRouter } from "vue-router";

import Profile from "@/views/Profile";
import Todos from "@/views/Todos";
import Tasks from "@/views/Tasks";

const routes = [
	{
		path: "/",
		name: "title"
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFound",
		component: () => import("@/views/NotFound"),
		meta: {
			title: "Страница не найдена",
		}
	},
	{
		path: "/profile",
		name: "profile",
		component: Profile,
		meta: {
			title: "Профиль",
		}
	},
	{
		path: "/todos",
		name: "list-todo",
		component: Todos,
		meta: {
			title: "Списки дел",
		}
	},
	{
		path: "/todos/:id",
		name: "item-todo",
		component: Tasks,
		props: route => ({id: parseInt(route.params.id)}),
		meta: {
			title: "Список дел",
		}
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "nav-active-link"
});

router.beforeEach(async (to, from, next) => {
	document.title = to.meta.title || 'Главная страница';
	return next();
});

export default router;