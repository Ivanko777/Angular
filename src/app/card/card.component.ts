import { style } from '@angular/animations';
import { Interpolation } from '@angular/compiler';
import {Component, OnInit} from '@angular/core';
import { timeout } from 'rxjs';



@Component({
    selector : 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    interpolation : ['{{','}}']
})
export class CardComponent implements OnInit {
    title:string = 'My Card iPhone'
    text = 'Options of pFone'
    model = {
        name: 'iPhone',
        model: '12',
        price : '1000$'
    }
    changeTitle(){
        this.title = 'New Title My Phone'
    }

    onInput(event:any){
        const value = event.target.value
        this.title = value
    }

    imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0aI4xMMNVJrw4MI7dEF678coltE2euSQ9A&usqp=CAU'

    ngOnInit(){
        setTimeout(()=>{
            this.imgUrl = 'https://chudesalegko.ru/wp-content/uploads/2013/07/yabloko.jpg'
        },3000 )
    }
    getInfo(): string {
        return 'This information about Seller Phone'
    }
}