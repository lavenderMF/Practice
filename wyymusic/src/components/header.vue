<template>
	<div class="header">
		<div class="get-user"></div>
		<div class="menu-tab">
			<div class="tab border-1px">
		    	<div class="tab-item">
		    		<router-link to="/myMusic">我的</router-link>
		    	</div>
		    	<div class="tab-item">
		    		<router-link to="/findMusic">发现</router-link>
		    	</div>
		    	<div class="tab-item">
		    		<router-link to="/dynamic">动态</router-link>
		    	</div>
		    </div>
		</div>
		<div class="search-btn"></div>
	</div>
</template>

<script>
	export default {};
</script>

<style>
.header{
	height: 50px;
	background: #D33B30;
	display: flex;
}
.get-user{
	flex: 0 0 50px;
	background: #7E8C8D;
}
.menu-tab{
	flex: 1;
}
.tab{
	width: 60%;
	margin: 0 auto;
	display: flex;
}
.tab-item{
	flex: 1;
	line-height: 50px;
}
.tab-item a{
	color: #fff;
}
.search-btn{
	flex: 0 0 50px;
	background: #42B983;
}
</style>