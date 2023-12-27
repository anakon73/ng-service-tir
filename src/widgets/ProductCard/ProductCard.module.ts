import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ProductEntitiesModule } from '../../entities/Product/ProductEntities.module'

import { ProductFeaturesModule } from '../../features/Product/ProductFeatures.module'

import { UILib } from '../../shared/ui/UILib.module'

import { ProductCard } from './ProductCard.component'

@NgModule({
  declarations: [ProductCard],
  imports: [ProductEntitiesModule, CommonModule, ProductFeaturesModule, UILib],
  exports: [ProductCard],
})
export class ProductCardModule {}
