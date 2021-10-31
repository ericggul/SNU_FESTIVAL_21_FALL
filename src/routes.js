import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home/Home'));

const JabtiRouter = lazy(() => import('@/pages/jabti/JabtiRouter'));

const ActivityRouter = lazy(() => import('@/pages/activity/ActivityRouter'));
const PerformanceRouter = lazy(() => import('@/pages/performance/PerformanceRouter'));
const Clothing = lazy(() => import('@/pages/Clothing'));
const ClothingResult = lazy(() => import('@/pages/ClothingResult'));
const Fortune = lazy(() => import('@P/Fortune'));
const Introduction = lazy(() => import('@/pages/Introduction'));
const GuestBook = lazy(() => import('@/pages/GuestBook'));
const GoodsRouter = lazy(() => import('@/pages/goods/GoodsRouter'));
const PathMoveRouter = lazy(() => import('@/pages/PathMove'));
const LightMissionComplete = lazy(() => import('@/pages/home/LightMissionComplete'));

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/jabti',
    component: JabtiRouter,
  },
  {
    path: '/activity',
    component: ActivityRouter,
  },
  {
    path: '/performance',
    component: PerformanceRouter,
  },
  {
    path: '/path-move',
    component: PathMoveRouter,
    exact: true,
  },
  {
    path: '/clothing',
    component: Clothing,
    exact: true,
  },
  {
    path: '/clothing/result',
    component: ClothingResult,
    exact: true,
  },
  {
    path: '/fortune',
    component: Fortune,
    exact: true,
  },
  {
    path: '/introduction',
    component: Introduction,
    exact: true,
  },
  {
    path: '/guest-book',
    component: GuestBook,
    exact: true,
  },
  {
    path: '/goods',
    component: GoodsRouter,
  },
  {
    path: '/light-mission-completed-yeaaay',
    component: LightMissionComplete,
    exact: true,
  },
];
export default routes;
