import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../Models/api';
import { product } from '../Models/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product-dispalay',
  templateUrl: './product-dispalay.component.html',
  styleUrls: ['./product-dispalay.component.scss']
})

export class ProductDispalayComponent implements OnInit {


  disp_id : any = 0;
  // productFromList!: product;
  Myhttp! : HttpClient
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  constructor( private productservice : ProductService, private http : HttpClient, private router: ActivatedRoute, private route: Router) { }
  productFromList : product | undefined

  @Input()
  ApiCard : Api | undefined

  @Input() List : product[] = [];

  // @Input()
  isHomeRoutePresent!: boolean;

  ngOnInit(): void {
    // this.disp_id = this.activeRoute.snapshot.paramMap.get('display_id');

    // this.activeRoute.params.subscribe((data)=>{
    //   this.disp_id = Number(data['display_id']);
    //   // this.productFromList = this.productservice.getAllProducts().find((product) => product.id == this.disp_id);
    //   // will have to subscribe to getAllProducts if the list will get changed by any other changes
    //   this.productservice.getAllProducts().subscribe(product=>{
    //     this.productFromList = product.find((product) => product.id == this.disp_id);
    //   })
    // })
    // this.router.queryParams.subscribe(params => {
    //   this.isHomeRoutePresent = params['isHomeRoutePresent'] === 'true';
    //   console.log(this.isHomeRoutePresent)
    //         // this.route.navigate(['/Products', this.disp_id]);
    //         // console.log(this.isHomeRoutePresent)
    // });
    this.getApiData()
    this.getListData()

    // this.receiveData(event)



    // this.activeRoute.params.subscribe((data)=>{
    //   this.disp_id = Number(data['display_id']);
    // })
  }
  receiveData(data : any){
    console.log("dispaly comp")
    this.isHomeRoutePresent=true
    console.log(data)


    this.ApiCard = data
    console.log(this.ApiCard)
    // this.route.navigate(['/Products', this.disp_id]);

  }
  getListData(){
    this.activeRoute.params.subscribe((data)=>{
      this.disp_id = Number(data['display_id']);
      // this.productFromList = this.productservice.getAllProducts().find((product) => product.id == this.disp_id);
      // will have to subscribe to getAllProducts if the list will get changed by any other changes
      this.productservice.getAllProducts().subscribe(product=>{
        this.productFromList = product.find((product) => product.id == this.disp_id);
      })
    })
  }

  getApiData(){
    // this.activeRoute.params.subscribe((data)=>{
    //   // this.route.navigate(['/Products', this.disp_id]);
    //   // this.disp_id = Number(data['display_id']);
    //   // this.productFromList = this.productservice.getAllProducts().find((product) => product.id == this.disp_id);
    //   // will have to subscribe to getAllProducts if the list will get changed by any other changes
      
      
    //   this.Myhttp
    //   .get<Api>(`https://jsonplaceholder.typicode.com/posts/${this.disp_id}`)
    //   .subscribe(data=>{
    //     console.log(data)
    //     this.ApiCard = data
    //     console.log(this.ApiCard)
    //   })

    //   console.log(this.ApiCard)
    // })
    console.log(this.productservice.getRoute())
    this.isHomeRoutePresent = this.productservice.getRoute()
    this.card = this.productservice.getApiCard()
    console.log(this.card)
  }

  cardclk(disp : number){
    console.log(('https://jsonplaceholder.typicode.com/posts/'+disp))
    // this.isHomeRoutePresent = true
    this.http
    .get<Api>('https://jsonplaceholder.typicode.com/posts/'+disp)
    .subscribe(data=>{
      console.log(data)
      this.card = data
      console.log(this.card)
    })
  }

  card : Api | undefined;

}
