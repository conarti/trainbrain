import HomeView from '@/pages/home-page.vue';
import { MainLayout } from '@/widgets/layout';

export const routes = [
	{
		path: '/',
		component: MainLayout,
		children: [
			{
				path: '',
				name: 'home',
				component: HomeView,
			},
			{
				path: '/about',
				name: 'about',
				component: () => import('@/pages/about-page.vue'),
			},
		],
	},
];
