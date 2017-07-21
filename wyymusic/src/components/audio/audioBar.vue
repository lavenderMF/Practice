<template>
	<div class="audioBar">
		<audio id="music" :src="songUrl" controls></audio>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default{
	data(){
		return {
			songUrl: ''
		}
	},
	computed:{
        ...mapGetters(['songId']),
    },
    watch:{
    	songId(){
    		console.log(this.songId);
    		var self = this;
    		this.$http({
				methods: 'get',
				url: 'http://localhost:3000/music/url?id=' + this.songId
			}).then(function(res){
				self.songUrl = res.data.data[0].url;
			})
    	}
    }
}
</script>

<style lang="less">
.audioBar{
	width: 100%;
	height: 66px;
	position: fixed;
	background: #fff;
	left: 0;
	bottom: 0;
}
</style>