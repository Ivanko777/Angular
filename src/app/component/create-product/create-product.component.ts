import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.services';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {


  constructor(private productService: ProductService,
    private modalService: ModalService
  ) {

  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(7)
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(12)
    ]),
    rating: new FormControl(),
    price: new FormControl<number>((1), [
      Validators.required,
      Validators.minLength(2)
    ]),
    image: new FormControl<string>('data:image/png;base64,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')
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  get description() {
    return this.form.controls.description as FormControl
  }
  get price() {
    return this.form.controls.price as FormControl
  }
  get image() {
    return this.form.controls.image as FormControl
  }
  get rating() {
    return this.form.controls.rating as FormControl
  }


  ngOnInit(): void {

  }

  submit() {



    this.productService.create({

      title: this.form.value.title as string,
      price: this.form.value.price as number,
      description: this.form.value.description as string,
      image: this.form.value.image as string,
      category: 'electronic',
      rating: {
        'rate': Number.parseFloat((this.form.value.rating ? this.form.value.rating : 0).toString()),
        'count': 1
      }

    }).subscribe(() => {
      this.modalService.close()
    })

  }


}
