<template>
	<div id="eclusive">
		<div class="eclusiveList clearfix">
			<div class="eclusiveItem" v-for="(item,index) in eclusiveList" :class="(index==2) ? 'eclusiveItemLast' : ''">
				<div class="eclusiveImg">
					<img :src="(index==2) ? item.picUrl : item.sPicUrl">
				</div>
				<span class="eclusiveName">{{item.name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data() {
		return {
		}
	},
	props: {
		eclusiveList: {}
	},
	created() {

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
#eclusive{
	width: 100%;
	.eclusiveList{
		width: 100%;
		margin: 20px 0;
		.eclusiveItem{
			width: 47.225%;
			float: left;
			margin-left: 1.85%;
			.eclusiveImg{
				width: 100%;
				// height: 100px;
				img{
					width: 100%;
				}
			}
			.eclusiveName{
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
		.eclusiveItemLast{
			width: 96.3%;
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