import { Product } from "../interface/interface";
import { Iphone } from "../interface/interface";

export class IPoduct implements Product{
    name: string;
    value: number;
    price:number;
    countryCreate: string;

    constructor(obj:Product){
        this.name = obj.name;
        this.value = obj.value;
        this.price = obj.price;
        this.countryCreate = obj.countryCreate
    }

    getSell(valueSell:number):number{
        if(valueSell> this.value) throw new Error('No money, no Honey')
        return this.price * valueSell
    }

}

export class newIphone extends IPoduct{
    color: string;
    memory : number;

    constructor(obj:Iphone){
        super(obj);
        this.color = obj.color;
        this.memory = obj.memory
    }
}