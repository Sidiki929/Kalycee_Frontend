import React, { lazy } from 'react';
// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';
import Profile from 'views/Profile';
const Login = Loadable(lazy(() => import('views/Login/index')));
const DashboardDefault = Loadable(lazy(() => import('views/Dashboard/Default')));
const UtilsTypography = Loadable(lazy(() => import('views/Utils/Typography')));
const SamplePage = Loadable(lazy(() => import('views/SamplePage')));
const Transactions = Loadable(lazy(() => import('views/Transactions')));
// ==============================|| MAIN ROUTES ||============================== //
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/home',
      element: <DashboardDefault />
    },
    {
      path: '/view/Transactions',
      element: <Transactions />
    },
    {
      path: '/view/Profile',
      element: <Profile />
    },
    {
      path: '/utils/util-typography',
      element: <UtilsTypography />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
    },
   
   
  ]
};


export default MainRoutes;
