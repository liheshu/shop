<template>
	<view class="recommend bg-color">
		<view class="recommend-item" v-for="(item,index) in dataList" :key=index>
			<image class="item-big" :src="item.bigUrl" mode=""></image>
			<view class="item-center">
				<view><i class="iconfont icon-daifahuo"></i>多库发货</view>
				<view><i class="iconfont icon-kefuyouxian"></i>破损包赔</view>
				<view><i class="iconfont icon-tianmaoshunfengbaoyou"></i>顺丰冷链</view>
			</view>
			<view class="item-small">
				<block v-for="(k,i) in item.data" :key="i">
					<image class="item-img" :src="k.imgUrl" mode=""></image>
				</block>
			</view>
		</view>
		</view>
</template>

<script>
	export default{
		props:{
			dataList:Array
		}
	}
</script>

<style>
	.recommend{
		padding: 20rpx;
		/* background-color: #42b7fb; */
	}
	.recommend-item{
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 2px solid #ccc;
		overflow: hidden;
		margin: 20rpx 0;
	}
	.item-big{
		width: 100%;
		height: 300rpx;
	}
	.item-small{
		width: 100%;
		height: 240rpx;
		display: flex;
		background-color: #ffffff;
	}
	.item-img{
		flex: 1;
		height: 240rpx;
	}
	.item-center{
		width: 100%;
		height: 70rpx;
		background-color: #ffffff;
		display: flex;
	}
	.item-center view{
		font-size: 32rpx;
		flex: 1;
		text-align: center;
		line-height: 70rpx;
		font-weight: 700;
		border-right: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		vertical-align: top/middle/bottom;
	}
	.item-center view:nth-child(3){
		border-right: none;
	}
	.item-center view i{
		border: none;
		display: inline-block;
		vertical-align: top;
		font-size: 44rpx; 
		line-height: 70rpx;
		
	}
</style>