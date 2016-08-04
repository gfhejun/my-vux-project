<template>
  <div>
    <x-header style="background-color:#08c" :left-options="{showBack: false}">
      主页
      <a slot="right" v-link="{name:'NewApply'}">新申请</a>
    </x-header>
    <tabbar>
      <tabbar-item show-dot v-link="{name:'ApplyList'}">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
        <span slot="label">我的申请</span>
      </tabbar-item>
      <tabbar-item show-dot v-link="{name:'ApprovalList'}">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
        <span slot="label">我的审批</span>
      </tabbar-item>
    </tabbar>
  </div>
  
</template>

<script>
import Tabbar from 'vux-components/tabbar'
import TabbarItem from 'vux-components/tabbar-item'
import XHeader from 'vux-components/x-header'

export default {
  components: {
    Tabbar,
    TabbarItem,
    XHeader
  }
}
</script>

<style type="text/css">
  a{
    text-decoration: none;
  }

  .vux-header-right a{
    color: white !important;
  }
</style>