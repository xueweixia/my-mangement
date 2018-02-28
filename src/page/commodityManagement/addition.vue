<template>
  <div>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;text-align: center;background: lightpink;color:#fff">
          <h3>购物车</h3>
    </el-col>
    <el-table
      :data="realTableData"
      border
      size="small"
      :default-sort = "{prop: 'price', order: 'descending'}"
      style="width: 100%"
      @selection-change="selected">
      <el-table-column
        type="selection"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column type="index" align="center" width="60" label="序号"></el-table-column>
      <el-table-column
        label="商品名称"
        align="center"
        width="420">
        <template scope="scope">
          <div style="margin-left:10px">
            <div style="width:100px"><img :src="scope.row.goods.img" style="height: 50px;width: 70px;vertical-align: middle"></div>
            <span style="font-size: 12px;padding-left:40px;">{{scope.row.goods.descript}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="单价" align="center" width="150" prop="price"></el-table-column>
      <el-table-column label="数量" align="center" width="200">
        <template scope="scope">
          <div>
            <el-input
              v-model="scope.row.number" @change="handleInput(scope.row)">
              <el-button slot="prepend" @click="del(scope.row)"><i class="el-icon-minus"></i></el-button>
              <el-button slot="append" @click="add(scope.row)"><i class="el-icon-plus"></i></el-button>
            </el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="小计" align="center" width="150" prop="goodTotal"></el-table-column>
      <el-table-column label="操作" align="center" >
        <template scope="scope">
          <el-button type="success">
            编辑<i class="el-icon-edit el-icon--right"></i>
          </el-button>
          <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">
            删除<i class="el-icon-delete el-icon--right"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <div style="text-align: center">
      <el-button style="border:transparent;margin-top:20px" @click="getMore">查看更多...</el-button>
      <el-button type="primary" style="float: right">结算</el-button>
      <el-button type="info" style="float: right">{{"商品总额：" + moneyTotal}}</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    name:'dashboard',
    data:function() {
      return {
      tableData: [
        {
        goods:{
          img:'http://file3.youboy.com/e/2014/11/16/11/545049.jpg',
          descript:'法玛莎品牌手提包包',
        },
        price:'1459.00',
        number:1,
        goodTotal:'1459.00',
      },
        {
        goods:{
          img:'http://pic30.photophoto.cn/20140215/0037037095907776_b.jpg',
          descript:'KooDao品牌女士包包',
        },
        price:'2999.00',
        number:1,
        goodTotal:'2999.00',
      },
        {
        goods:{
          img:'http://pic23.photophoto.cn/20120610/0037037071088628_b.jpg',
          descript:'ROWILUX罗威品牌包',
        },
        price:'3559.00',
        number:1,
        goodTotal:'3559.00',
      },{
        goods:{
          img:'http://file.youboy.com/a/146/53/89/7/695077s.jpg',
          descript:'VENI品牌简约手提包',
        },
        price:'1789.00',
        number:1,
        goodTotal:'1789.00',
      },
        {
          goods:{
            img:'http://www.qqqnm.com/uploadfile/2015/0414/20150414032348653.jpg',
            descript:'迪桑娜新款单肩斜挎包',
          },
          price:'859.00',
          number:1,
          goodTotal:'859.00',
        },
        {
          goods:{
            img:'http://img006.hc360.cn/m1/M00/CF/63/wKhQcFRIoPCEdyncAAAAAOKQYtM623.jpg',
            descript:'HONGU红谷女包',
          },
          price:'2459.00',
          number:1,
          goodTotal:'2459.00',
        },
        {
          goods:{
            img:'http://pic31.photophoto.cn/20140416/0020033060935102_b.jpg',
            descript:'歌诗曼女包手提包',
          },
          price:'1459.00',
          number:1,
          goodTotal:'1459.00',
        },
        {
          goods:{
            img:'http://info.moonbasa.com/files/2015/4/15/19-450771522385.jpg',
            descript:'纽芝兰简约大气个性包',
          },
          price:'1459.00',
          number:1,
          goodTotal:'1459.00',
        },
        {
          goods:{
            img:'http://image6.huangye88.com/2013/10/09/a81bde4db17b361d.png',
            descript:'萨米璐单肩女士包包',
          },
          price:'1459.00',
          number:1,
          goodTotal:'1459.00',
        }
      ],
      realTableData:[],
      moneyTotal:0,
      multipleSelection:[]
    }
    },
    created:function(){
      this.realTableData = this.tableData.slice(0,6)
    },
    methods:{
      handleDelete(index, row) {
        this.$confirm('确定删除该商品？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //删除数组中指定的元素
          this.realTableData.splice(index,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleInput:function(value){
        if(null==value.number || value.number==""){
          value.number=1;
        }
        value.goodTotal=(value.number*value.price).toFixed(2);//保留两位小数
        //增加商品数量也需要重新计算商品总价
        this.selected(this.multipleSelection);
      },
      add:function(addGood){
        //输入框输入值变化时会变为字符串格式返回到js
        //此处要用v-model，实现双向数据绑定
        if(typeof addGood.number=='string'){
          addGood.number=parseInt(addGood.number);
        };
        addGood.number+=1;
        this.handleInput(addGood)
      },
      del:function(delGood){
        if(typeof delGood.number=='string'){
          delGood.number=parseInt(delGood.number);
        };
        if(delGood.number>1){
          delGood.number-=1;
        }
        this.handleInput(delGood)
      },
      //返回的参数为选中行对应的对象
      selected:function(selection){
        this.multipleSelection=selection;
        console.log(this.multipleSelection);
        this.moneyTotal=0;
        //此处不支持forEach循环，只能用原始方法了
        for(var i=0;i<selection.length;i++){
          //判断返回的值是否是字符串
          if(typeof selection[i].goodTotal=='string'){
            selection[i].goodTotal=parseInt(selection[i].goodTotal);
          };
          this.moneyTotal+=selection[i].goodTotal;
        }
      },
      getMore:function(){
        var len = this.realTableData.length;
        var length = this.tableData.length - this.realTableData.length;
        if(length>3){
          this.realTableData =this.tableData.slice(0,len+2);
        }else{
          this.realTableData = this.tableData.slice(0);
        }
      }
    }
  }
</script>
