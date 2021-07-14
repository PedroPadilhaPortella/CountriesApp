import { NavbarComponent } from './navbar/navbar.component';
import { LoaderComponent } from './loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        LoaderComponent,
        NavbarComponent
    ],
    exports: [
        LoaderComponent,
        NavbarComponent
    ]
})
export class SharedModule { }
