/* 假数据服务 */
import Mock from 'mockjs'
//数据文档
import floor from './floor.json'
import recommends from './recommends.json'
import baseCategoryList from './offlineData/baseCategoryList.json'
import indexBannerList from './offlineData/indexBanner.json'

// 今日推荐假数据
Mock.mock('/mock/todayRecommend', {
  code: 200,
  data: recommends,
})
// floor数据
Mock.mock('/mock/floor', {
  code: 200,
  data: floor,
})
//首页三级分类离线数据
Mock.mock('/mock/product/getBaseCategoryList', baseCategoryList)

// 首页轮播图离线数据
Mock.mock('/mock/cms/banner', indexBannerList)
