<template>
	<div class="recommend">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item in banner" :key="item.id">
				<img :src="item.pic">
				<span class="type" :class="item.titleColor">{{item.typeTitle}}</span>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="nav">
			<div class="navItem">私人FM</div>
			<div class="navItem">每日歌曲推荐</div>
			<div class="navItem">云音乐热歌榜</div>
		</div>
		<theTitle :titleText="titleText[0]"></theTitle>
		<sheetList :sheetList="sheetList"></sheetList>
		<theTitle :titleText="titleText[1]"></theTitle>
		<eclusive :eclusiveList="eclusiveList"></eclusive>
		<theTitle :titleText="titleText[2]"></theTitle>
		<radioStation :djprogram="djprogram"></radioStation>
	</div>
</template>

<script>
import theTitle from './commom/theTitle.vue';
import radioStation from './commom/radioStation.vue';
import eclusive from './commom/eclusive.vue';
import sheetList from './commom/sheetList.vue';
	export default {
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
          			paginationClickable: true
				},
				titleText: ['推荐歌单','独家放送','主播电台'],
				banner: [],
				djprogram: {},
				sheetList: {},
				eclusiveList: {}
			}
		},
		components: {
			theTitle: theTitle,
			sheetList: sheetList,
			radioStation: radioStation,
			eclusive: eclusive
		},
		created(){
			var self = this;
			// banner图加载
			this.$http.get('http://localhost:3000/banner').then(function(data){
				for(var i = 0; i < data.data.banners.length; i++){
					self.banner.push(data.data.banners[i]);
				}
			});

			// 推荐歌单
			this.$http({
				method: 'get',
				url: 'http://localhost:3000/personalized',
			}).then(function(res){
				self.sheetList = res.data.result;
				for(let i = 0; i< self.sheetList.length; i++){
					if(parseInt(self.sheetList[i].playCount) > 9999){
						var playCount = parseInt(self.sheetList[i].playCount).toString();
						self.sheetList[i].playCount = playCount.substring(0,playCount.length - 4);
					}
					
				}
			})

			// 独家放送
			this.$http({
				url: 'http://localhost:3000/personalized/privatecontent',
				methods: 'get'
			}).then(function(res){
				self.eclusiveList = res.data.result;
			})

			// 主播电台
			this.$http({
				url: 'http://localhost:3000/personalized/djprogram',
				methods: 'get'
			}).then(function(res){
				self.djprogram = res.data.result;
			})

			this.$nextTick(function(){//banner图高度调整
				var width = document.body.clientWidth;
				var height = width * 420 / 1080;
				var swiperContainer = document.getElementsByClassName('swiper-container');
				swiperContainer[0].style.height = height + 'px';
			})
		}
	}
</script>

<style lang="less">
.swiper-container{
	height: 146px;
	.swiper-slide{
		position: relative;
		img{
			height: 100%;
		}
		.type{
			position: absolute;
			right: 0;
			bottom: 5px;
			width: 56px;
			height: 28px;
			line-height: 28px;
			border-radius: 15px 0 0 15px;
			background: #fff;
			font-size: 12px;
			color: #fff;
			text-align: center;
		}
		.red{
			background: red;
		}
		.blue{
			background: blue;
		}
	}
}
.nav{
	width: 100%;
	height: 60px;
	display: flex;
	.navItem{
		flex: 1;
		line-height: 60px;
		font-size: 12px;
	}
}
</style>