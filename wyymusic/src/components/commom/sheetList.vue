<template>
	<div id="sheetList">
		<ul class="List clearfix">
			<li v-for="(item,index) in sheetList" @click="selectSheet(item.id)">
				<div class="sheetImg">
					<img :src="item.picUrl">
					<span class="playTotal">{{item.playCount}}万</span>
				</div>
				<span class="sheetName">{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	data() {
		return {
			playcount: []
		}
	},
	props: {
		sheetList: {}
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
	},
	methods: {
		selectSheet(id){
			this.$emit('songSheetId',id);
		}
	}
}
</script>

<style lang="less">
#sheetList{
	width: 100%;
	.List{
		margin-top: 10px;
		li{
			float: left;
			width: 31%;
			margin-bottom: 10px;
			margin-left: 1.85%;
			.sheetImg{
				width: 100%;
				position: relative;
				img{
					width: 100%;
					height: auto;
				}
				.playTotal{
					position: absolute;
					top: 6px;
					right: 6px;
					color: #fff;
					font-family: arial;
					font-size: 12px
				}
			}
			.sheetName{
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