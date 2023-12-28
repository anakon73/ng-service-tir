import { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular/dist/client/decorators'
import { argsToTemplate } from '@storybook/angular/dist/client/argsToTemplate'
import { CommonModule } from '@angular/common'

import { IService } from '@/shared/types'
import { UILib } from '@/shared/ui/UILib.module'

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
  decorators: [
    moduleMetadata({
      imports: [CommonModule, UILib],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
      <div class="font-montserrat">
        <ServiceCard ${argsToTemplate(args)}></ServiceCard>
      </div>
    `,
  }),
}

export default meta

export const Default: StoryObj<ServiceCard> = {
  args: {
    service: service,
  },
}
