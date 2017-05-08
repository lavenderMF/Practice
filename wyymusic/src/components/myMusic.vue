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
			<div class="mySongSheetHead">				
				<div class="leftIcon"></div>
				<div class="SongSheetTitle">创建的歌单<span class="tip">(0)</span></div>
				<div class="setUp"></div>
			</div>
			<ul class="mySongSheetList">
				<li class="mySongSheetItem">
					<img class="SongSheetAvatar"></img>
					<div class="rightContent">						
						<div class="SongSheetInfo">
							<span class="SongSheetName">我的歌单</span>
							<span class="SongSheetNum">176首</span>
						</div>
						<span class="isPlayIcon"></span>
					</div>
				</li>
				<li class="mySongSheetItem">
					<img class="SongSheetAvatar"></img>
					<div class="SongSheetInfo">
						<span class="SongSheetName">我的歌单</span>
						<span class="SongSheetNum">176首</span>
					</div>
					<span class="isPlayIcon"></span>
				</li>
			</ul>
			<div class="mySongSheetHead">				
				<div class="leftIcon"></div>
				<div class="SongSheetTitle">收藏的歌单<span class="tip">(0)</span></div>
				<div class="setUp"></div>
			</div>
			<ul class="mySongSheetList">
				<li class="mySongSheetItem">
					<img class="SongSheetAvatar"></img>
					<div class="rightContent">						
						<div class="SongSheetInfo">
							<span class="SongSheetName">我的歌单</span>
							<span class="SongSheetNum">176首</span>
						</div>
						<span class="isPlayIcon"></span>
					</div>
				</li>
				<li class="mySongSheetItem">
					<img class="SongSheetAvatar"></img>
					<div class="SongSheetInfo">
						<span class="SongSheetName">我的歌单</span>
						<span class="SongSheetNum">176首</span>
					</div>
					<span class="isPlayIcon"></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.aboutMy{
		background: #F2F2F2;
	}
	.aboutItem{
		height: 60px;
		display: flex;
		text-align: left;
		line-height: 60px;
	}
	.aboutItem .leftIcon{
		flex: 0 0 60px;
	}
	.aboutItem .rightTitle{
		flex: 1;
		border-bottom: 1px solid #D9DDDC;
	}
	.aboutItem:last-child .rightTitle{
		border-bottom: none;
	}
	.aboutItem .rightTitle .tip{
		margin-left: 5px;
		font-size: 14px;
		color: #979B9A;
	}
	.mySongSheet .mySongSheetHead{
		height: 40px;
		background: #E7E9E8;
		display: flex;
	}
	.mySongSheet .leftIcon{
		flex: 0 0 40px;
	}
	.mySongSheet .SongSheetTitle{
		flex: 1;
		text-align: left;
		color: #606162;
		font-size: 14px;
		line-height: 40px;
	}
	.mySongSheet .setUp{
		flex: 0 0 40px;
	}
	.mySongSheet .mySongSheetList{
		background: #F2F2F2;
	}
	.mySongSheet .mySongSheetList .mySongSheetItem{
		height: 84px;
		display: flex;
	}
	.mySongSheet .mySongSheetList .mySongSheetItem .SongSheetAvatar{
		width: 78px;
		height: 78px;
		margin: 4px 5px;
		flex: 0 0 78px;
	}
	.rightContent{
		border-bottom: 1px solid #D9DDDC;
		flex: 1;
		display: flex;
	}
	.mySongSheet .mySongSheetList .mySongSheetItem .SongSheetInfo{
		flex: 1;
	}
	.mySongSheet .mySongSheetList .mySongSheetItem .SongSheetInfo span{
		display: block;
		text-align: left;
		margin: 20px 0 0 16px;
	}
	.mySongSheet .mySongSheetList .mySongSheetItem .SongSheetInfo .SongSheetName{
		font-size: 16px;
	}
	.mySongSheet .mySongSheetList .mySongSheetItem .SongSheetInfo .SongSheetNum{
		font-size: 14px;
		margin: 14px 0 0 16px;
		color: #979B9A;
	}
	.mySongSheet .mySongSheetList .mySongSheetItem .isPlayIcon{
		flex: 0 0 40px;
		margin-right: 10px;
	}
</style>