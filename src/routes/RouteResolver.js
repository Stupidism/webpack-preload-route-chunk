import React from 'react';
import { matchRoutes } from 'react-router-config';
import { withRouter } from 'react-router';

const RouteResolver = ({ routes, location, Route }) => {
  const [branch] = matchRoutes(routes, location.pathname);
  return <Route key={branch.route.path} {...branch.route} match={branch.match} />;
};

export default withRouter(RouteResolver);
