<template>
	<home></home>
	<div id="list">
		<scroller height="100%" :scrollbar-y="true" :lock-x="true" 
		:use-pullup="false" :use-pulldown="false">
		<div style="padding-bottom:50px">
			<group id="group">
				<cell v-for="cell in $route.cells" track-by="id" is-link
				v-bind:title="cell.title" v-link="{name:'MyApproval',params:{approvalid: cell.id}}">{{cell.status}}
			</cell>
		</group>
	</div>
</scroller>
</div>
</template>

<script>
	import Group from 'vux-components/group'
	import Cell from 'vux-components/cell'
	import Scroller from 'vux-components/scroller'

	import Home from './Home'

	export default{
		props:['cells'],

		components:{
			Group,
			Cell,
			Scroller,
			Home
		}
	}
</script>

<style type="text/css">
	#list{
		position: absolute;
		top: 45px;
		bottom: 45px;
		width: 100%;
	}

	#group{
		word-break: break-all;
		margin-top: 10px;
	}

	.weui_cell_bd{
		margin-right: 10px;
	}
</style>