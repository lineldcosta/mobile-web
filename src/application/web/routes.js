import IndexPage from 'application/web/scenes/index-page';
import NotFoundIndex from 'application/web/scenes/not-found-page';
import NotFoundRoutes from 'application/web/scenes/not-found-page/routes';
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
