<template>
  <div>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" style="margin-left: 175px">
        <el-form-item>
          <el-input placeholder="商品名称" v-model="searchName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getName">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="销售价格" v-model="searchPrice"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getPrice">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="商品总量" v-model="searchAmount"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getAmount">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table
      :data="realTableData"
      border
      size="small"
      style="width: 100%"
      @selection-change="selected">
      <el-table-column
        type="selection"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column type="index" align="center" width="60" label="序号"></el-table-column>
      <el-table-column label="库存编号" align="center"  prop="number"></el-table-column>
      <el-table-column label="商品名称" align="center"  prop="name"></el-table-column>
      <el-table-column label="销售价格" align="center" prop="price"></el-table-column>
      <el-table-column label="总量" align="center"  prop="amount"></el-table-column>
      <el-table-column label="备注" align="center"  prop="mark"></el-table-column>
    </el-table>
    <div style="text-align: right">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync="currentPage"
        :page-size="12"
        :total="length"
        @current-change="changePage"
      >
      </el-pagination>
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
            number:'201708271001',
            name:'ROWILUX罗威奢品牌手提包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271002',
            name:'HONGU红谷女包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271003',
            name:'VENI品牌简约手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271004',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271005',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271006',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271007',
            name:'迪桑娜新款单肩斜挎包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271008',
            name:'ROWILUX罗威奢品牌手提包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271009',
            name:'ROWILUX罗威奢品牌手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'2017082710010',
            name:'ROWILUX罗威奢品牌手提包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'2017082710011',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'2017082710012',
            name:'法玛莎品牌手提包包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271013',
            name:'KooDao品牌女士包包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271014',
            name:'迪桑娜新款单肩斜挎包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271015',
            name:'ROWILUX罗威奢品牌手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271016',
            name:'ROWILUX罗威奢品牌手提包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271017',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271018',
            name:'HONGU红谷女包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271019',
            name:'ROWILUX罗威奢品牌手提包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271020',
            name:'ROWILUX罗威奢品牌手提包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271021',
            name:'ROWILUX罗威奢品牌手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271022',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271023',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271024',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271025',
            name:'HONGU红谷女包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271026',
            name:'VENI品牌简约手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271027',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271028',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271029',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271030',
            name:'迪桑娜新款单肩斜挎包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271031',
            name:'HONGU红谷女包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271032',
            name:'VENI品牌简约手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271033',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271034',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271035',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271036',
            name:'迪桑娜新款单肩斜挎包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271037',
            name:'HONGU红谷女包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271038',
            name:'VENI品牌简约手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271039',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271040',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271041',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271042',
            name:'迪桑娜新款单肩斜挎包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271043',
            name:'HONGU红谷女包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271044',
            name:'VENI品牌简约手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271045',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271046',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271047',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271048',
            name:'迪桑娜新款单肩斜挎包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271049',
            name:'VENI品牌简约手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271050',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271051',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271052',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271053',
            name:'迪桑娜新款单肩斜挎包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271054',
            name:'HONGU红谷女包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271001',
            name:'ROWILUX罗威奢品牌手提包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271002',
            name:'HONGU红谷女包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271003',
            name:'VENI品牌简约手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271004',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271005',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271006',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271007',
            name:'迪桑娜新款单肩斜挎包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271008',
            name:'ROWILUX罗威奢品牌手提包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271009',
            name:'ROWILUX罗威奢品牌手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'2017082710010',
            name:'ROWILUX罗威奢品牌手提包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'2017082710011',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'2017082710012',
            name:'法玛莎品牌手提包包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271013',
            name:'KooDao品牌女士包包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271014',
            name:'迪桑娜新款单肩斜挎包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271015',
            name:'ROWILUX罗威奢品牌手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271016',
            name:'ROWILUX罗威奢品牌手提包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271017',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271018',
            name:'HONGU红谷女包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271019',
            name:'ROWILUX罗威奢品牌手提包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271020',
            name:'ROWILUX罗威奢品牌手提包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271021',
            name:'ROWILUX罗威奢品牌手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271022',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271023',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271024',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271025',
            name:'HONGU红谷女包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271026',
            name:'VENI品牌简约手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271027',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271028',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271029',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271030',
            name:'迪桑娜新款单肩斜挎包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271031',
            name:'HONGU红谷女包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271032',
            name:'VENI品牌简约手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271033',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271034',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271035',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271040',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271041',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271042',
            name:'迪桑娜新款单肩斜挎包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271043',
            name:'HONGU红谷女包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          },
          {
            number:'201708271044',
            name:'VENI品牌简约手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271045',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271046',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271047',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271048',
            name:'迪桑娜新款单肩斜挎包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271049',
            name:'VENI品牌简约手提包',
            price:990,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271050',
            name:'法玛莎品牌手提包包',
            price:3990,
            amount:789,
            mark:'库存适中'

          },
          {
            number:'201708271051',
            name:'ROWILUX罗威奢品牌手提包',
            price:9490,
            amount:4,
            mark:'库存不足'

          },
          {
            number:'201708271052',
            name:'ROWILUX罗威奢品牌手提包',
            price:90980,
            amount:434545,
            mark:'库存充裕'

          },
          {
            number:'201708271053',
            name:'迪桑娜新款单肩斜挎包',
            price:3990,
            amount:89284,
            mark:'库存充裕'

          },
          {
            number:'201708271054',
            name:'HONGU红谷女包',
            price:1990,
            amount:284,
            mark:'库存紧张'

          }
        ],
        moneyTotal:0,
        multipleSelection:[],
        realTableData:[],
        length:0,
        pageSize:12,
        searchName:'',
        searchAmount:'',
        searchPrice:'',
        arrTable:[],
        currentPage:1
      }
    },
    created:function(){
      this.realTableData = this.tableData.slice(0,this.pageSize);
      this.length = this.tableData.length;
    },
    methods:{
      //返回的参数为选中行对应的对象
      selected:function(selection){
//        this.multipleSelection=selection;
//        console.log(this.multipleSelection);
//        this.moneyTotal=0;
//        //此处不支持forEach循环，只能用原始方法了
//        for(var i=0;i<selection.length;i++){
//          //判断返回的值是否是字符串
//          if(typeof selection[i].goodTotal=='string'){
//            selection[i].goodTotal=parseInt(selection[i].goodTotal);
//          };
//          this.moneyTotal+=selection[i].goodTotal;
//        }
      },
      changePage:function(currentPage){
        this.realTableData = [];
        if(this.length < this.pageSize){
          this.realTableData = this.tableData;
        }else{
          var rest = this.length-(currentPage-1)*this.pageSize;
          if(rest<this.pageSize){
            if(this.arrTable.length==0){
              this.realTableData = this.tableData.slice((currentPage-1)*this.pageSize);
            }else{
              this.realTableData = this.arrTable.slice((currentPage-1)*this.pageSize);
            }
          }else{
            if(this.arrTable.length==0){
              this.realTableData = this.tableData.slice((currentPage-1)*this.pageSize,currentPage*this.pageSize);
            }else{
              this.realTableData = this.arrTable.slice((currentPage-1)*this.pageSize,currentPage*this.pageSize);
            }
          }
        }
      },
      getName:function(){
        if(this.searchName==''){
          this.currentPage = 1;
          this.arrTable = [];
          this.length = this.tableData.length;
          this.realTableData = this.tableData.slice(0,this.pageSize);
        }else{
          var arr = [];
          for(var i = 0;i<this.tableData.length;i++){
            if(this.tableData[i].name.indexOf(this.searchName)!=-1){
              arr.push(this.tableData[i]);
            }
          }
          if(arr.length>12){
            this.realTableData = arr.slice(0,12)
          }else{
            this.realTableData = arr;
          }
          this.length = arr.length;
          this.arrTable = arr;
          this.currentPage = 1;
          this.searchAmount = '';
          this.searchPrice = '';
        }
      },
      getAmount:function(){
        if(this.searchAmount==''){
          this.currentPage = 1;
          this.arrTable = [];
          this.length = this.tableData.length;
          this.realTableData = this.tableData.slice(0,this.pageSize);
        }else{
          var arr = [];
          for(var i = 0;i<this.tableData.length;i++){
            if(this.tableData[i].amount == this.searchAmount){
              arr.push(this.tableData[i]);
            }
          }
          if(arr.length>12){
            this.realTableData = arr.slice(0,12)
          }else{
            this.realTableData = arr;
          }
          this.length = arr.length;
          this.arrTable = arr;
          this.currentPage = 1;
          this.searchName = '';
          this.searchPrice = '';
        }
      },
      getPrice:function(){
        if(this.searchPrice ==''){
          this.currentPage = 1;
          this.arrTable = [];
          this.length = this.tableData.length;
          this.realTableData = this.tableData.slice(0,this.pageSize);
        }else{
          var arr = [];
          for(var i = 0;i<this.tableData.length;i++){
            if(this.tableData[i].price == this.searchPrice){
              arr.push(this.tableData[i]);
            }
          }
          if(arr.length>12){
            this.realTableData = arr.slice(0,12)
          }else{
            this.realTableData = arr;
          }
          this.length = arr.length;
          this.arrTable = arr;
          this.currentPage = 1;
          this.searchName = '';
          this.searchAmount = '';
        }
      },
    }
  }
</script>
