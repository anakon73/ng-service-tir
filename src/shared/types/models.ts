export type IRating = {
  rate: number
  quantity: number
}

export type IProduct = {
  name: string
  description: string
  discount: boolean
  rate: IRating
  image: string
  price: number
  priceWithDiscount?: number
}

export type IService = {
  name: string
  description: string
  image: string
}

export type IAdvantage = {
  name: string
  description: string
  image: string
}

export type IArticle = {
  date: string
  name: string
  description: string
  image: string
}

export type IReview = {
  author: string
  productName: string
  rate: IRating
  comment: string
}

export type ISearchItem = {
  name: string
  image: string
  rate: IRating
  id: number
  price: number
}
