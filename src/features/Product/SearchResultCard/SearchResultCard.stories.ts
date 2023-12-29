import { Meta, StoryObj } from '@storybook/angular'

import { ProductEntitiesModule } from '@/entities/Product'

import { ISearchItem } from '@/shared/types'
import { moduleMetadata } from '@/shared/lib'

import { SearchResultCard } from '.'

const item: ISearchItem = {
  id: 6422889,
  image: '/src/assets/fuelTank.png',
  name: 'Паливний бак Scania',
  price: 2200,
  rate: {
    quantity: 127,
    rate: 4.8,
  },
}

const meta: Meta<SearchResultCard> = {
  title: 'entities/Product/SearchResultCard',
  component: SearchResultCard,
  args: {
    item,
  },
  decorators: [
    moduleMetadata({
      imports: [ProductEntitiesModule],
    }),
  ],
}

export default meta

export const Default: StoryObj<SearchResultCard> = {}
