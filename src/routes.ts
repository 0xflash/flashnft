export default [
  {
    exact: false,
    path: '/',
    component: '@/layouts/index',
    routes: [
      { exact: true, path: '/', component: '@/pages/index' },
      { exact: true, path: '/unclaimed', component: '@/pages/unclaimed' },
      { exact: true, path: '/ens', component: '@/pages/ens' },
      { component: '@/pages/404' },
    ],
  },
];
