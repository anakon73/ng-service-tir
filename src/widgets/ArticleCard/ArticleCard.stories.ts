import { Meta, StoryObj } from '@storybook/angular'

import { IArticle } from '@/shared/types'
import { argsToTemplate } from '@/shared/lib'

import engine from './assets/engine.png'
import { ArticleCard } from '.'

const article: IArticle = {
  date: '1 Вересня 2023',
  description: `
    Like to know the secrets of transforming a 2-14 team into a 3x Super
    Bowl winning Dynasty?`,
  image: engine,
  name: 'Як відбувається ремонт двигунів?',
}

const meta: Meta<ArticleCard> = {
  title: 'widgets/ArticleCard',
  component: ArticleCard,
  render: (args) => ({
    props: args,
    template: `<ArticleCard ${argsToTemplate(args)}></ArticleCard>`,
  }),
}

export default meta

export const Default: StoryObj<ArticleCard> = {
  args: {
    article,
  },
}

export const Row: StoryObj<ArticleCard> = {
  args: {
    article,
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="grid grid-cols-3 gap-10 max-w-[1140px]">
        <ArticleCard ${argsToTemplate(args)}></ArticleCard>
        <ArticleCard ${argsToTemplate(args)}></ArticleCard>
        <ArticleCard ${argsToTemplate(args)}></ArticleCard>
        <ArticleCard ${argsToTemplate(args)}></ArticleCard>
        <ArticleCard ${argsToTemplate(args)}></ArticleCard>
        <ArticleCard ${argsToTemplate(args)}></ArticleCard>
      </div>
    `,
  }),
}
