var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api/index_list/data",function(req,res,next){
	res.send({
		"code":0,
		"data":{
			"topBar":[
				{id:1,name:'推荐'},
				{id:2,name:'生鲜优选'},
				{id:3,name:'新鲜肉类'},
				{id:4,name:'零食特卖'},
				{id:5,name:'上线新品'},
				{id:6,name:'临期特卖'},
				{id:7,name:'扶贫专区'}		
			],
			data:[
				{
					type:"swiperList",
					data:[
						{imgUrl:'../../static/img/swiper1.jpg'},
						{imgUrl:'../../static/img/swiper2.jpg'},
						{imgUrl:'../../static/img/swiper3.jpg'}
					]
					},
					{
					type:"recommendList",
					data:[
						{
							bigUrl:"../../static/img/Children.jpg",
							data:[
							 {imgUrl:'../../static/img/Children1.jpg'},
							 {imgUrl:'../../static/img/Children2.jpg'},
							 {imgUrl:'../../static/img/Children3.jpg'},
							]
						},
						{
							bigUrl:"../../static/img/Furnishing.jpg",
							data:[
							 {imgUrl:'../../static/img/Furnishing1.jpg'},
							 {imgUrl:'../../static/img/Furnishing2.jpg'},
							 {imgUrl:'../../static/img/Furnishing3.jpg'},
							]
						}
					],
				},
				{
					type:"commodityList",
					data:[
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
					
			]
		}
		
	})
});

router.get("/api/index_list/2/data/1",function(req, res, next){
	res.send({
		code:'0',
		data:[
			{
				type:'bannerList',
				imgUrl:'../../static/img/goods-banner.jpg'
			},
			{
				type:'iconsList',
				data:[
					{imgUrl:'../../static/img/icons1.png',name:'蔬菜'},
					{imgUrl:'../../static/img/icons2.png',name:'粮油'},
					{imgUrl:'../../static/img/icons3.png',name:'水果'},
					{imgUrl:'../../static/img/icons4.png',name:'肉类'},
					{imgUrl:'../../static/img/icons5.png',name:'酒类'},
					{imgUrl:'../../static/img/icons6.png',name:'冻品'},
					{imgUrl:'../../static/img/icons7.png',name:'零食'},
					{imgUrl:'../../static/img/icons8.png',name:'乳制品'},
				]
			},
			{
				type:'hotsList',
				data:[
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
			},
			{
				type:'shopList',
				data:[
					{
						bigUrl:"../../static/img/shop.jpg",
						data:[
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
								imgUrl:'../../static/img/shop3.jpg',
								name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
								nprice:'29',
								oprice:'39',
								discount:'8.5'
							},
							{
								id:6,
								imgUrl:'../../static/img/shop2.jpg',
								name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
								nprice:'29',
								oprice:'39',
								discount:'8.5'
							},
						]
						},
						{
							bigUrl:"../../static/img/shop.jpg",
							data:[
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
									imgUrl:'../../static/img/shop3.jpg',
									name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
									nprice:'29',
									oprice:'39',
									discount:'8.5'
								},
								{
									id:6,
									imgUrl:'../../static/img/shop2.jpg',
									name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
									nprice:'29',
									oprice:'39',
									discount:'8.5'
								},
							]
							}
				]
			},
			{
				type:"commodityList",
				data:[
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
		]
	})
})

router.get("/api/index_list/3/data/1",function(req, res, next){
	res.send({
		code:'0',
		data:[
			{
				type:'bannerList',
				imgUrl:'../../static/img/goods-banner.jpg'
			},
			{
				type:'iconsList',
				data:[
					{imgUrl:'../../static/img/icons1.png',name:'蔬菜'},
					{imgUrl:'../../static/img/icons2.png',name:'粮油'},
					{imgUrl:'../../static/img/icons3.png',name:'水果'},
					{imgUrl:'../../static/img/icons4.png',name:'肉类'},
					{imgUrl:'../../static/img/icons5.png',name:'酒类'},
					{imgUrl:'../../static/img/icons6.png',name:'冻品'},
					{imgUrl:'../../static/img/icons7.png',name:'零食'},
					{imgUrl:'../../static/img/icons8.png',name:'乳制品'},
				]
			},
			{
				type:'hotsList',
				data:[
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
			},
			{
				type:'shopList',
				data:[
					{
						bigUrl:"../../static/img/shop.jpg",
						data:[
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
								imgUrl:'../../static/img/shop3.jpg',
								name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
								nprice:'29',
								oprice:'39',
								discount:'8.5'
							},
							{
								id:6,
								imgUrl:'../../static/img/shop2.jpg',
								name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
								nprice:'29',
								oprice:'39',
								discount:'8.5'
							},
						]
						},
						{
							bigUrl:"../../static/img/shop.jpg",
							data:[
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
									imgUrl:'../../static/img/shop3.jpg',
									name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
									nprice:'29',
									oprice:'39',
									discount:'8.5'
								},
								{
									id:6,
									imgUrl:'../../static/img/shop2.jpg',
									name:'越南进口红心火龙果 3个装 大果 单果约450~500g 新鲜水果',
									nprice:'29',
									oprice:'39',
									discount:'8.5'
								},
							]
							}
				]
			},
			{
				type:"commodityList",
				data:[
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
		]
	})
})





router.get("/api/index_list/3/data/1",function(){
	res.send('index',{title:'Express'})
})
module.exports = router;
