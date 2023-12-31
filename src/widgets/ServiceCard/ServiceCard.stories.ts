import { Meta, StoryObj } from '@storybook/angular'
import { CommonModule } from '@angular/common'

import { IService } from '@/shared/types'
import { argsToTemplate } from '@/shared/lib'

import clean from './assets/clean.png'
import { ServiceCard } from '.'

const service: IService = {
  name: 'Дезинфекция и озонирование автомобилей и автобусов',
  description: `
    Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
    Ipsum является
  `,
  image: clean,
}

const meta: Meta<ServiceCard> = {
  title: 'widgets/ServiceCard',
  component: ServiceCard,
  render: (args) => ({
    props: args,
    template: `<ServiceCard ${argsToTemplate(args)}></ServiceCard>`,
  }),
}

export default meta

export const Default: StoryObj<ServiceCard> = {
  args: {
    service: service,
  },
}
