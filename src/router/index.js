import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue'
import Dashboard from '../page/dashboard.vue'
import Detail from '../page/details.vue'
import NotFound from '../page/404.vue'
import Login from '../page/Login.vue'
import Catalog from '../page/categoryOfGoods/catalog.vue'
import Label from '../page/categoryOfGoods/label.vue'
import List from '../page/categoryOfGoods/list.vue'
import Addition from '../page/commodityManagement/addition.vue'
import Query from '../page/commodityManagement/query.vue'
import Stock from '../page/commodityManagement/stock.vue'
import Finished from '../page/orderManagement/finished.vue'
import Full from '../page/orderManagement/fullOrder.vue'
import Delivery from '../page/orderManagement/pendingDelivery.vue'
import Payment from '../page/orderManagement/pendingPayment.vue'
import Personal from '../page/systemSetup/personalInformation.vue'
import Modify from '../page/systemSetup/modifyPassword.vue'

Vue.use(Router)

export default new Router({
  routes: [
    //{
    //  path: '/login',
    //  name: '',
    //  component: Login,
    //  hidden:true
    //},
    //{
    //  path:'/404',
    //  component:NotFound,
    //  name:'',
    //  hidden:true
    //},
    {
      path:'/',
      name: 'home',
      component:Home,
      leaf:true, //只有一个节点
      menuShow:true,
      iconCls: 'fa fa-id-card-o',  //图标样式class
      redirect:'/dashboard',
      children: [
        { path: '/dashboard', component: Dashboard, name: '首页' , menuShow: true}
      ]
    },
    {
      path:'/',
      name: 'home',
      component:Home,
      leaf:true, //只有一个节点
      menuShow:true,
      iconCls: 'fa fa-id-card-o',  //图标样式class
      redirect:'/dashboard',
      children: [
        { path: '/goodDetail', component: Detail, name: '详情页页' , menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '商品管理',
      menuShow:true,
      iconCls: 'fa fa-id-card-o',
      children: [
        { path: '/commodityManagement/addition', component: Addition, name: '商品添加' },
        { path: '/commodityManagement/query', component: Query, name: '商品查询' },
        { path: '/commodityManagement/stock', component: Stock, name: '商品库存' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '商品类别',
      menuShow:true,
      iconCls: 'fa fa-id-card-o',
      children: [
        { path: '/categoryOfGoods/catalog', component: Catalog, name: '分类目录' },
        { path: '/categoryOfGoods/label', component: Label, name: '类别标签' },
        { path: '/categoryOfGoods/list', component: List, name: '商品列表' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '订单管理',
      menuShow:true,
      iconCls: 'fa fa-id-card-o',
      children: [
        { path: '/orderManagement/fullOrder', component: Full, name: '全部订单' },
        { path: '/orderManagement/delivery', component: Delivery, name: '待发货' },
        { path: '/orderManagement/payment', component: Payment, name: '待付款' },
        { path: '/orderManagement/finished', component: Finished, name: '已完成' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '系统设置',
      menuShow:true,
      iconCls: 'fa fa-id-card-o',
      children: [
        { path: '/systemSetup/personal', component: Personal, name: '个人信息' },
        { path: '/systemSetup/modify', component: Modify, name: '修改密码' }
      ]
    },
  ]
})










