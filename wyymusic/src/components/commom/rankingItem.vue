<template>
	<div id="rankingitem">
		<div class="itemImg">
			<img :src="rankingItem.coverImgUrl">
			<span class="itemName">{{rankingItem.name}}</span>
		</div>
		<div class="itemTopThree">
			<span class="" v-for="(item,index) in rankingItem.tracks">{{index+1}}.{{item.name}}</span>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		rankingItem: {}
	}
}
</script>

<style lang="less">
#rankingitem{
	width: 100%;
	height: 120px;
	display: flex;
	margin: 10px 0;
	.itemImg{
		flex: 0 0 120px;
		position: relative;
		img{
			width: 100%;
			height: 100%;
		}
		.itemName{
			position: absolute;
			left: 6px;
			bottom: 8px;
			font-size: 12px;
			color: #fff;
			text-align: left;
		}
	}
	.itemTopThree{
		flex: 1;
		border-bottom: 1px solid #D7DBDA;
		span{
			text-align: left;
			padding-left: 10px;
			margin: 18px 0;
			display: block;
			color: #595B5A;
		}
	}
}
</style>