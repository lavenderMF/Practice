<!-- 发现-个性推荐-主播电台 -->
<template>
	<div id="radioStation">
		<ul class="List clearfix">
			<li v-for="(item,index) in djprogram">
				<div class="radioImg">
					<img :src="item.picUrl">
					<span class="radioAuthor">{{item.program.radio.name}}</span>
				</div>
				<span class="radioName">{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	data() {
		return {
		}
	},
	props: {
		djprogram: {}
	},
	updated() {
		this.$nextTick(function(){
			var width = document.body.clientWidth;
			var imgWidth = width * 0.31;
			var sheetImg = document.getElementsByClassName('sheetImg');
			for(let i = 0; i< sheetImg.length; i++){
				sheetImg[i].style.height = imgWidth + 'px';
			}
		})
	}
}
</script>

<style lang="less">
#radioStation{
	width: 100%;
	.List{
		margin-top: 10px;
		li{
			float: left;
			width: 31%;
			margin-bottom: 10px;
			margin-left: 1.85%;
			.radioImg{
				width: 100%;
				position: relative;
				img{
					width: 100%;
					height: auto;
				}
				.radioAuthor{
					position: absolute;
					bottom: 6px;
					left: 2px;
					color: #fff;
				    height: 12px;
					font-family: arial;
					font-size: 12px;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
			}
			.radioName{
				font-size: 12px;
				font-weight: bold;
				text-align: left;
			    margin: 10px 0;
			    height: 28px;
			    line-height: 14px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
		}
	}
}
.clearfix:after {
    content: ".";
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
}
</style>