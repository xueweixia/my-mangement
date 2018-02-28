<template>
  <div>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="商品名称" v-model="searchName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getGoods">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--列表-->
    <el-table
      :data="realTableData"
      border
      size="small"
      :default-sort = "{prop: 'price', order: 'descending'}"
      style="width: 100%"
    >
      <el-table-column type="index" align="center" width="60" label="序号"></el-table-column>
      <el-table-column
        label="商品图片"
        align="center">
        <template scope="scope">
          <div style="margin-left:10px">
            <div style="width:100px"><img :src="scope.row.img" style="height: 50px;width: 70px;vertical-align: middle"></div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="品牌名称" align="center" prop="name"></el-table-column>
      <el-table-column label="上市时间" align="center" prop="time"></el-table-column>
      <el-table-column label="单价" align="center" prop="price"></el-table-column>
      <el-table-column label="大小" align="center" prop="size"></el-table-column>
      <el-table-column label="质地" align="center" prop="texture"></el-table-column>
      <el-table-column label="流行元素" align="center" prop="elements"></el-table-column>
      <el-table-column label="使用对象" align="center" prop="useObj"></el-table-column>
      <el-table-column label="是否可拆叠" align="center" prop="dismantled"></el-table-column>
      <el-table-column label="风格" align="center" prop="style"></el-table-column>
      <el-table-column label="箱包硬度" align="center" prop="hardness"></el-table-column>
    </el-table>
    <br>
    <div style="text-align: right">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync="currentPage"
        :page-size="6"
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
            img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1438603130,2809225756&fm=27&gp=0.jpg',
            name:'ROWILUX罗威奢品牌手提包',
            price:3990,
            time:'2017年冬季',
            size :'中',
            texture:'鳄鱼皮',
            elements:'鳄鱼纹',
            useObj:'青年',
            dismantled:'否',
            style:'甜美淑女',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515029853&di=89bc520075c725aba3e5bb88e009b6b6&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.99inf.com%2Fspace%2F201307%2F3377418%2Fpic%2Fpic_file_3377418_1438225257.jpg',
            name:'法玛莎品牌手提包女',
            price:35990,
            time:'2016年冬季',
            size :'小',
            texture:'牛皮',
            elements:'波士顿包',
            useObj:'青年',
            dismantled:'是',
            style:'欧美、时尚潮流',
            hardness:'硬'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435696825&di=7c8cfed8740770497090bfdc440fbf7b&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi1%2FTB1YhgzGVXXXXawXFXXavtMFFXX_728x728.jpg',
            name:'意大利GAVADI卡梵',
            price:13990,
            time:'2017年冬季',
            size :'大',
            texture:'鳄鱼皮',
            elements:'杀手包',
            useObj:'中年',
            dismantled:'否',
            style:'欧美',
            hardness:'硬'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435730727&di=04be9e713d53ad59c960e69a621f3576&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F54fbb2fb43166d221512f47f4c2309f79152d2f0.jpg',
            name:'KooDao品牌女士包包',
            price:18888,
            time:'2017年冬季',
            size :'中',
            texture:'鳄鱼皮',
            elements:'鳄鱼纹',
            useObj:'青年',
            dismantled:'否',
            style:'甜美淑女，小清新',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435778634&di=565c2efce796203befe00722f7c9b9f2&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb90e7bec54e736d13be1dada91504fc2d4626975.jpg',
            name:'LOUGHNEA品牌女包',
            price:23000,
            time:'2017年春',
            size :'中',
            texture:'牛皮',
            elements:'欧美',
            useObj:'青年',
            dismantled:'否',
            style:'甜美淑女',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435813356&di=9a971be635bf9aee8c7808953387d5c9&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F574e9258d109b3dee3b0cc8fc6bf6c81810a4ccd.jpg',
            name:'鳄鱼皮女包时尚单肩包',
            price:4500,
            time:'2017年秋季',
            size :'大',
            texture:'鳄鱼皮',
            elements:'链条包',
            useObj:'青年',
            dismantled:'否',
            style:'日韩风范，时尚潮流',
            hardness:'硬'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435813355&di=26c019e63d2921262701d495391ab616&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd1160924ab18972b9382ba26eccd7b899f510aa5.jpg',
            name:'ROWILUX罗威奢品牌手提包',
            price:15000,
            time:'2017年冬季',
            size :'中',
            texture:'鳄鱼皮',
            elements:'鳄鱼纹',
            useObj:'青年',
            dismantled:'否',
            style:'甜美淑女',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435814041&di=13a40cff62d45d596b4099eb0417c8bc&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F94cad1c8a786c917a931bcd0c33d70cf3bc7572d.jpg',
            name:'赤伦丹鳄轻奢品牌',
            price:12000,
            time:'2017年春季',
            size :'中',
            texture:'牛皮',
            elements:'鳄鱼纹',
            useObj:'青年',
            dismantled:'否',
            style:'其它',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435814041&di=2a2113503fee6dc5d662e9adf8e0406e&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F86d6277f9e2f070872c4abe7e324b899a801f210.jpg',
            name:'FGHGF轻奢品牌女士包包',
            price:9000,
            time:'2017年冬季',
            size :'中',
            texture:'牛皮',
            elements:'水桶包',
            useObj:'青年',
            dismantled:'否',
            style:'欧美，时尚潮流',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435891092&di=64cb6b4784037e25e63291587afc6c04&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff636afc379310a55fda14924bd4543a98326105c.jpg',
            name:'LOUGHNEA轻奢品牌',
            price:8000,
            time:'2017年秋季',
            size :'中',
            texture:'牛皮',
            elements:'鳄鱼纹',
            useObj:'青年',
            dismantled:'否',
            style:'甜美淑女',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435924421&di=751dfa854b8c6677b0eebd93fd9dd2b7&imgtype=0&src=http%3A%2F%2Fimage.suning.cn%2Fcontent%2Fcatentries%2F00000000010986%2F000000000109863694%2Ffullimage%2F000000000109863694_1f.jpg',
            name:'koodao绔道品牌复古包',
            price:10999,
            time:'2017年冬季',
            size :'小',
            texture:'鳄鱼皮',
            elements:'鳄鱼纹',
            useObj:'青年',
            dismantled:'否',
            style:'甜美淑女',
            hardness:'软'

          },
          {
            img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1438603130,2809225756&fm=27&gp=0.jpg',
            name:'ROWILUX罗威奢品牌手提包',
            price:3990,
            time:'2017年冬季',
            size :'中',
            texture:'鳄鱼皮',
            elements:'鳄鱼纹',
            useObj:'青年',
            dismantled:'否',
            style:'甜美淑女',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515029853&di=89bc520075c725aba3e5bb88e009b6b6&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.99inf.com%2Fspace%2F201307%2F3377418%2Fpic%2Fpic_file_3377418_1438225257.jpg',
            name:'法玛莎品牌手提包女',
            price:35990,
            time:'2016年冬季',
            size :'小',
            texture:'牛皮',
            elements:'波士顿包',
            useObj:'青年',
            dismantled:'是',
            style:'欧美、时尚潮流',
            hardness:'硬'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435696825&di=7c8cfed8740770497090bfdc440fbf7b&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi1%2FTB1YhgzGVXXXXawXFXXavtMFFXX_728x728.jpg',
            name:'意大利GAVADI卡梵',
            price:13990,
            time:'2017年冬季',
            size :'大',
            texture:'鳄鱼皮',
            elements:'杀手包',
            useObj:'中年',
            dismantled:'否',
            style:'欧美',
            hardness:'硬'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435730727&di=04be9e713d53ad59c960e69a621f3576&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F54fbb2fb43166d221512f47f4c2309f79152d2f0.jpg',
            name:'KooDao品牌女士包包',
            price:18888,
            time:'2017年冬季',
            size :'中',
            texture:'鳄鱼皮',
            elements:'鳄鱼纹',
            useObj:'青年',
            dismantled:'否',
            style:'甜美淑女，小清新',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435778634&di=565c2efce796203befe00722f7c9b9f2&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb90e7bec54e736d13be1dada91504fc2d4626975.jpg',
            name:'LOUGHNEA品牌女包',
            price:23000,
            time:'2017年春',
            size :'中',
            texture:'牛皮',
            elements:'欧美',
            useObj:'青年',
            dismantled:'否',
            style:'甜美淑女',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435813356&di=9a971be635bf9aee8c7808953387d5c9&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F574e9258d109b3dee3b0cc8fc6bf6c81810a4ccd.jpg',
            name:'鳄鱼皮女包时尚单肩包',
            price:4500,
            time:'2017年秋季',
            size :'大',
            texture:'鳄鱼皮',
            elements:'链条包',
            useObj:'青年',
            dismantled:'否',
            style:'日韩风范，时尚潮流',
            hardness:'硬'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435813355&di=26c019e63d2921262701d495391ab616&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd1160924ab18972b9382ba26eccd7b899f510aa5.jpg',
            name:'ROWILUX罗威奢品牌手提包',
            price:15000,
            time:'2017年冬季',
            size :'中',
            texture:'鳄鱼皮',
            elements:'鳄鱼纹',
            useObj:'青年',
            dismantled:'否',
            style:'甜美淑女',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435814041&di=13a40cff62d45d596b4099eb0417c8bc&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F94cad1c8a786c917a931bcd0c33d70cf3bc7572d.jpg',
            name:'赤伦丹鳄轻奢品牌',
            price:12000,
            time:'2017年春季',
            size :'中',
            texture:'牛皮',
            elements:'鳄鱼纹',
            useObj:'青年',
            dismantled:'否',
            style:'其它',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435814041&di=2a2113503fee6dc5d662e9adf8e0406e&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F86d6277f9e2f070872c4abe7e324b899a801f210.jpg',
            name:'FGHGF轻奢品牌女士包包',
            price:9000,
            time:'2017年冬季',
            size :'中',
            texture:'牛皮',
            elements:'水桶包',
            useObj:'青年',
            dismantled:'否',
            style:'欧美，时尚潮流',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435891092&di=64cb6b4784037e25e63291587afc6c04&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff636afc379310a55fda14924bd4543a98326105c.jpg',
            name:'LOUGHNEA轻奢品牌',
            price:8000,
            time:'2017年秋季',
            size :'中',
            texture:'牛皮',
            elements:'鳄鱼纹',
            useObj:'青年',
            dismantled:'否',
            style:'甜美淑女',
            hardness:'软'

          },
          {
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514435924421&di=751dfa854b8c6677b0eebd93fd9dd2b7&imgtype=0&src=http%3A%2F%2Fimage.suning.cn%2Fcontent%2Fcatentries%2F00000000010986%2F000000000109863694%2Ffullimage%2F000000000109863694_1f.jpg',
            name:'koodao绔道品牌复古包',
            price:10999,
            time:'2017年冬季',
            size :'小',
            texture:'鳄鱼皮',
            elements:'鳄鱼纹',
            useObj:'青年',
            dismantled:'否',
            style:'甜美淑女',
            hardness:'软'

          }
        ],
        realTableData:[],
        length:0,
        pageSize:6,
        searchName:'',
        arrTable:[],
        currentPage:1
      }
    },
    created:function(){
      this.realTableData = this.tableData.slice(0,this.pageSize);
      this.length = this.tableData.length;
      console.log(this.length);
    },
    methods:{
      getGoods:function(){
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
          if(arr.length>6){
            this.realTableData = arr.slice(0,6)
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
    }
  }
</script>
