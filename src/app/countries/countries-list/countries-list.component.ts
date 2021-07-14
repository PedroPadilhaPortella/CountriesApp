import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CountriesService } from '../countries.service';
import { Country } from '../country.model';

@Component({
    selector: 'app-countries-list',
    templateUrl: './countries-list.component.html',
    styleUrls: ['./countries-list.component.scss'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesListComponent implements OnInit {
    source: Country[];
    searchFilter?: string;
    regionFilter?: string = "";

    constructor(private countriesService: CountriesService) { }

    ngOnInit(): void {
        window.scroll(0, 0);
        this.countriesService.getCountries().subscribe(countries => {
            this.source = countries;
        });
    }

    get countries(): Country[] {
        return this.source 
            ? this.source.filter((country) =>
                this.searchFilter
                    ? country.name.toLowerCase().includes(this.searchFilter.toLowerCase())
                    : country
            )
            .filter((country) =>
                this.regionFilter 
                    ? country.region.includes(this.regionFilter) 
                    : country
            )
            : this.source;
    }
}
