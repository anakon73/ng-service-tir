import { NgModule } from '@angular/core'

import { UILib } from './ui/UILib.module'

@NgModule({
  imports: [UILib],
  exports: [UILib],
})
export class SharedModule {}
