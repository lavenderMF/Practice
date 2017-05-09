<template>
	<transition name="slide">
		<div class="sideContent" @click="cancelClick($event)">
			<div class="user">
				<div class="avatar"></div>
				<span class="username">H丶MF<em>lv.7</em></span>
				<div class="signQD">签到</div>
			</div>
			<div class="bottomSetUp"></div>
		</div>
	</transition>
</template>

<script>
	export default {
		methods: {
			cancelClick(event){
				if(!event._constructed) {
					return;
				}
			}
		}
	}
</script>

<style>
	.sideContent {
		z-index: 101;
		width: 80%;
		height: 100%;
		position: relative;
		background: #F2F2F2;
	}
	
	.user {
		height: 200px;
		overflow: hidden;
		color: #fff;
		position: relative;
		background: url(../assets/timg.jpg) no-repeat center;
		background-size: 100% 100%;
	}
	
	.user .avatar {
		width: 76px;
		height: 76px;
		border-radius: 50%;
		margin: 60px 0 0 20px;
		background: #fff;
	}
	
	.user .username {
		display: block;
		position: absolute;
		left: 32px;
		bottom: 28px;
		text-align: left;
	}
	
	.user .username em {
		display: inline-block;
		width: 40px;
		height: 14px;
		line-height: 14px;
		text-align: center;
		margin-left: 5px;
		font-size: 12px;
		border: 1px solid #fff;
		border-radius: 9px;
	}
	
	.user .signQD {
		right: 15px;
		bottom: 20px;
		width: 80px;
		height: 28px;
		font-size: 14px;
		line-height: 28px;
		border: 1px solid #fff;
		border-radius: 16px;
		position: absolute;
	}
	
	.slide-enter-active {
		transition: all .3s ease;
	}
	
	.slide-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-enter,
	.slide-leave-active {
		transform: translateX(-100px);
		opacity: 0;
	}
	
	.bottomSetUp {
		position: absolute;
		bottom: 0;
		height: 42px;
		width: 100%;
		background: #298FF8;
	}
</style>