<!-- 组件-页面小标题 -->
<template>
	<div id="theTitle">
		{{titleText}}  >
	</div>
</template>

<script>
export default {
	props: {
		titleText: ''
	}
}
</script>

<style lang="less">
#theTitle{
	height: 20px;
	line-height: 20px;
	position: relative;
	padding-left: 10px;
	text-align: left;
	&:before{
		position: absolute;
		content: '';
		width: 2px;
		height: 20px;
		background: #d23b30;
		top: 0;
		left: 0;
	}
}
</style>