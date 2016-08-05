<template>
	<ul>
		<li class="search-user" v-for="user in users.users" track-by="usercode" v-on:click="addUser('',user)">
			{{user.username}}
			<span>
				({{user.deptname}})
			</span>
		</li>
	</ul>
	<ul v-for="dept in users.depts" track-by="deptid">
		<span class="search-dept">{{dept.deptname}}</span>
		<li class="search-user" v-for="user in dept.users" track-by="usercode" v-on:click="addUser(dept.deptname,user)">
			{{user.username}}
		</li>
	</ul>
</template>

<script type="text/javascript">
	export default{
		props:['users'],
		methods:{
			addUser:function (deptname,user) {
				if (deptname != ''){
					user.deptname = deptname;
				}
				this.$dispatch('select-user', user);//向父组件发出选择事件消息
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