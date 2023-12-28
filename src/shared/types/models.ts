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
