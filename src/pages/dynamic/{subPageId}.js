// src/pages/dynamic/{subPageId}.js

import React from 'react';
import { navigate } from 'gatsby';

const ClientOnlyRoute = ({ location }) => {
  const subPageId = location.pathname.split('/').pop();

  // Redirect to the main page and pass state
  navigate('/dynamic', { state: { subPageId }, replace: true });

  return null;
};

export default ClientOnlyRoute;
