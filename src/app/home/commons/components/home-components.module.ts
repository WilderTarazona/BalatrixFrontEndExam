import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeHeaderComponent
    ],
    exports: [
        HomeHeaderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    entryComponents: [],
})
export class HomeComponentsModule { }
