<template>
  <div>
    <el-col :span="24" style="height: 30px;padding-top: 10px;background-color: #F8F8F8">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品分类</el-breadcrumb-item>
        <el-breadcrumb-item>分类目录</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-table
      :data="realTableData"
      border
      size="small"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column type="index" align="center" width="60" label="排序"></el-table-column>
      <el-table-column label="一级分类" align="center"  prop="number"></el-table-column>
      <el-table-column label="二级分类" align="center"  prop="name"></el-table-column>
      <el-table-column label="三级分类" align="center" prop="price"></el-table-column>
      <el-table-column label="四级分类" align="center"  prop="amount"></el-table-column>
      <el-table-column label="操作" align="center" >
        <template scope="scope">
          <a href="#">[修改]</a>
          <a href="#">[删除]</a>
          <a href="#">[查看商品]</a>
        </template>
      </el-table-column>
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
    data:function(){
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
        // tableData:[],
        realTableData:[],
        length:0,
        pageSize:12,
        currentPage:1
      }
    },
    created:function(){
      // this.loadJson();
      this.realTableData = this.tableData.slice(0,this.pageSize);
    
      this.length = this.tableData.length;
    },
    methods:{
      changePage:function(currentPage){
        this.realTableData = [];
        if(this.length < this.pageSize){
          this.realTableData = this.tableData;
        }else{
          var rest = this.length-(currentPage-1)*this.pageSize;
          if(rest<this.pageSize){
              this.realTableData = this.tableData.slice((currentPage-1)*this.pageSize);
          }else{
              this.realTableData = this.tableData.slice((currentPage-1)*this.pageSize,currentPage*this.pageSize);
          }
        }
      },
      loadJson:function(){
       return this.$http.get('http://localhost:1111/static/data.json',{})
          .then(res=>{
            // console.log(res.data);
            this.realTableData = res.data;
          })
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
