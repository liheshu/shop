<template>
	<view class="hot">
		<Commodity :dataList='hotList' itemsW="250rpx" bigH="220rpx"></Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default{
		props:{
			dataList:Array
		},
		components:{
			Commodity
		}
	}
</script>

<style>
</style>