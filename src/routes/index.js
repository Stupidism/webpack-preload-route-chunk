const FooRoute = () =>
  import(/* webpackChunkName: "routes.FooRoute" */ './FooRoute');
const BarRoute = () =>
  import(/* webpackChunkName: "routes.BarRoute" */ './BarRoute');
const BazRoute = () =>
  import(/* webpackChunkName: "routes.BazRoute" */ './BazRoute');

const asyncConfig = route => {
  const meta = {
    promise: null,
    Component: null,
  };

  const loader = async () => {
    if (meta.Component) return meta.Component;
    if (meta.promise) return meta.promise;
    meta.promise = route.loadComponent().then(module => {
      meta.Component = module.default || module;
      meta.promise = null;
      return meta.Component;
    });
    return meta.promise;
  };

  return {
    ...route,
    loader,
    meta,
  };
};

const routes = [
  {
    path: '/',
    exact: true,
    loadComponent: FooRoute,
  },
  {
    path: '/bar',
    loadComponent: BarRoute,
  },
  {
    path: '/baz',
    loadComponent: BazRoute,
  },
].map(asyncConfig);

export default routes;
