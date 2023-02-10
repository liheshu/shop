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
		:style="'height:'+clentHeight+'px;'">
			<swiper-item v-for="(item,index) in newTopBar" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+clentHeight+'px;'" >
					<block v-if="item.data.length>0">
					<block v-for="(k,i) in item.data" :key="i">
						<!-- 推荐 -->
							<indexSwiper v-if='k.type==="swiperList"':dataList='k.data'></indexSwiper>
							<template v-if='k.type==="recommendList"'>
								<Recommend :dataList='k.data'></Recommend>
								<Card cardTitle='猜你喜欢'></Card>
							</template>
							<!-- 其他 -->
							<Banner v-if="k.type==='bannerList'" :dataList="k.imgUrl"></Banner>
							<template v-if="k.type==='iconsList'">
							<Card cardTitle='热销单品'></Card>
							<Icons :dataList='k.data'></Icons>
							</template>
							<template  v-if="k.type==='hotsList'">
								<Hots :dataList='k.data'></Hots>
								<Card cardTitle='推荐品牌'></Card>
							</template>
							
							<template  v-if="k.type==='shopList'">
							<Shop :dataList='k.data'></Shop>
							<Card cardTitle='为您推荐'></Card>
							</template>
							
							<CommodityList v-if='k.type==="commodityList"':dataList='k.data'></CommodityList>		
					</block>		
					</block>
					<view v-else>暂无数据......</view>
				</scroll-view>
					
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
		
		
		<!-- <Banner></Banner>
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
			topBar:[],
			// 承载数组
			newTopBar:[]
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
			// uni.request({
			// 	url:'http://192.168.137.1:3000/api/index_list/data',
			// 	success:(res)=>{
			// 		console.log(res.data.data);
			// 	}
			// })
			// 封装
			this.__init();
		},
		onReady(){
		// let view=uni.createSelectorQuery().select('.home-data');
		// view.boundingClientRect(data=>{
		// 	// this.clentHeight=data.height;
		// 	this.clentHeight=1800;
		// }).exec()
		this.getClientHeight(),
		// 获取可视区域高度
		uni.getSystemInfo({
			success:(res)=>{
				this.clentHeight=res.windowHeight-uni.upx2px(80)-this.getClientHeight();
			}
		})
		},
		methods: {
			// 请求首页数据
			__init(){
				uni.request({
				 	url:'http://192.168.0.106:3000/api/index_list/data',
				 	success:(res)=>{
				 		// console.log(res.data.data);
						let data=res.data.data;
						this.topBar=data.topBar
						this.newTopBar=this.initData(data)
						// console.log(this.initData(data));
				 	}
				 })
			},
			
			
			
			
			// 添加数据
			initData(res){
				let arr=[];
				// console.log(this.topBar.length);
				for(let i=0;i<this.topBar.length;i++){
					let obj={
						data:[],
						load:"first"
					}
					// 首次获取数据
					if(i==0){
						obj.data=res.data
					}
					arr.push(obj)
				}
				return arr
			},
			// 点击顶栏
			changeTop(index){
				if(this.topBarIndex==index){
					return;
				}
				  this.topBarIndex=index
				  this.scrollIntoIndex='top'+index;
				  if(this.newTopBar[this.topBarIndex].load==='first'){
					   this.addData();
				  }	 
			},
			// 滑动
			onChangeTab(e){
				this.changeTop((e.detail.current));
			},
			// 兼容可视区域高度【兼容】
			getClientHeight(){
				const res=uni.getSystemInfoSync();
				console.log(res.platform,res.statusBarHeight);
				const system =res.platform;
				if(system==='ios'){
					return 0+res.statusBarHeight;
				}else if(system==='android'){
					return -40+res.statusBarHeight;
				}else{
					return 0;
				}
			},
			// 对应显示不同数据
			addData(){
				// 拿到索引
				let index=this.topBarIndex;
				// 拿到id
				let id=this.topBar[index].id;
				// 请求数据
				uni.request({
					url:`http://192.168.0.106:3000/api/index_list/${id}/data/1`,
					success:(res)=>{
						let data=res.data.data; 
						this.newTopBar[index].data=[...this.newTopBar[index].data,...data]
					}
				})
				// 请求结束后重新赋值
				this.newTopBar[this.topBarIndex].load='last';
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
