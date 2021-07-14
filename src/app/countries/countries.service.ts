import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Country } from './country.model';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    private url = 'https://restcountries.eu/rest/v2';
    countries: Country[] = [];

    constructor(private http: HttpClient) { }

    getCountries() {
        if (this.countries.length > 0) return of(this.countries);

        return this.http.get<Country[]>(`${this.url}/all`).pipe(
            map(countries => {
                this.countries = countries;
                return countries;
            })
        )
    }

    getCountryByName(name: string) {
        return this.http
            .get<Country>(`${this.url}/alpha/${name}`)
    }

    getCountriesByCodes(codes: string[]) {
        return this.http.get<Country[]>(`${this.url}/alpha?codes=${codes.join(';')}`)
    }

}
