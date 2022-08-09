import { Product } from "../interface/interface";
import { Iphone } from "../interface/interface";

export class IPoduct implements Product{
    public name: string;
    public amount: number;
    public price:number;
    public color: string;
    public memory : number;

    

    constructor(obj:Product){
        this.name = obj.name;
        this.amount = obj.amount;
        this.price = obj.price;
        this.color = obj.color;
        this.memory = obj.memory;
        
        
    }

    getSell(valueSell:number):number{
        if(valueSell> this.amount) throw new Error('No money, no Honey')
        return this.price * valueSell
    }

}

export class newIphone extends IPoduct{
    countryCreate: string;

    constructor(obj:Iphone){
        super(obj);
        this.countryCreate = obj.countryCreate;
       
    }
}

