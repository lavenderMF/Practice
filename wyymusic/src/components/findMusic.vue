<template>
	<div class="findMusic">
		<div class="findMusicBar">
			<div class="findMusicBarTab">
				<router-link to="/findMusic/recommend">个性推荐</router-link>
			</div>
			<div class="findMusicBarTab">
				<router-link to="/findMusic/songSheet">歌单</router-link>
			</div>
			<div class="findMusicBarTab">
				<router-link to="/findMusic/radioStation">主播电台</router-link>
			</div>
			<div class="findMusicBarTab">
				<router-link to="/findMusic/musicRanking">排行榜</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style>
	.findMusic {
		padding-top: 50px;
	}
	
	.findMusicBar {
		height: 50px;
		display: flex;
	}
	
	.findMusicBarTab {
		line-height: 50px;
		flex: 1;
	}
	
	.findMusicBarTab a {
		text-decoration: none;
		display: block;
		position: relative;
	}
	
	.findMusicBarTab .router-link-active:after {
		content: "";
		width: 100%;
		height: 2px;
		bottom: 0;
		display: block;
		position: absolute;
		background: #D33B30;
	}
</style>