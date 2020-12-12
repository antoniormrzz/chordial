export default [
  {
    path: '/resolvers',
    name: 'Resolvers',
    component: () =>
      import(
        /* webpackChunkName: "resolvers" */ '../views/resolvers/Resolvers.vue'
      )
  },
  {
    path: '/resolvers/new',
    name: 'New Resolver',
    component: () =>
      import(
        /* webpackChunkName: "resolver" */ '../views/resolvers/Resolver.vue'
      )
  },
  {
    path: '/resolvers/edit/:index',
    name: 'Edit Resolver',
    component: () =>
      import(
        /* webpackChunkName: "resolver" */ '../views/resolvers/Resolver.vue'
      )
  }
];
