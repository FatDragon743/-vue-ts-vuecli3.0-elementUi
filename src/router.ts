import Vue from 'vue';
import Router from 'vue-router';
// import Layout from '@/views/layout/layout.vue'; // 主模版
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index/index.vue'),
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('@/views/login/login.vue'),
    // },
    // // 首页商品
    // {
    //     path: '/home',
    //     name: 'home',
    //     redirect: '/home/model',
    //     component: Layout,
    //     children: [
    //         {
    //             path: 'model',
    //             name: 'model',
    //             meta: {
    //                 type: '2',
    //                 status: [
    //                     { value: '',  title: '全部' },
    //                     { status: '1',  title: '上架商品' },
    //                     { status: '0',  title: '待上架商品' },
    //                     { status: '2',  title: '下架商品' },
    //                     { status: '3',  title: '待处理商品' },
    //                 ],
    //             },
    //             component: () => import('@/views/model/model.vue'),
    //         },
    //         {
    //             path: 'content',
    //             name: 'content',
    //             meta: {
    //                 type: '3',
    //                 status: [
    //                     { value: '/home/content',  title: '商品管理', Field: '' },
    //                     { value: '1',  title: '上架商品', Field: '' },
    //                 ],
    //             },
    //             component: () => import('@/views/content/content.vue'),
    //         },
    //     ],
    // },
    // // 系统设置
    // {
    //     path: '/system',
    //     name: 'system',
    //     redirect: '/system/permission',
    //     component: Layout,
    //     children: [
    //         {
    //             path: 'permission',
    //             name: 'permission',
    //             meta: {
    //                 type: '3',
    //                 status: [
    //                     { value: '',  title: '权限列表', Field: '' },
    //                 ],
    //             },
    //             component: () => import('@/views/system/permission/permission.vue'),
    //         },
    //         {
    //             path: 'user',
    //             name: 'user',
    //             meta: {
    //                 type: '3',
    //                 status: [
    //                     { value: '',  title: '员工列表', Field: '' },
    //                 ],
    //             },
    //             component: () => import('@/views/system/user/user.vue'),
    //         },
    //         {
    //             path: 'permissionAdd',
    //             name: 'permissionAdd',
    //             meta: {
    //                 type: '2',
    //                 status: [
    //                     { value: '/system/permission',  title: '权限列表', Field: '' },
    //                     { value: '',  title: '权限设置', Field: '' },
    //                 ],
    //                 name: 'permission'
    //             },
    //             component: () => import('@/views/system/permission/permissionAdd.vue'),
    //         },
    //     ],
    // },
    {
        path: '/haveNot',
        name: 'haveNot',
        component: () => import('@/views/haveNot/haveNot.vue'),
    },
    {path: '*', redirect: '/haveNot'},
  ],
});
