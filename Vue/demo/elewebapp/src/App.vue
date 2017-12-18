<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header/header'
export default {
  name: 'app',
  components: {
    'v-header': header
  },
  created(){
    this.$http.get('/api/seller').then((res) => {
      res = res.body
      if(res.status == true){
        this.seller = res.data
      }
    })
  },
  data(){
    return {
      seller: {}
    }
  },
}
</script>

<style>
  /*@import "./common/stylus/mixin.styl"*/

#app .tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  /*border-1px(rgba(7, 17, 27, 0.1))*/
  border:1px solid rgba(7, 17, 27, 0.1);
}
#app .tab .tab-item{
  flex: 1;
  text-align: center;
}
#app .tab .tab-item a{
  display: block;
  font: 14px;
  color: rgb(77, 85, 93);
}
#app .tab .tab-item a:hover{
  color: rgb(240, 20, 20);
}
</style>
