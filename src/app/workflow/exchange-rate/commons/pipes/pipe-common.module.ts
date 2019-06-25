import { NgModule } from '@angular/core';
import { UpdNumericModule } from './upd-numeric/numeric.module';

@NgModule({
  imports: [
    UpdNumericModule
  ],
  exports: [
    UpdNumericModule
  ],
})
export class PipeCommonModule { }
