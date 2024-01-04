import { Meta, StoryObj } from '@storybook/angular'
import { Search } from '.'

const meta: Meta<Search> = {
  title: 'features/Product/Search',
  component: Search,
}

export default meta

export const Default: StoryObj<Search> = {}

export const Mobile: StoryObj<Search> = {
  args: {
    isMobile: true,
  },
}
