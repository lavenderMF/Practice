<!-- 歌单详情页-歌单歌曲列表 -->
<template>
	<div class="sheetDetail">
		<div class="detailTitle">
			<div class="detailHeader">
				<span class="back" @click="closeSheetDetail"></span>
				<span class="sheetName">{{songInfo.name}}</span>
				<div class="rigth"></div>
			</div>
			<div class="sheetBase">
				<div class="sheetImg">
					<img :src="songInfo.coverImgUrl">
				</div>
				<div class="sheetNameAuthor">
					<div>{{songInfo.name}}</div>
					<div class="mt30">
						<div class="avatar"><img :src="songInfo.creator.avatarUrl"></div>
						<span class="author">{{songInfo.creator.nickname}} ></span>
					</div>
					
				</div>
			</div>
			<div class="sheetBottomMenu">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<songList :songList="songList"></songList>
	</div>
</template>

<script>
import songList from './songList.vue';
export default {
	data() {
		return {
			songInfo: {
				name: '',
				coverImgUrl: '',
				creator: {
					avatarUrl: '',
					nickname: ''
				}
			},
			songList: {},
			id: ''
		}
	},
	props: {
		sheetId: '',
	},
	created() {
		var self = this;		
		this.id = this.sheetId;
		this.$http.get('http://localhost:3000/playlist/detail?id=' + this.id).then(function(data){
			self.$nextTick(function(){
				self.songList = data.data.playlist.tracks;
		    	self.songInfo.name = data.data.playlist.name;
		    	self.songInfo.coverImgUrl = data.data.playlist.coverImgUrl;
		    	self.songInfo.creator.avatarUrl = data.data.playlist.creator.avatarUrl;
		    	self.songInfo.creator.nickname = data.data.playlist.creator.nickname;
			})
		});		
	},
	components: {
		songList: songList
	},
	methods: {
		closeSheetDetail(){
			var status = false;
			this.$emit('closeSheetDetail', status);
		}
	}
}
</script>

<style lang="less">
.sheetDetail{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #f0f4f3;
	z-index: 9;
	overflow-y: scroll;
	.detailTitle{
		.detailHeader{
			display: flex;
			height: 60px;
			line-height: 60px;
			.back{
				flex: 0 0 80px;
			}
			.sheetName{
				flex: 1;
				overflow: hidden;
			}
			.rigth{
				flex: 0 0 140px;
			}
		}
		.sheetBase{
			width: 100%;
			height: 200px;
			display: flex;
			.sheetImg{
				flex: 0 0 180px;
				img{
					width: 140px;
					height: 140px;
					margin: 10px;
				}
			}
			.sheetNameAuthor{
				flex: 1;
				text-align: left;
				padding-top: 24px;
				.mt30{
					margin-top: 30px;
				}
				.avatar{
					width: 30px;
					height: 30px;
					line-height: 30px;
					border-radius: 100%;
					display: inline-block;
					overflow: hidden;
					margin-right: 5px;
					float: left;
					img{
						width: 30px;
						height: 30px;
					}
				}
				.author{
					display: inline-block;
					float: left;
					height: 30px;
					line-height: 30px;
				}
			}
		}
		.sheetBottomMenu{

		}
	}
}
</style>