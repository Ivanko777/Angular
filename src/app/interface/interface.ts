export interface Product{
    name: string;
    value: number;
    price:number;
    countryCreate: string;
}

export interface Iphone extends Product{
    color: string;
    memory : number;
}

