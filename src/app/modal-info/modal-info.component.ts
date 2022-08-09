import { Component, Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { Picture } from '../interface/interface';

@Directive ({
  selector: '[app-modal-info]'
})

// @Component({
//   selector: 'app-modal-info',
//   templateUrl: './modal-info.component.html',
//   styleUrls: ['./modal-info.component.css']
// })
export class ModalInfoComponent {

  @Input() pictureInfo?: Picture;

  @HostListener('click') onClick(){
    this.addModalWindow()
  };

  constructor(private element: ElementRef) { }

  addModalWindow(){
    const modalBlock = document.createElement('div')
    modalBlock.classList.add('modal-block')
    
    const modalWrapper = document.createElement('div')
    modalWrapper.classList.add('modal-wrapper')
    modalWrapper.addEventListener('click',(event)=> this.closeModal(event))

    const modalWindow = document.createElement('div')
    modalWindow.classList.add('modal')

    const closeButton = document.createElement('button')
    closeButton.addEventListener('click',(event)=> this.closeModal(event))

    const image = document.createElement('div')
    modalWindow.innerHTML = `
    <div class='image'><img scr='${this.pictureInfo?.URL}'></div>
    <div class='name'>${this.pictureInfo?.name}'</div>
    <div class='amount'>${this.pictureInfo?.amount}'</div>
    <div class='model'>${this.pictureInfo?.model}'</div>`
      modalWindow.before(closeButton);
      modalBlock.append(modalWrapper)
      modalBlock.append(modalWindow);



    this.element.nativeElement.append(modalBlock);

  }

  closeModal(event){
    event.stopPropagantion();

      const modalWrapper = this.element.nativeElement.querySelector('.modal-wrapper')
      modalWrapper.remove()
  }

  ngOnInit(): void {
  }

}
