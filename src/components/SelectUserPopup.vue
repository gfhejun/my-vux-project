<template>
	<div id="popup">
		<popup :show.sync="popShow" height="100%" style="background-color:white">
			<x-header style="background-color:#08c" :left-options="{showBack: true,preventGoBack: true}" @on-click-back="back">{{title}}</x-header>
			<group class="search-group">
				<x-input placeholder="输入姓名或部门" class="search-key" :value.sync="keyword"></x-input>
				<input class="button" type="button" value="搜索" v-on:click="search"/>
			</group>
			<div class="select-title">搜索结果:（点击添加）</div>
			<div id="search-result">
				<search-user :users="searchResult"></search-user>
			</div>
			<div class="select-title">已选择的人员:（点击删除）</div>
			<div id="select-result">
				<select-user :users="selectResult"></select-user>
			</div>
			<div>
				<input class="button bottom-button" value="确认" v-on:click="submit"/>
			</div>
		</popup>
	</div>
</template>

<script type="text/javascript">
	import XHeader from 'vux-components/x-header'
	import Popup from 'vux-components/popup'
	import XInput from 'vux-components/x-input'
	import Group from 'vux-components/group'

	import SearchUser from './SearchUser'
	import SelectUser from './SelectUser'

	export default{
		components:{
			XHeader,
			Popup,
			XInput,
			Group,
			SearchUser,
			SelectUser
		},
		props:['title','popShow'],
		methods:{
			back: function () {
				this.keyword = '';
				this.selectResult = [];
				this.searchResult = [];
				this.$dispatch('hide-pop');//向父组件发出隐藏消息
			},
			search: function () {
				if (this.keyword == "姓名"){
					this.searchResult =
					{
						"users":[
						{"username":"王姓名","deptname":"信息技术部管理系统开发组","usercode":"wang"},
						{"username":"李姓名","deptname":"信息技术部系统管理组","usercode":"li"},
						{"username":"赵姓名","deptname":"上海分公司","usercode":"zhao"},
						{"username":"陈姓名","deptname":"广州分公司","usercode":"chen"}
						],
						"depts":[]
					};
				}else if (this.keyword == "部门"){
					this.searchResult =
					{
						"users":[],
						"depts":[
						{
							"deptname":"信息技术部管理系统开发组",
							"deptid":"1",
							"users":[
							{"username":"甲","usercode":"jia"},
							{"username":"乙","usercode":"yi"},
							{"username":"丙","usercode":"bing"},
							{"username":"丁","usercode":"ding"}
							]
						}
						]
					};
				}
			},
			submit: function () {
				this.keyword = '';
				this.selectResult = [];
				this.searchResult = [];
				 this.$dispatch('hide-pop');//向父组件发出隐藏消息
				},
				addUser: function (user) {
					if (this.hasUser(user)){
						return;
					}
					this.selectResult.push(user);
				},
				hasUser:function (user) {
					for (var i = 0,j = this.selectResult.length; i < j; i++){
						if (this.selectResult[i].usercode == user.usercode){
							return true;
						}
					}
					return false;
				},
				deleteUser:function (index) {
					this.selectResult.splice(index,1);
				}
			},
			data(){
				return{
					keyword:'',
					selectResult:[],
					searchResult:[]
				}
			},events:{
				'select-user':function (user) {
					this.addUser(user);
				},
				'delete-user':function (index) {
					this.deleteUser(index);
				}
			}
		}
	</script>
	<style type="text/css">
		#popup{
			word-break: break-all;
		}

		.search-key{
			width: 65%;
			display: inline-block;
		}

		.button{
			color: #ffffff;
			background-color: #428bca;
			border-color: #357ebd;
			padding: 4px 12px;
			font-size: 15px;
			font-weight: normal;
			line-height: 1.428571429;
			text-align: center;
			white-space: nowrap;
			border: 1px solid transparent;
			border-radius: 4px;
		}

		#popup .weui_cell_ft{
			display: none;
		}

		.search-group .weui_cells{
			margin-top: 5px;
		}

		.select-title{
			margin: 10px 0 0 10px;
		}

		#select-result,#search-result{
			margin: 10px;
			border-radius: 5px;
			padding: 8px 10px 8px 0 !important;
			border: 1px solid #D0C5C5 !important;
			overflow: auto;
			height: 140px;
			color:black;
		}

		.bottom-button{
			width: 10%;
			float: right;
			margin: 5px 10px 5px 0;
		}
	</style>