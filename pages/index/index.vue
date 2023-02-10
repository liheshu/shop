<template>
	<view class="index">
		<!-- #ifdef MP-WEIXIN -->
		<!-- <view class="wx-nav">
		<view class="iconfont icon-search"></view>
		<text>提篮</text>
		<view class="iconfont icon-31xiaoxi"></view>
		</view> -->
		<!-- #endif -->
		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollIntoIndex">
			<view 
			:id="'top'+index"
			class="scroll-item" v-for="(item,index) in topBar" :key="index">
				<text @click="changeTop(index)" :class="topBarIndex===index?'f-active-color':'f-color'">{{item.name}}</text>
			</view>
		</scroll-view>
		<!-- :style="height: 3000rpx;" -->
		<swiper @change='onChangeTab' :current="topBarIndex"
		:style="'height:'+clentHeight+'px;'"
		>
			<swiper-item v-for="(item,index) in topBar" :key="index">
				<view class="home-data">
					<indexSwiper></indexSwiper>
						<Recommend></Recommend>
						<Card cardTitle='猜你喜欢'></Card>
						<CommodityList></CommodityList>
				</view>
			</swiper-item>
		</swiper>
		<!-- /api/index_list/1/data1/ -->
		<!-- 推荐模版 -->
	<!-- 	<indexSwiper></indexSwiper>
		<Recommend></Recommend>
		<Card cardTitle='猜你喜欢'></Card>
		<CommodityList></CommodityList> -->
		<!-- 其他模版 -->
		<!-- /api/index_list/2/data/1  生鲜优选-->
		<!-- /api/index_list/3/data/1  新鲜肉类-->
		<!-- 模版不变数据变 -->
		<!-- <Banner imgUrl="../../static/img/goods-banner.jpg"></Banner>
		<Icons></Icons>
		<Card cardTitle='上新活动'></Card>
		<Banner imgUrl="../../static/img/banner1.jpg"></Banner>
		<Card cardTitle='热销单品'></Card>
		<Hots></Hots>
		<Card cardTitle='推荐品牌'></Card>
		<Shop></Shop>
		<Card cardTitle='为您推荐'></Card>
		<CommodityList></CommodityList> -->
	</view>
</template>

<script>
	import indexSwiper from '@/components/index/IndexSwiper.vue'
	import Recommend from '@/components/index/Recommend.vue'
	import Card from '@/components/common/Cart.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	import Banner from '@/components/index/Banner.vue'
	import Icons from '@/components/index/Icons.vue'
	import Hots from '@/components/index/Hots.vue'
	import Shop from '@/components/index/Shop.vue'
	export default {
		data() {
			return {
			// 选中下标
			topBarIndex:0,
			// 跟随顶栏滑动
			scrollIntoIndex:'top0',
			// 内容块高度值
			clentHeight:0,
			// 顶栏数据
				topBar:[
					{name:'推荐'},
					{name:'生鲜优选'},
					{name:'新鲜肉类'},
					{name:'零食特卖'},
					{name:'上线新品'},
					{name:'临期特卖'},
					{name:'扶贫专区'},
					]
			}
		},
		components:{
			indexSwiper,
			Recommend,
			Card,
			CommodityList,
			Banner,
			Icons,
			Hots,
			Shop
		},
		onLoad() {
			
		},
		onReady(){
		let view=uni.createSelectorQuery().select('.home-data');
		view.boundingClientRect(data=>{
			this.clentHeight=data.height;
		}).exec()
		},
		methods: {
			changeTop(index){
				if(this.topBarIndex==index){
					return;
				}
				  this.topBarIndex=index
				  this.scrollIntoIndex='top'+index
			},
			onChangeTab(e){
				this.changeTop((e.detail.current));
			}
		}
	}
</script>

<style scoped>
/* .wx-nav{
	height: 200rpx;
	width: 100%;
	line-height: 200rpx;
	text-align: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
} */
.scroll-content{
	width: 100%;
	height:80rpx;
	white-space: nowrap;
}
.scroll-item{
	display: inline-block;
	padding: 10rpx 30rpx;
	font-size: 32rpx;
}
.f-active-color{
	padding: 10rpx 0;
	border-bottom: 6rpx solid #49BDFB;
}
</style>
