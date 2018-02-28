<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24" class="topbar-wrap">
      <div class="topbar-logo topbar-btn">
        <a href="/"><img src="../assets/longBao.png" style="padding-left:1px;width:57px"></a>
      </div>
      <div class="topbar-logos" v-show="!collapsed">
        <a href="/"><img src="../assets/logo1.png" style="width:100px;margin-left: 16px"></a>
      </div>
      <div class="topbar-title">
        <span style="font-size: 18px;color:#fff;">娜&薇名牌包</span>
      </div>
      <div class="topbar-account topbar-btn">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner"><i class="iconfont icon-user"></i>超级管理员<i
            class="iconfont icon-down"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/systemSetup/personal"><span style="color: #555;font-size: 14px;">个人信息</span></router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link :to="'/systemSetup/modify'"><span style="color: #555;font-size: 14px;">修改密码</span></router-link>
            </el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
    <!--中间-->
    <el-col :span="24" class="main">
      <!--左侧导航-->
      <aside :class="{showSidebar:!collapsed}">
        <!--展开折叠开关-->
        <div class="menu-toggle" @click.prevent="collapse">
          <i class="iconfont icon-menufold" v-show="!collapsed"></i>
          <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
        </div>
        <!--导航菜单-->
        <el-menu default-active="/" router :collapse="collapsed">
            <el-menu-item index="/">
              <i class="iconfont icon-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="/commodityManagement/addition">
              <template slot="title">
                <i class="iconfont icon-leaf"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="/commodityManagement/addition">商品添加</el-menu-item>
              <el-menu-item index="/commodityManagement/query">商品查询</el-menu-item>
              <el-menu-item index="/commodityManagement/stock">商品库存</el-menu-item>
            </el-submenu>
            <el-submenu index="/categoryOfGoods">
              <template slot="title">
                <i class="iconfont icon-books1"></i>
                <span>商品分类</span>
              </template>
              <el-menu-item index="/categoryOfGoods/catalog">分类目录</el-menu-item>
              <el-menu-item index="/categoryOfGoods/label">类别标签</el-menu-item>
              <el-menu-item index="/categoryOfGoods/list" >商品列表</el-menu-item>
            </el-submenu>
            <el-submenu index="/orderManagement">
              <template slot="title">
                <i class="iconfont icon-user"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="/orderManagement/fullOrder">全部订单</el-menu-item>
              <el-menu-item index="/orderManagement/delivery" >等待发货</el-menu-item>
              <el-menu-item index="/orderManagement/payment" >等待付款</el-menu-item>
              <el-menu-item index="/orderManagement/finished">已经完成</el-menu-item>
            </el-submenu>
            <el-submenu index="/systemSetup">
              <template slot="title">
                <i class="iconfont icon-setting"></i>
                <span>系统设置</span>
              </template>
              <el-menu-item index="/systemSetup/personal">个人信息</el-menu-item>
              <el-menu-item index="/systemSetup/modify" >修改密码</el-menu-item>
            </el-submenu>
        </el-menu>
      </aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="content-wrpper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name:'home',
    data:function(){
      return {
        collapsed:false
      }
    },
    methods:{
      handleOpen:function(key,keyPath){
        console.log(key, keyPath);
      },
      handleClose:function(key, keyPath) {
        console.log(key, keyPath);
      },
      collapse:function(){
        this.collapsed = ! this.collapsed
      }
    }
  }
</script>
<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;

  .topbar-wrap {
    height: 50px;
    line-height: 50px;
    background: #373d41;
    padding: 0px;

  .topbar-btn {
    color: #fff;
  }
  /*.topbar-btn:hover {*/
  /*background-color: #4A5064;*/
  /*}*/
  .topbar-logo {
    float: left;
    width: 59px;
    line-height: 26px;
  }
  .topbar-logos {
    float: left;
    width: 120px;
    line-height: 26px;
  }
  .topbar-logo img, .topbar-logos img {
    height: 40px;
    margin-top: 5px;
    margin-left: 2px;
  }
  .topbar-title {
    float: left;
    text-align: left;
    width: 200px;
    padding-left: 10px;
    border-left: 1px solid #000;
  }
  .topbar-account {
    float: right;
    padding-right: 12px;
  }
  .userinfo-inner {
    cursor: pointer;
    color: #fff;
    padding-left: 10px;
  }
  }
  .main {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    top: 50px;
    bottom: 0px;
    overflow: hidden;
  }

  aside {
    min-width: 50px;
    background: #333744;
  &::-webkit-scrollbar {
     display: none;
   }

  &.showSidebar {
     overflow-x: hidden;
     overflow-y: auto;
   }

  .el-menu {
    height: 100%; /*写给不支持calc()的浏览器*/
    height: -moz-calc(100% - 80px);
    height: -webkit-calc(100% - 80px);
    height: calc(100% - 80px);
    border-radius: 0px;
    background-color: #333744;
  }

  .el-submenu .el-menu-item {
    min-width: 60px;
  }
  .el-menu {
    width: 180px;
  }
  .el-menu--collapse {
    width: 60px;
  }

  .el-menu .el-menu-item, .el-submenu .el-submenu__title {
    height: 46px;
    line-height: 46px;
  }

  .el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
    background-color: #7ed2df;
  }
  }

  .menu-toggle {
    background: #4A5064;
    text-align: center;
    color: white;
    height: 26px;
    line-height: 30px;
  }

  .content-container {
    background: #fff;
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    padding-bottom: 1px;

  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }
  }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
