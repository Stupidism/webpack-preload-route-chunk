import routes from './routes';
import matchPath from './routes/matchPath';

for(let i = 0; i < routes.length; i++) {
  const { path, loader } = routes[i];
  const match = matchPath(path, window.location.pathname);
  if (match && match.isExact && loader) {
    loader();
    break;
  }
}

if (process.env.NODE_ENV === 'production') {
  import(/* webpackChunkName: "react-entry" */ '.');
} else {
  require('.');
}
