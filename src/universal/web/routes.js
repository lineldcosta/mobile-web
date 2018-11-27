import IndexPage from 'universal/web/screen/index-page';
import NotFoundIndex from 'universal/web/screen/not-found-page';
import NotFoundRoutes from 'universal/web/screen/not-found-page/routes';
import Layout from './layout';

export default [
  {
    path: '/',
    component: Layout,
    exact: false,
    routes: [
      {
        path: '/',
        exact: true,
        component: IndexPage,
      },
      {
        path: '/not-found/',
        component: NotFoundIndex,
        exact: false,
        routes: NotFoundRoutes,
      },
    ],
  },
];
