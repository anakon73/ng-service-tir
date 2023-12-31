import { Meta, StoryObj } from '@storybook/angular'

import { IReview } from '@/shared/types'
import { argsToTemplate } from '@/shared/lib'

import { ReviewCard } from '.'

const review: IReview = {
  author: 'Ann Lubin',
  comment: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
    ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
    etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
    nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam
    lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
    Ullamcorper risus tempor, ac nunc libero urna, feugiat.
  `,
  productName: 'Диск гальмівний Scania',
  rate: {
    quantity: 127,
    rate: 4.7,
  },
}

const meta: Meta<ReviewCard> = {
  title: 'widgets/ReviewCard',
  component: ReviewCard,
  args: {
    review,
  },
}

export default meta

export const Default: StoryObj<ReviewCard> = {}

export const Row: StoryObj<ReviewCard> = {
  render: (args) => ({
    props: args,
    template: `
      <div class="flex gap-4">
        <ReviewCard ${argsToTemplate(args)}></ReviewCard>
        <ReviewCard ${argsToTemplate(args)}></ReviewCard>
      </div>
    `,
  }),
}
