<template>
	<div class="musicRanking">
		<theTitle :titleText="titleText[0]"></theTitle>
		<ul>
			<li v-for="item in rangkingAll">
				{{item.name}}
				<div>
					<img :src="item.coverImgUrl">
				</div>
				<!-- <span v-for="rank in item.tracks">{{rank}}</span> -->
			</li>
		</ul>
	</div>
</template>

<script>
import theTitle from './commom/theTitle.vue';
export default{
	data(){
		return {
			titleText: ['官方榜'],
			rangkingAll: [{
				ToplistType: '',
				adType: '',
				anonimous: '',
				artists: '',
				cloudTrackCount: '',
				commentCount: '',
				commentThreadId: '',
				coverImgId: '',
				coverImgId_str: '',
				coverImgUrl: '',
				createTime: '',
				creator: '',
				description: '',
				highQuality: '',
				id: '',
				name: '',
				newImported: '',
				ordered: '',
				playCount: '',
				privacy: '',
				shareCount: '',
				specialType: '',
				status: '',
				subscribed: '',
				subscribedCount: '',
				subscribers: '',
				tags: '',
				totalDuration: '',
				trackCount: '',
				trackNumberUpdateTime: '',
				trackUpdateTime: '',
				tracks: '',
				updateTime: '',
				userId: ''
			}]
		}
	},
	components: {
		theTitle: theTitle
	},
	created(){
		var self = this;
		
		// 云音乐飙升榜
		self.$http({
			url: 'http://localhost:3000/top/list?idx=3',
			method: 'get'
		}).then(function(res){
			self.$nextTick(() => {
				self.rangkingAll[0] = res.data.result;
				console.log(self.rangkingAll);
			})
		})

		// 云音乐新歌榜
		self.$http({
			url: 'http://localhost:3000/top/list?idx=0',
			method: 'get'
		}).then(function(res){
			self.rangkingAll[1] = res.data.result;
		})
	}
}
</script>

<style>
</style>