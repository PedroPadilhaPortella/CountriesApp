import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader.service';
import { CountriesService } from '../countries.service';
import { Country, Language, Currency } from '../country.model';

@Component({
    selector: 'app-countries-detail',
    templateUrl: './countries-detail.component.html',
    styleUrls: ['./countries-detail.component.scss']
})
export class CountriesDetailComponent implements OnInit {

    country$: Observable<Country>;
    borderCountries$: Observable<Country[]>;

    constructor(
        private countriesService: CountriesService, 
        private route: ActivatedRoute,
        public loaderService: LoaderService
    ) { }

    ngOnInit() {
        window.scroll(0, 0);
        this.route.params.subscribe((params) => {
            this.country$ = this.countriesService.getCountryByName(params.country).pipe(
                mergeMap(res => {
                    if (res.borders.length > 0) {
                        this.borderCountries$ = this.countriesService.getCountriesByCodes(res.borders);
                    }
                    
                    return of(res);
                })
            );
        });
    }

    displayCurrencies(currencies: Currency[]) {
        return currencies.map(currency => currency.name).join(', ');
    }

    displayLanguages(languages: Language[]) {
        return languages.map(language => language.name).join(', ');
    }
}