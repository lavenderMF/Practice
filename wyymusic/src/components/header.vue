<template>
	<div class="header">
		<div class="get-user" @click="showSlide"></div>
		<div class="menu-tab">
			<div class="tab border-1px">
				<div class="tab-item">
					<router-link to="/myMusic">我的</router-link>
				</div>
				<div class="tab-item">
					<router-link to="/findMusic">发现</router-link>
				</div>
				<div class="tab-item">
					<router-link to="/dynamic">动态</router-link>
				</div>
			</div>
		</div>
		<div class="search-btn"></div>
		<transition name="fade">
			<div class="sideMore" @click="hideTheSlide" v-show="theSlideIsShow">
				<sideMore v-show="theSlideIsShow"></sideMore>
			</div>
		</transition>
	</div>
</template>

<script>
	import sideMore from './sideMore';
	export default {
		data() {
			return {
				slideIsShow: false
			}
		},
		methods: {
			showSlide() {
				this.slideIsShow = !this.slideIsShow;
			},
			hideTheSlide() {
				this.slideIsShow = !this.slideIsShow;
			}
		},
		computed: {
			theSlideIsShow() {
				return this.slideIsShow;
			}
		},
		components: {
			sideMore
		}
	};
</script>

<style>
	.sideMore {
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
	}
	
	.header {
		height: 50px;
		background: #D33B30;
		display: flex;
	}
	
	.get-user {
		flex: 0 0 50px;
		background: #7E8C8D;
	}
	
	.menu-tab {
		flex: 1;
	}
	
	.tab {
		width: 60%;
		margin: 0 auto;
		display: flex;
	}
	
	.tab-item {
		flex: 1;
		line-height: 50px;
	}
	
	.tab-item a {
		color: #fff;
	}
	
	.search-btn {
		flex: 0 0 50px;
		background: #42B983;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
</style>