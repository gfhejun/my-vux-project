<template>
	<div>
		<div class="logo">
			<img src="../assets/gf_logo.png"/>
		</div>
		<group id="group">
			<x-input title="账号"></x-input>
			<x-input class="border-bottom" title="密码" type="password"></x-input>
			<div id="input-vcode"><x-input title="验证码"></x-input></div>
			<div id="image-vcode"><img src="../assets/vcode.png"></img></div>
		</group>
		<x-button id="login_btn" type="primary" v-on:click="login">登录</x-button>
		<loading :show="loadingShow" text="登录中..."></loading>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	import VueRouter from '../../node_modules/vue-router/dist/vue-router.js'
	import Group from 'vux-components/group'
	import XInput from 'vux-components/x-input'
	import XButton from 'vux-components/x-button'
	import Loading from 'vux-components/loading'
	import Toast from 'vux-components/toast'

	Vue.use(VueRouter);
	var router = new VueRouter();

	export default{
		components:{
			Group,
			XInput,
			XButton,
			Loading,
			Toast
		},
		methods:{
			login: function () {
				this.loadingShow = true;
		  		setTimeout(() =>{
		  			this.loadingShow = false;
		  			router.go("/applylist");
		  		},2000);
			}
		},
		data(){
			return{
				loadingShow: false
			}
		}
	}
</script>
<style type="text/css">
	.logo{
		margin-top: 80px;
		text-align:center;
	}

	.logo img{
		height: 75px;
		width: 200px;
	}

	#group{
		margin-top: 50px;
	}

	#login_btn{
		margin: 30px 0 0 5px;
		width: 96%;
	}

	#input-vcode{
		display: inline-block;
		width: 70%;
	}

	#image-vcode{
		display: inline-block;
		width: 25%;
		text-align: center;
	}

	#image-vcode > img{
		vertical-align: middle;
	}

	.border-bottom{
		border-bottom: 1px solid #d9d9d9;
	}

	.weui_cell:before{
		left:0;
	}
</style>