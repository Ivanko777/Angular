// import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
// import { Modal } from 'angular2-modal/plugins/bootstrap';
// import { AdditionCalculateWindow, AdditionCalculateWindowData } from './custom-modal-sample';
 
// @Component({
//   selector: 'my-app',
//   template: `
//   <h1>angular2-modal{{version}}</h1>
//   <h2>Basic Modal sample</h2>
//   <button (click)="onClick()">Alert</button>
//   <br>
//   <h2>Custom Modal example:</h2>
//   <button (click)="openCustom()">Custom Modal</button>
//   <p>
//   <b>IMPORTANT:</b>
//   Since 'AdditionCalculateWindow' is never explicitly used (in a template)
//   we must tell angular about it by adding it to the <strong>entryComponents</strong> property in the module meta.
//   </p>
  
//   <h2>See systemjs.config.js implementation for UMD vs module loading</h2>

//   `
  
// })
// export class AppComponent {
//   get version(): string {
//     return window.angular2ModalVer;
//   }
  
//   constructor(vcRef: ViewContainerRef, public modal: Modal) {
//     modal.defaultViewContainer = vcRef;
//   }
  
//   onClick() {
//     this.modal.alert()
//         .size('lg')
//         .showClose(true)
//         .title('A simple Alert style modal window')
//         .body(`
//             <h4>Alert is a classic (title/body/footer) 1 button modal window that 
//             does not block.</h4>
//             <b>Configuration:</b>
//             <ul>
//                 <li>Non blocking (click anywhere outside to dismiss)</li>
//                 <li>Size large</li>
//                 <li>Dismissed with default keyboard key (ESC)</li>
//                 <li>Close wth button click</li>
//                 <li>HTML content</li>
//             </ul>`)
//         .open();
//   }
  
//   openCustom() {
//     this.modal.open(AdditionCalculateWindow, new AdditionCalculateWindowData(2, 3));
//   }
// }

