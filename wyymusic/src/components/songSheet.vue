<template>
	<div id="songSheet">
		<ul class="songSheetList clearfix">
			<li v-for="item in songSheetList">
				<div class="songSheetImg">
					<img :src="item.coverImgUrl">
					<span class="playTotal">{{item.playCount}}</span>
					<span class="songSheetAuthor">{{item.creator.nickname}}</span>
				</div>
				<span class="songSheetName">{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return {
			songSheetList: {}
		}
	},
	created(){
		var self = this;
		this.$http({
			methods: 'get',
			url: 'http://localhost:3000/top/playlist/highquality?limit=10&offset=10'
		}).then(function(res){
			self.songSheetList = res.data.playlists;
			for(let i = 0; i< self.songSheetList.length; i++){
				if(parseInt(self.songSheetList[i].playCount) > 9999){
					var playCount = parseInt(self.songSheetList[i].playCount).toString();
					self.songSheetList[i].playCount = playCount.substring(0,playCount.length - 4) + '万';
				}
				
			}
			self.$nextTick(function(){
				var width = document.body.clientWidth;
				var imgWidth = width * 0.47225;
				var sheetImg = document.getElementsByClassName('songSheetImg');
				for(let i = 0; i< sheetImg.length; i++){
					sheetImg[i].style.height = imgWidth + 'px';
				}
			})
		})
	}
}
</script>

<style lang="less">
#songSheet{
	.songSheetList{
		li{
			width: 47.225%;
			float: left;
			margin-left: 1.85%;
			.songSheetImg{
				width: 100%;
				position: relative;
				// height: 100px;
				img{
					width: 100%;
				}
				.playTotal{
					position: absolute;
					top: 6px;
					right: 6px;
					color: #fff;
					font-family: arial;
					font-size: 12px
				}
				.songSheetAuthor{
					position: absolute;
					bottom: 10px;
					left: 6px;
					color: #fff;
					font-family: arial;
					font-size: 12px
				}
			}
			.songSheetName{
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