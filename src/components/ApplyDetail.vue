<template>
	<x-header style="background-color:#08c" :left-options="{showBack: true}">
      {{$route.title}}
    </x-header>
    <group>
    	<datetime title="接待开始时间" v-if="$route.type=='new'"></datetime>
    	<x-input title="接待开始时间" v-if="$route.type!='new'">2016-08-04</x-input>
    	<datetime title="接待结束时间" v-if="$route.type=='new'"></datetime>
    	<x-input title="接待结束时间" v-if="$route.type!='new'">2016-08-05</x-input>
    </group>
    <group title="接待事由">
    	<x-textarea :value.sync="reason" placeholder="请输入接待事由.."></x-textarea>
    </group>
    <group title="接待单位">
    	<x-textarea :value.sync="unit" placeholder="请输入接待单位.."></x-textarea>
    	<x-input class="text-right" title="陪同员工" placeholder="提供搜索选人功能" :readonly="$route.type!='new'" :value.sync="employee" text-align="right"></x-input>
    	<x-input class="text-right" title="总人数" keyboard="number" :readonly="$route.type!='new'" :value.sync="amount" text-align="right" type="number" placeholder="接待陪同总人数"></x-input>
    	<x-input class="text-right" title="费用预算(元)" keyboard="number" :readonly="$route.type!='new'" :value.sync="expense" text-align="right" type="number"></x-input>
    </group>
    <group title="说明事项">
    	<x-textarea :value.sync="description" placeholder="请输入说明事项.."></x-textarea>
    </group>
    <group v-if="$route.type=='new'">
    	<x-input title="审批人" :value.sync="approver" placeholder="提供搜索选人功能" :readonly="$route.type!='new'" class="text-right" text-align="right"></x-input>
    </group>
    <group v-if="$route.type=='approval'" title="审批意见">
    	<radio :options="options" value="同意"></radio>
    	<x-textarea placeholder="补充说明"></x-textarea>
    </group>
    <x-button v-if="$route.type!='apply'" id="submit" type="primary" v-on:click="submit">提交</x-button>
    <loading :show="loadingShow" text="提交中..."></loading>
    <toast :show.sync="toastSuccess" type="text">提交成功!</toast>
</template>

<script>
import Vue from 'vue'
import VueRouter from '../../node_modules/vue-router/dist/vue-router.js'

import XHeader from 'vux-components/x-header'
import Group from 'vux-components/group'
import Cell from 'vux-components/cell'
import Datetime from 'vux-components/datetime'
import XTextarea from 'vux-components/x-textarea'
import XInput from 'vux-components/x-input'
import XNumber from 'vux-components/x-number'
import XButton from 'vux-components/x-button'
import Loading from 'vux-components/loading'
import Toast from 'vux-components/toast'
import Radio from 'vux-components/radio'

Vue.use(VueRouter);
var router = new VueRouter();

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Datetime,
    XTextarea,
    XInput,
    XNumber,
    XButton,
    Loading,
    Toast,
    Radio
  },
  methods: {
  	submit: function () {
  		this.loadingShow = true;
  		setTimeout(() =>{
  			this.loadingShow = false;
  			this.toastSuccess = true;
  			setTimeout(() =>{
  				router.go("/applylist");
  			},1000);
  		},2000);
  	}
  },
  data(){
  	return {
  		loadingShow: false,
  		toastSuccess: false,
  		options: ['同意','不同意'],
  		reason: '',
  		unit: '',
  		amount: '',
  		expense: '',
  		description: '',
  		employee: '',
  		approver: ''
  	}
  },
  route:{
  	data:function (transition) {
  		if (transition.to.type != "new"){
  			var approver = '';
  			
  			if (transition.to.type != "apply"){
  				approver = '丁';
  			}

  			transition.next({
  			reason: '与A公司进行业务交流',
	  		unit: 'AAA股份有限公司',
	  		amount: '6',
	  		expense: '3000',
	  		description: '包括聚餐、住宿',
	  		employee: '甲、乙、丙',
	  		approver: approver
  			})
  		}
  	}
  }
}

</script>

<style type="text/css">
	#submit{
		margin: 30px 0 30px 5px;
		width: 96%;
	}

	.text-right .weui_cell_ft{
		margin-left: 10px;
	}
</style>