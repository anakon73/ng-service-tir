import { Meta, StoryObj } from '@storybook/angular'

import { IAdvantage } from '@/shared/types'
import { argsToTemplate } from '@/shared/lib'

import { AdvantageCard } from '.'

const advantage: IAdvantage = {
  name: 'Швидкість роботи',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
    ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
    amet etiam tincidunt.
  `,
  image: '🚀',
}

const meta: Meta<AdvantageCard> = {
  title: 'widgets/AdvantageCard',
  component: AdvantageCard,
  render: (args) => ({
    props: args,
    template: `<AdvantageCard ${argsToTemplate(args)}></AdvantageCard>`,
  }),
}

export default meta

export const Default: StoryObj<AdvantageCard> = {
  args: {
    advantage,
  },
}
