import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesDetailComponent } from './countries/countries-detail/countries-detail.component';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';


const routes: Routes = [
  { path: '', component: CountriesListComponent },
  { path: 'country/:country', component: CountriesDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
