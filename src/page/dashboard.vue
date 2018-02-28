<template>
  <div>
    <div class="block" style="margin-bottom:2%">
      <el-carousel height="360px">
        <el-carousel-item>
          <img  src="../assets/images/dashboard/1.jpg" style="width:100%">
        </el-carousel-item>
        <el-carousel-item>
          <img  src="../assets/images/dashboard/2.jpg" style="width:100%">
        </el-carousel-item>
        <el-carousel-item >
          <img  src="../assets/images/dashboard/3.jpg" style="width:100%">
        </el-carousel-item>
        <el-carousel-item>
          <img  src="../assets/images/dashboard/4.jpg" style="width:100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row style="margin-left: 10px;">
      <el-col :span="5" v-for="(item,index) in productList" style="margin-left:40px;margin-bottom:20px">
        <el-card :body-style="{ padding: '0px' }">
          <img  v-bind:src="item.image" class="image" style="width:100%">
          <div style="padding: 14px;">
            <span>{{item.name}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button" @click='selectGood(item.id)'>查看详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 265px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<script>
import router from '../router/index'
  export default {
    data:function() {
      return {
        productList:[],
        currentDate:''
      };
    },
    mounted:function(){
      this.cartView();
    },
    methods:{
      selectGood(id){
        router.push({
          path: 'goodDetail',
          query:{id:id}
        })
      },
      loadJson:function(){
       return this.$http.get('http://localhost:1111/static/data.json',{})
          .then(res=>{
            // console.log(res.data);
            this.realTableData = res.data;
          })
      },
      cartView:function(){
         var _this=this;
         this.$http.get("http://localhost:1111/static/details.json",{}).then(function (res) {
      
          _this.productList=res.data;//body是vue封装的一层
          var date = new Date();
          _this.currentDate = date.toLocaleTimeString();
      });
      }
    }
  }
</script>
