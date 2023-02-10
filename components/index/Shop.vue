<template>
	<view class="shop">
		<view class="shop-item">
			<view class="shop-big">
			<image class="shop-big" src="../../static/img/shop.jpg" mode=""></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
				<Commodity :dataList="shopList" wrap='no-wrap' itemsW="200rpx" bigH="200rpx" nameSize="20rpx"></Commodity>
				</view>	
			</scroll-view>
		</view>
	</view>
</template>

<script>	
import Commodity from "../common/Commodity.vue"
export default{
		data(){
			return{
				shopList:[
					{
						id:1,
						imgUrl:'../../static/img/shop1.jpg',
						name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:2,
						imgUrl:'../../static/img/shop2.jpg',
						name:'禧美(Seamix) 原装进口冷冻厄瓜多尔白虾 1.8kg 90-108只 盒装 火锅食材 海鲜水产',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:3,
						imgUrl:'../../static/img/shop3.jpg',
						name:'美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:4,
						imgUrl:'../../static/img/shop4.jpg',
						name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:5,
						imgUrl:'../../static/img/shop4.jpg',
						name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:6,
						imgUrl:'../../static/img/shop4.jpg',
						name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:7,
						imgUrl:'../../static/img/shop4.jpg',
						name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
				]
			}
		},
		components:{
			Commodity
		}
	}
</script>

<style scoped>
	.shop-big{
		width: 100%;
		height:350rpx;
	}
	.scroll-content{
		width: 100%;
		
	}
	.scroll-item{
		display: inline-block;
	}
</style>