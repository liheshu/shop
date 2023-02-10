<template>
	<view class="banner">
		<image class="banner-img" :src="imgUrl" mode=""></image>
	</view>
</template>

<script>
	export default{
		props:{
			imgUrl:String
		}
	}
</script>

<style scoped>
.banner{
	width: 100%;
	height: 300rpx;
}
.banner-img{
	width: 100%;
	height: 300rpx;
}
</style>