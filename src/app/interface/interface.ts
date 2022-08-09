export interface Product{
    name: string;
    amount: number;
    price:number;
    color: string;
    memory : number;
}

export interface Iphone extends Product{
    countryCreate: string;

}

export interface Picture {
    name: string,
    amount : number,
    model: string,
    URL : string
}

