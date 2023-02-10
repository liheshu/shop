<template>
	<view class="icons">
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons1.png" mode=""></image>
			<text class="f-color">蔬菜</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons2.png" mode=""></image>
			<text class="f-color">粮油</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons3.png" mode=""></image>
			<text class="f-color">水果</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons4.png" mode=""></image>
			<text class="f-color">肉类</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons5.png" mode=""></image>
			<text class="f-color">酒类</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons6.png" mode=""></image>
			<text class="f-color">冻品</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons7.png" mode=""></image>
			<text class="f-color">零食</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/icons8.png" mode=""></image>
			<text class="f-color">乳制品</text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.icons{
		display: flex;
		flex-wrap: wrap;
	}
	.icons-item{
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20rpx 0;
	}
	.icons-img{
		width: 100rpx;
		height: 100rpx;
	}
</style>