<template>
	<view class="hot">
		<Commodity :dataList='hotList' itemsW="250rpx" bigH="220rpx"></Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default{
		data(){	
			return{
				hotList:[
					{
						id:1,
						imgUrl:'../../static/img/hots1.webp',
						name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:2,
						imgUrl:'../../static/img/hots2.webp',
						name:'禧美(Seamix) 原装进口冷冻厄瓜多尔白虾 1.8kg 90-108只 盒装 火锅食材 海鲜水产',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:3,
						imgUrl:'../../static/img/hots3.webp',
						name:'美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:4,
						imgUrl:'../../static/img/hots1.webp',
						name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:5,
						imgUrl:'../../static/img/hots2.webp',
						name:'禧美(Seamix) 原装进口冷冻厄瓜多尔白虾 1.8kg 90-108只 盒装 火锅食材 海鲜水产',
						nprice:'29',
						oprice:'39',
						discount:'8.5'
					},
					{
						id:6,
						imgUrl:'../../static/img/hots3.webp',
						name:'美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货',
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