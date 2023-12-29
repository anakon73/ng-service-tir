import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ProductEntitiesModule } from '@/entities/Product'

import { ProductFeaturesModule } from '@/features/Product'

import { UILib } from '@/shared/ui'

import { ProductCard } from '.'

@NgModule({
  declarations: [ProductCard],
  imports: [ProductEntitiesModule, CommonModule, ProductFeaturesModule, UILib],
  exports: [ProductCard],
})
export class ProductCardModule {}
