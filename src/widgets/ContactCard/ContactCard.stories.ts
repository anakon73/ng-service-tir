import { Meta, StoryObj } from '@storybook/angular'
import { NgIconsModule } from '@ng-icons/core'
import { heroMap } from '@ng-icons/heroicons/outline'

import { moduleMetadata } from '@/shared/lib'
import { UILib } from '@/shared/ui'

import { ContactCard } from '.'

const meta: Meta<ContactCard> = {
  title: 'widgets/ContactCard',
  component: ContactCard,
  decorators: [
    moduleMetadata({
      imports: [NgIconsModule.withIcons({ heroMap }), UILib],
    }),
  ],
}

export default meta

export const Default: StoryObj<ContactCard> = {}
