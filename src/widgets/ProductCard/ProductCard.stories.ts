import { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular/dist/client/decorators'
import { argsToTemplate } from '@storybook/angular/dist/client/argsToTemplate'
import { CommonModule } from '@angular/common'

import { LikeButtonModule } from '../../features/LikeButton/LikeButton.module'
import { RatingModule } from '../../features/Rating/Rating.module'

import { UILib } from '../../shared/ui/UILib.module'
import { IProduct } from '../../shared/types'

import { ProductCard } from './ProductCard.component'
import disk from './assets/disk.png'

const product: IProduct = {
  name: 'Распредвал для Scania',
  description: `
      Это текст-"рыба", часто используемый в печати и
      вэб-дизайне. Lorem Ipsum
      является стандартной "рыбой" для текстов на латинице
      с начала XVI века.
    `,
  discount: true,
  image: disk,
  price: 2200,
  rate: {
    quantity: 127,
    rate: 4.8,
  },
  priceWithDiscount: 2000,
}

const meta: Meta<ProductCard> = {
  title: 'widgets/ProductCard',
  component: ProductCard,
  decorators: [
    moduleMetadata({
      imports: [LikeButtonModule, CommonModule, RatingModule, UILib],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
      <div class="w-1/4">
        <ProductCard ${argsToTemplate(args)}></ProductCard>
      </div>
    `,
  }),
}

export default meta

export const Default: StoryObj<ProductCard> = {
  args: {
    product,
  },
}

export const Grid: StoryObj<ProductCard> = {
  args: {
    product,
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="grid grid-cols-4 gap-2 max-w-[1140px] mb-10">
        <ProductCard ${argsToTemplate(args)}></ProductCard>
        <ProductCard ${argsToTemplate(args)}></ProductCard>
        <ProductCard ${argsToTemplate(args)}></ProductCard>
        <ProductCard ${argsToTemplate(args)}></ProductCard>
        <ProductCard ${argsToTemplate(args)}></ProductCard>
        <ProductCard ${argsToTemplate(args)}></ProductCard>
        <ProductCard ${argsToTemplate(args)}></ProductCard>
        <ProductCard ${argsToTemplate(args)}></ProductCard>
      </div>
    `,
  }),
}
