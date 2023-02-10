<template>
	<view class="commodity-list">
	<Commodity :dataList='commodityList'></Commodity>
	</view>
</template>

<script>
	import Commodity from './Commodity.vue'
	export default {
		data(){
			return {
				commodityList:[
					{
						id:1,
						imgUrl:'../../static/img/commodity1.jpg',
						name:'新鲜进口泰国山竹，爆款打折价！活动时间有限，速来抢购吧！',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:2,
						imgUrl:'../../static/img/commodity2.jpg',
						name:'新鲜进口泰国山竹，爆款打折价！活动时间有限，速来抢购吧！',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:3,
						imgUrl:'../../static/img/commodity3.jpg',
						name:'新鲜进口泰国山竹，爆款打折价！活动时间有限，速来抢购吧！',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:4,
						imgUrl:'../../static/img/commodity4.jpg',
						name:'新鲜进口泰国山竹，爆款打折价！活动时间有限，速来抢购吧！',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					}
				]
			}
		},
		components:{
			Commodity
		}
	  }
</script>

<style>
</style>