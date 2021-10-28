import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const TarotRouter = lazy(() => import('@/pages/tarot/TarotRouter'));
const JabtiRouter = lazy(() => import('@/pages/jabti/JabtiRouter'));

const ActivityRouter = lazy(() => import('@/pages/activity/ActivityRouter'));
const PerformanceRouter = lazy(() => import('@/pages/performance/PerformanceRouter'));
const Apply = lazy(() => import('@/pages/Apply'));
const Clothing = lazy(() => import('@/pages/Clothing'));
const ClothingResult = lazy(() => import('@/pages/ClothingResult'));
const Fortune = lazy(() => import('@P/Fortune'));
const Introduction = lazy(() => import('@/pages/Introduction'));
const GuestBook = lazy(() => import('@/pages/GuestBook'));
const Vote = lazy(() => import('@/pages/Vote'));
const GoodsRouter = lazy(() => import('@/pages/goods/GoodsRouter'));
const ScreenTestRouter = lazy(() => import('@/pages/screen-test/ScreenTestRouter'));
const PathMoveRouter = lazy(() => import('@/pages/PathMove'));

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/tarot',
    component: TarotRouter,
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
    path: '/screen-test',
    component: ScreenTestRouter,
  },
  {
    path: '/path-move',
    component: PathMoveRouter,
    exact: true,
  },
  {
    path: '/apply',
    component: Apply,
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
    path: '/vote',
    component: Vote,
    exact: true,
  },
  {
    path: '/goods',
    component: GoodsRouter,
  },
];
export default routes;
