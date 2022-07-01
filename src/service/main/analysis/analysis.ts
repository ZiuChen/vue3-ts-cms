import ZURequest from '@/service'

enum AnalysisAPI {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  goodsSaleTop10 = '/goods/sale/top10',
  goodsAddressSale = '/goods/address/sale'
}

export function getAmountList() {
  return ZURequest.get<any>({
    url: AnalysisAPI.amountList
  })
}

export function getCategoryGoodsCount() {
  return ZURequest.get<any>({
    url: AnalysisAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return ZURequest.get<any>({
    url: AnalysisAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return ZURequest.get<any>({
    url: AnalysisAPI.categoryGoodsFavor
  })
}

export function getGoodsSaleTop10() {
  return ZURequest.get<any>({
    url: AnalysisAPI.goodsSaleTop10
  })
}

export function getGoodsAddressSale() {
  return ZURequest.get<any>({
    url: AnalysisAPI.goodsAddressSale
  })
}
