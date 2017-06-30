<template>
	<transition name="slide">
		<div class="sideContent" @click="cancelClick($event)">
			<div class="user">
				<div class="avatar"></div>
				<span class="username">H丶MF<em>lv.7</em></span>
				<div class="signQD" @click="login">签到</div>
			</div>
			<div class="slideContentFunction" ref="slideContentFunction">
				<ul class="slideContentFunctionItem">
					<li><span class="slideLeftIcon"></span>我的消息</li>
					<li><span class="slideLeftIcon"></span>会员中心</li>
					<li><span class="slideLeftIcon"></span>商城</li>
					<li><span class="slideLeftIcon"></span>在线听歌免流量</li>
				</ul>
				<ul class="slideContentFunctionItem">
					<li><span class="slideLeftIcon"></span>我的好友</li>
					<li><span class="slideLeftIcon"></span>附近的人</li>
				</ul>
				<ul class="slideContentFunctionItem">
					<li><span class="slideLeftIcon"></span>个性换肤</li>
					<li><span class="slideLeftIcon"></span>听歌识曲</li>
					<li><span class="slideLeftIcon"></span>定时停止音乐</li>
					<li><span class="slideLeftIcon"></span>音乐闹钟</li>
				</ul>
			</div>
			<div class="bottomSetUp">
				<span class="pattern">夜间模式</span>
				<span class="setUp">设置</span>
				<span class="Quit">退出</span>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		methods: {
			cancelClick(event) {
				event.stopPropagation();
			},
			login(){
				var storage = window.localStorage;
				var self = this;
				this.$http.get('http://localhost:3000/login/cellphone?phone=18814118009&password=19950706').then(function(data){
					self.$store.state.uid = data.data.profile.userId;
					storage.uid = data.data.profile.userId; 
					self.$store.state.userProfile = data.data.profile;
				})
			}
		},
		created() {
			let slideContentFunction = this.$refs.slideContentFunction;
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
		box-sizing: border-box;
		flex-direction: column;
		display: flex;
	}
	
	.user {
		flex: 0 0 200px;
		height: 200px;
		overflow: hidden;
		color: #fff;
		position: relative;
		background: url(../../assets/timg.jpg) no-repeat center;
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
		/*opacity: 0;*/
	}
	
	.bottomSetUp {
		position: absolute;
		bottom: 0;
		height: 42px;
		width: 100%;
		background: #fff;
		border-top: 1px solid #ccc;
		display: flex;
	}
	.bottomSetUp span{
		flex: 1;
		line-height: 42px;
	}
	
	.slideContentFunction {
		overflow-y: auto;
		flex: 1;
		padding-bottom: 42px;
	}
	
	.slideContentFunction .slideContentFunctionItem {
		background: #fff;
		margin: 0 0 8px 0;
		position: relative;
	}
	
	.slideContentFunction .slideContentFunctionItem:last-child {
		margin: 0;
	}
	
	.slideContentFunctionItem li {
		height: 56px;
		line-height: 56px;
		padding-left: 42px;
		text-align: left;
	}
	
	.slideContentFunctionItem .slideLeftIcon {
		position: absolute;
		width: 32px;
		height: 32px;
		display: block;
		top: 11px;
		left: 5px;
	}
</style>