const FooRoute = () =>
  import(/* webpackChunkName: "routes.FooRoute" */ './FooRoute');
const BarRoute = () =>
  import(/* webpackChunkName: "routes.BarRoute" */ './BarRoute');
const BazRoute = () =>
  import(/* webpackPreload: true, webpackChunkName: "routes.BazRoute" */ './BazRoute');

const routes = [
  {
    path: '/',
    exact: true,
    loader: FooRoute,
  },
  {
    path: '/bar',
    loader: BarRoute,
  },
  {
    path: '/baz',
    loader: BazRoute,
  },
];

export default routes;
