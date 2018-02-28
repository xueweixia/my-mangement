<template>
  <div id="detail" class="detail">
    <h1>详情页{{listId}}</h1>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        // id: this.$route.query.id,
        listId: this.$route.query.id,
        detail: {},
        loading: false,
        selectedGood: [],
        list:[]
      }
    },

    created(){
      this.fetchData();
      console.log(this.listId);
    },

    methods:{
      fetchData(){
        this.loading = true;

        //拿到查询字段，商品的id后进行http请求
        var id = this.id;
        var _this = this;
        this.$http.get('../static/listDetail.json')
          .then(response => {
               console.log(response.data);
          });
        this.loading = false;
      }
    }
  }
</script>
