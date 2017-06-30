<template>
	<div id="songSheet">
		<ul class="songSheetList clearfix">
			<li v-for="item in songSheetList">
				<div class="songSheetImg">
					<img :src="item.coverImgUrl">
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
				// height: 100px;
				img{
					width: 100%;
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