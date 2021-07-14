export interface Country {
    flag?: string;
    name: string;
    capital: string;
    region?: string;
    population?: number;
    nativeName?: string;
    subregion?: string;
    topLevelDomain?: string[];
    currencies?: Currency[];
    languages?: Language[];
    borders?: string[];
}

export interface Currency {
    name: string;
}

export interface Language {
    name: string;
}

