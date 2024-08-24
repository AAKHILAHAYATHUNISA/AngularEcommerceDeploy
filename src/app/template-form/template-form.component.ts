import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  f_password : string = "";
  f_email : string = ""; 
  constructor( private productServ : ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  len  : number = 0;

  onSubmit(form: any){
    console.log(form.value);
    console.log(form.f_email);
    console.log(form.f_password);

    const email  = form.value.f_email;

    // not working

    // this.productServ.getAddProducts(this.productServ.getAllProducts().subscribe.length , email, form.value.f_password);
    // let len = this.productServ.getAllProducts().subscribe.length
    // this.productServ.getAddProducts(len+1 , email, form.value.f_password);


    // working
    // method - 1
    // this.productServ.getAllProducts().subscribe(products => {
    //   const currentLength = products.length;
    //   this.productServ.getAddProducts(currentLength + 1, email, form.value.f_desc); 
    // });

    // method -2 
    // this.productServ.getAllProducts().subscribe(product=>{
    //   this.productServ.getAddProducts(product.length , email, form.value.f_password)
    // });

    // method - 3
    this.productServ.getAllProducts().subscribe(product => this.len = product.length+1)
    this.productServ.getAddProducts(this.len , email, form.value.f_password);

    this.router.navigate(['/RouteForm']);

  }

}
