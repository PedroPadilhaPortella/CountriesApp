import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesDetailComponent } from './countries-detail/countries-detail.component';
import { CountriesListComponent } from './countries-list/countries-list.component';

import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        CountriesListComponent,
        CountriesDetailComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule
    ]
})

export class CountriesModule { }
