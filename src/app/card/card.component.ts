import { style } from '@angular/animations';
import { Interpolation } from '@angular/compiler';
import {Component, Input, OnInit} from '@angular/core';
import { bufferToggle, timeout } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Product } from '../interface/interface';



@Component({
    selector : 'app-card', 
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    interpolation : ['{{','}}']
})

export class CardComponent implements OnInit {

    @Input()
    card!: Product;

    title:string = 'Change Me'
    text = 'The third Apple that changed the world'

    model = {
        nameProduct: 'iPhone',
        model: '12',
        price : '1000$',
        color: 'Blue',
        memory: '128',
        amount : 7  
    }

    constructor() {
    }

    changeTitle(){
        this.title = 'New Title My Phone'
    }

    changeAmount(){
        if(this.model.amount > 0){
            this.model.amount = this.model.amount - 1
        }
        else{
            alert('No money, no Honey')
        }
        
    }

    onInput(event:any){
        const value = event.target.value
        this.title = value
    }

    imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0aI4xMMNVJrw4MI7dEF678coltE2euSQ9A&usqp=CAU'

    ngOnInit(){
        setTimeout(()=>{
            this.imgUrl = 'data:image/jpeg;base64,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'
        },3000 )
    }
    getInfo(): string {
        return 'This information about Seller Phone'
    }
}