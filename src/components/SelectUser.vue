<template>
	<div>
		<ul>
			<li class="search-user" v-for="user in users" v-on:click="deleteUser($index)">
				{{user.username}}({{user.deptname}})
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:['users'],
		methods:{
			deleteUser:function (index) {
				this.$dispatch('delete-user', index);//向父组件发出删除事件消息
			}
		}
	}
</script>
<style type="text/css">
	.search-user{
		margin: 5px 0 0 5px;
		display: inline-block;
		padding: 5px;
		background-color: #4FADFF;
		border-radius: 5px;
		color: white;
	}

	.search-dept{
		margin: 5px 0 0 5px;
		font-size: 16px;
		padding: 5px 0;
		display: block;
		color:grey;
		border-bottom: 2px solid #4FADFF;
	}
</style>