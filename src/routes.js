import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const TarotRouter = lazy(() => import('@/pages/tarot/TarotRouter'));
const JabtiRouter = lazy(() => import('@/pages/jabti/JabtiRouter'));
const PokemongoRouter = lazy(() => import('@/pages/pokemongo/PokemongoRouter'));
const ActivityRouter = lazy(() => import('@/pages/activity/ActivityRouter'));
const PerformanceRouter = lazy(() => import('@/pages/performance/PerformanceRouter'));
const Apply = lazy(() => import('@/pages/Apply'));
const Introduction = lazy(() => import('@/pages/Introduction'));
const GuestBook = lazy(() => import('@/pages/GuestBook'));
const Vote = lazy(() => import('@/pages/Vote'));
const GoodsRouter = lazy(() => import('@/pages/goods/GoodsRouter'));
const DjRouter = lazy(() => import('@/pages/Dj'));
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
    path: '/pokemongo',
    component: PokemongoRouter,
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
    path: '/dj',
    component: DjRouter,
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
