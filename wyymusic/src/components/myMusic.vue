<!-- 我的 -->
<template>
	<div class="myMusic">
		<div class="aboutMy">
			<div class="aboutItem">
				<div class="leftIcon"></div>
				<div class="rightTitle">本地音乐<span class="tip tipNum">(0)</span></div>
			</div>
			<div class="aboutItem">
				<div class="leftIcon"></div>
				<div class="rightTitle">最近播放<span class="tip tipNum">(0)</span></div>
			</div>
			<div class="aboutItem">
				<div class="leftIcon"></div>
				<div class="rightTitle">下载管理<span class="tip tipNum">(0)</span></div>
			</div>
			<div class="aboutItem">
				<div class="leftIcon"></div>
				<div class="rightTitle">我的电台<span class="tip tipNum">(0)</span></div>
			</div>
			<div class="aboutItem">
				<div class="leftIcon"></div>
				<div class="rightTitle">我的收藏<span class="tip tipNum">(专辑/歌手/MV/专栏)</span></div>
			</div>
		</div>
		<div class="mySongSheet">
			<div class="mySongSheetHead" @click="hideMySongSheet">
				<div class="leftIcon"></div>
				<div class="SongSheetTitle">创建的歌单<span class="tip">(0)</span></div>
				<div class="setUp"></div>
			</div>
			<ul class="mySongSheetList mySongSheetDis" v-show="mySongSheetDis">
				<li class="mySongSheetItem" v-for="item in MyMusicSheet" @click="selectSheet(item.id)">
						<img class="SongSheetAvatar" :src="item.coverImgUrl"></img>
						<div class="rightContent">
							<div class="SongSheetInfo">
								<span class="SongSheetName">{{item.name}}</span>
								<span class="SongSheetNum">{{item.trackCount}}首</span>
							</div>
							<span class="isPlayIcon"></span>
						</div>
				</li>
			</ul>
		</div>
		<div class="collectSongSheet mySongSheet">
			<div class="mySongSheetHead collecteSongSheet" @click="hideCollectSongSheet">
				<div class="leftIcon"></div>
				<div class="SongSheetTitle">收藏的歌单<span class="tip">(0)</span></div>
				<div class="setUp"></div>
			</div>
			<ul class="mySongSheetList" v-show="collectSongSheetDis">
				<li v-for="item in CollectMusicSheet" class="mySongSheetItem" @click="selectSheet(item.id)">
					<img class="SongSheetAvatar" :src="item.coverImgUrl"></img>
					<div class="rightContent">
						<div class="SongSheetInfo">
							<span class="SongSheetName">{{item.name}}</span>
							<span class="SongSheetNum">{{item.trackCount}}首 by {{item.creator.nickname}}</span>
						</div>
						<span class="isPlayIcon"></span>
					</div>
				</li>
			</ul>
		</div>
		<sheetDetail @closeSheetDetail="closeSheetDetail" :sheetId="sheetId" v-if="sheetDetailShow"></sheetDetail>
	</div>
</template>

<script>
import sheetDetail from './sheetDetail';
	export default {
		data() {
			return {
				MySongSheetIsShow: true,
				collectSongSheetIsShow: true,
				MyMusicSheet: [],
				CollectMusicSheet: [],
				sheetDetailShow: false,
				sheetId: ''
			}
		},
		components: {
			sheetDetail
		},
		created () {
			var storage = window.localStorage;
			var uid = this.$store.state.uid ? this.$store.state.uid : storage.uid;
			var self = this;
			if(uid != ''){
				this.$http.get('http://localhost:3000/user/playlist?uid=' + uid).then(function(data){
				    self.$nextTick(function(){
				    	if(data.data.code == 200){
					    	for(var i = 0; i < data.data.playlist.length; i++){
						    	if(data.data.playlist[i].userId == uid){
						    		self.MyMusicSheet.push(data.data.playlist[i]);
						    	}else{
						    		self.CollectMusicSheet.push(data.data.playlist[i]);
						    	}
						    }
					    }
				    	
				    })
				});
			}else{
				this.$router.push('/findMusic/recommend');
			}
		},
		methods: {
			hideMySongSheet() {
				this.MySongSheetIsShow = !this.MySongSheetIsShow;
			},
			hideCollectSongSheet() {
				this.collectSongSheetIsShow = !this.collectSongSheetIsShow;
			},
			selectSheet(id) {
				this.sheetId = id;
				this.sheetDetailShow = true;
			},
			closeSheetDetail(data){//歌单详情传来关闭详情页
				this.sheetDetailShow = data;
			}
		},
		computed: {
			mySongSheetDis() {
				return this.MySongSheetIsShow;
			},
			collectSongSheetDis() {
				return this.collectSongSheetIsShow;
			}
		}
	}
</script>

<style>
	.myMusic{
		padding-top: 50px;
	}
	.aboutMy {
		background: #F2F2F2;
	}
	
	.aboutItem {
		height: 60px;
		display: flex;
		text-align: left;
		line-height: 60px;
	}
	
	.aboutItem .leftIcon {
		flex: 0 0 60px;
	}
	
	.aboutItem .rightTitle {
		flex: 1;
		border-bottom: 1px solid #D9DDDC;
	}
	
	.aboutItem:last-child .rightTitle {
		border-bottom: none;
	}
	
	.aboutItem .rightTitle .tip {
		margin-left: 5px;
		font-size: 14px;
		color: #979B9A;
	}
	
	.mySongSheet .mySongSheetHead {
		height: 40px;
		background: #E7E9E8;
		display: flex;
	}
	
	.mySongSheet .leftIcon {
		flex: 0 0 40px;
	}
	
	.mySongSheet .SongSheetTitle {
		flex: 1;
		text-align: left;
		color: #606162;
		font-size: 14px;
		line-height: 40px;
	}
	
	.mySongSheet .setUp {
		flex: 0 0 40px;
	}
	
	.mySongSheet .mySongSheetList {
		background: #F2F2F2;
	}
	
	.mySongSheet .mySongSheetList .mySongSheetItem {
		height: 84px;
		display: flex;
	}
	
	.mySongSheet .mySongSheetList .mySongSheetItem .SongSheetAvatar {
		width: 78px;
		height: 78px;
		margin: 4px 5px;
		flex: 0 0 78px;
	}
	
	.rightContent {
		border-bottom: 1px solid #D9DDDC;
		flex: 1;
		display: flex;
	}
	
	.mySongSheet .mySongSheetList .mySongSheetItem .SongSheetInfo {
		flex: 1;
		overflow: hidden;
	}
	
	.mySongSheet .mySongSheetList .mySongSheetItem .SongSheetInfo span {
		display: block;
		text-align: left;
		margin: 20px 0 0 16px;
		overflow: hidden;
		height: 18px;
    	line-height: 18px;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 1;
    	/*white-space: nowrap;*/
	}
	
	.mySongSheet .mySongSheetList .mySongSheetItem .SongSheetInfo .SongSheetName {
		font-size: 16px;
	}
	
	.mySongSheet .mySongSheetList .mySongSheetItem .SongSheetInfo .SongSheetNum {
		font-size: 14px;
		margin: 14px 0 0 16px;
		color: #979B9A;
	}
	
	.mySongSheet .mySongSheetList .mySongSheetItem .isPlayIcon {
		flex: 0 0 40px;
	}
</style>