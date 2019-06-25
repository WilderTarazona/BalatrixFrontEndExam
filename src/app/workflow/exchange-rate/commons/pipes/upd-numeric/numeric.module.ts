import { NgModule } from '@angular/core';
import { UpdNumericPipe } from './numeric.pipe';

@NgModule({
  declarations: [
    UpdNumericPipe
  ],
  exports: [
    UpdNumericPipe
  ]
})
export class UpdNumericModule {}
