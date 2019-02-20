import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Campaigns = React.lazy(() => import('./views/Campaigns'));
const Empty = React.lazy(() => import('./views/Empty'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Empty },
  { path: '/inbox', name: 'Inbox', component: Empty },
  { path: '/campaigns', name: 'Campaigns', component: Campaigns },
  { path: '/autoresponders', name: 'Autoresponders', component: Empty },
  { path: '/keywords', name: 'Keywords', component: Empty },
  { path: '/subscribers', name: 'Subscribers', component: Empty },
  { path: '/apps', name: 'Apps', component: Empty },
  { path: '/analytics', name: 'Analytics', component: Empty },
  { path: '/help', name: 'Help', component: Empty },
];

export default routes;
