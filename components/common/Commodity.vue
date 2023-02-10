<template>
	<view class="commodity" :style="'flex-wrap:'+wrap+';'">
		<!-- 单个商品列表 -->
		<view class="commodity-item" v-for="(item,index) in dataList" :key="index" :style="'width:'+itemsW+';'">
			<image class="commodity-img" :style="'height:'+bigH+';'" :src="item.imgUrl" mode=""></image>
			<view class="commodity-content">
			<text class="commodity-name" :style="'font-size:'+ nameSize+';'">{{item.name}}</text>
			<view>
				<text class="nprice">￥{{item.nprice}}</text>
				<text class="oprice">￥{{item.oprice}}</text>
			</view>
			<text class="discount">{{item.discount}}折</text>
		</view>
		</view>
		<!-- 第二个数据 -->
		
	</view>
</template>

<script>
	export default {
		props:{
			dataList:Array,
			itemsW:{
				type:String,
				default:'375rpx'
			},
			bigH:{
				type:String,
				default:'375rpx'
			},
			wrap:{
				type:String,
				default:'wrap'
			},
			nameSize:{
				type:String,
				default:'26rpx'
			}
		}
	}
</script>

<style scoped>
	.commodity{
		display: flex;
	}
	.commodity-item{
		padding-bottom: 20rpx;
	}
	.commodity-img{
		width: 100%;
	}
	.commodity-content{
		text-align: center;
	}
	.commodity-name{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
		color:#333333;
		word-break: break-all;
		padding:6rpx 20rpx;
	}
	.oprice{
		font-size: 24rpx;
		color: #999;
		text-decoration: line-through;
	}
	.discount{
		border-radius: 4rpx;
		border: 1px solid #ff3333;
		padding: 2rpx 10rpx;
		font-size: 20rpx;
		color: #ff3333;
	}
</style>