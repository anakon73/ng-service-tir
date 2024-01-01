import { Meta, StoryObj } from '@storybook/angular'

import { ISearchItem } from '@/shared/types'

import fuelTank from './assets/fuelTank.png'
import { NSearchResultCard } from '.'

const item: ISearchItem = {
  id: 6422889,
  image: fuelTank,
  name: 'Паливний бак Scania',
  price: 2200,
  rate: {
    quantity: 127,
    rate: 4.8,
  },
}

const meta: Meta<NSearchResultCard> = {
  title: 'entities/Product/NSearchResultCard',
  component: NSearchResultCard,
  args: {
    item,
  },
}

export default meta

export const Default: StoryObj<NSearchResultCard> = {}
