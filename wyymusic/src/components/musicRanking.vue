<template>
	<div class="musicRanking">
		<theTitle :titleText="titleText[0]"></theTitle>
		<rankingItem :rankingItem="rankingItem3"></rankingItem>
		<rankingItem :rankingItem="rankingItem0"></rankingItem>
		<rankingItem :rankingItem="rankingItem2"></rankingItem>
		<rankingItem :rankingItem="rankingItem1"></rankingItem>
		<rankingItem :rankingItem="rankingItem4"></rankingItem>
		<theTitle :titleText="titleText[1]"></theTitle>
		<rankingItem :rankingItem="rankingItem5"></rankingItem>
		<rankingItem :rankingItem="rankingItem6"></rankingItem>
		<rankingItem :rankingItem="rankingItem7"></rankingItem>
		<rankingItem :rankingItem="rankingItem8"></rankingItem>
		<rankingItem :rankingItem="rankingItem9"></rankingItem>
		<rankingItem :rankingItem="rankingItem10"></rankingItem>
		<rankingItem :rankingItem="rankingItem11"></rankingItem>
		<rankingItem :rankingItem="rankingItem12"></rankingItem>
		<rankingItem :rankingItem="rankingItem13"></rankingItem>
		<rankingItem :rankingItem="rankingItem14"></rankingItem>
		<rankingItem :rankingItem="rankingItem15"></rankingItem>
		<rankingItem :rankingItem="rankingItem16"></rankingItem>
		<rankingItem :rankingItem="rankingItem17"></rankingItem>
		<rankingItem :rankingItem="rankingItem18"></rankingItem>
		<rankingItem :rankingItem="rankingItem19"></rankingItem>
		<rankingItem :rankingItem="rankingItem20"></rankingItem>
		<rankingItem :rankingItem="rankingItem21"></rankingItem>
		<div v-for="item in rankingitem">
			{{item.name}}
		</div>
	</div>
</template>

<script>
import theTitle from './commom/theTitle.vue';
import rankingItem from './commom/rankingItem.vue';
export default{
	data(){
		return {
			titleText: ['官方榜','全球榜'],
			rankingItem3: {},
			rankingItem0: {},
			rankingItem2: {},
			rankingItem1: {},
			rankingItem4: {},
			rankingItem5: {},
			rankingItem6: {},
			rankingItem7: {},
			rankingItem8: {},
			rankingItem9: {},
			rankingItem10: {},
			rankingItem11: {},
			rankingItem12: {},
			rankingItem13: {},
			rankingItem14: {},
			rankingItem15: {},
			rankingItem16: {},
			rankingItem17: {},
			rankingItem18: {},
			rankingItem19: {},
			rankingItem20: {},
			rankingItem21: {},
			rankingitem: []
		}
	},
	components: {
		theTitle: theTitle,
		rankingItem: rankingItem
	},
	created(){
		var self = this;
		
		self.$http({
			url: 'http://localhost:3000/top/list?idx=3',
			method: 'get'
		}).then(function(res){
			self.rankingitem[0] = res.data.result;
			self.rankingitem[0].tracks.length = 3;
		})

		self.$http({
			url: 'http://localhost:3000/top/list?idx=2',
			method: 'get'
		}).then(function(res){
			self.rankingitem[1] = res.data.result;
			self.rankingitem[1].tracks.length = 3;
		})

		// 云音乐飙升榜
		self.$http({
			url: 'http://localhost:3000/top/list?idx=3',
			method: 'get'
		}).then(function(res){
			self.rankingItem3 = res.data.result;
			self.rankingItem3.tracks.length = 3;
		})

		// 云音乐新歌榜
		self.$http({
			url: 'http://localhost:3000/top/list?idx=0',
			method: 'get'
		}).then(function(res){
			self.rankingItem0 = res.data.result;
			self.rankingItem0.tracks.length = 3;
		})

		// 网易原创歌曲榜
		self.$http({
			url: 'http://localhost:3000/top/list?idx=2',
			method: 'get'
		}).then(function(res){
			self.rankingItem2 = res.data.result;
			self.rankingItem2.tracks.length = 3;
		})

		// 云音乐热歌榜
		self.$http({
			url: 'http://localhost:3000/top/list?idx=1',
			method: 'get'
		}).then(function(res){
			self.rankingItem1 = res.data.result;
			self.rankingItem1.tracks.length = 3;
		})

		// 云音乐热歌榜
		self.$http({
			url: 'http://localhost:3000/top/list?idx=4',
			method: 'get'
		}).then(function(res){
			self.rankingItem4 = res.data.result;
			self.rankingItem4.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=5',
			method: 'get'
		}).then(function(res){
			self.rankingItem5 = res.data.result;
			self.rankingItem5.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=6',
			method: 'get'
		}).then(function(res){
			self.rankingItem6 = res.data.result;
			self.rankingItem6.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=7',
			method: 'get'
		}).then(function(res){
			self.rankingItem7 = res.data.result;
			self.rankingItem7.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=8',
			method: 'get'
		}).then(function(res){
			self.rankingItem8 = res.data.result;
			self.rankingItem8.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=9',
			method: 'get'
		}).then(function(res){
			self.rankingItem9 = res.data.result;
			self.rankingItem9.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=10',
			method: 'get'
		}).then(function(res){
			self.rankingItem10 = res.data.result;
			self.rankingItem10.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=11',
			method: 'get'
		}).then(function(res){
			self.rankingItem11 = res.data.result;
			self.rankingItem11.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=12',
			method: 'get'
		}).then(function(res){
			self.rankingItem12 = res.data.result;
			self.rankingItem12.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=13',
			method: 'get'
		}).then(function(res){
			self.rankingItem13 = res.data.result;
			self.rankingItem13.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=13',
			method: 'get'
		}).then(function(res){
			self.rankingItem13 = res.data.result;
			self.rankingItem13.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=14',
			method: 'get'
		}).then(function(res){
			self.rankingItem14 = res.data.result;
			self.rankingItem14.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=15',
			method: 'get'
		}).then(function(res){
			self.rankingItem15 = res.data.result;
			self.rankingItem15.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=16',
			method: 'get'
		}).then(function(res){
			self.rankingItem16 = res.data.result;
			self.rankingItem16.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=17',
			method: 'get'
		}).then(function(res){
			self.rankingItem17 = res.data.result;
			self.rankingItem17.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=18',
			method: 'get'
		}).then(function(res){
			self.rankingItem18 = res.data.result;
			self.rankingItem18.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=19',
			method: 'get'
		}).then(function(res){
			self.rankingItem19 = res.data.result;
			self.rankingItem19.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=20',
			method: 'get'
		}).then(function(res){
			self.rankingItem20 = res.data.result;
			self.rankingItem20.tracks.length = 3;
		})

		// 
		self.$http({
			url: 'http://localhost:3000/top/list?idx=21',
			method: 'get'
		}).then(function(res){
			self.rankingItem21 = res.data.result;
			self.rankingItem21.tracks.length = 3;
		})
	}
}
</script>

<style lang="less">
.musicRanking{
	background: #F0F4F3;
	#theTitle{
		float: left;
		margin: 10px 0;
	}
}

</style>