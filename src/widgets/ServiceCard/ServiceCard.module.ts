import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UILib } from '@/shared/ui/UILib.module'

import { ServiceCard } from '.'

@NgModule({
  declarations: [ServiceCard],
  imports: [CommonModule, UILib],
  exports: [ServiceCard],
})
export class ServiceCardModule {}
