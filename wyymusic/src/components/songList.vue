<!-- 歌单里面的歌曲列表组件 -->
<template>
	<div class="songList">
		<div class="listTitle"></div>
		<ul class="theSongList">
			<li class="songItem" v-for="(item,index) in songList" @click="selectSong(item.id)">
				<span class="leftNumber">{{index}}</span>
				<div class="rigthSongInfo">
					<div class="leftInfo">
						<span class="name">{{item.name}}</span>
						<span class="info"><em v-for="songname in item.ar">{{songname.name}}</em> - {{item.al.name}}</span>
					</div>
					<span class="rigthMore"></span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			songList: {}
		},
		methods: {
			selectSong(id){
				// 切换播放歌曲id
				this.$store.state.songId = id;
			}
		}
	}
</script>

<style lang="less">
.theSongList{
	.songItem{
		height: 60px;
		line-height: 60px;
		display: flex;
		.leftNumber{
			flex: 0 0 70px;
		}
		.rigthSongInfo{
			flex: 1;
			display: flex;
			border-bottom: 1px solid #d8dcdb;
			.leftInfo{
				flex: 1;
				text-align: left;
				span{
					display: block;
					height: 30px;
					line-height: 30px
				}
				em{
					font-style: normal;
				}
				.name{
					line-height: 35px;
				}
				.info{
					font-size: 12px;
					height: 20px;
					line-height: 20px;
					color: #7c807f;
					overflow: hidden;
				}
			}
			.rigthMore{
				flex: 0 0 70px;
			}
		}
	}
}
</style>