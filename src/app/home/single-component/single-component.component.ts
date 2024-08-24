import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/app/Models/api';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.scss']
})
export class SingleComponentComponent implements OnInit {

  disp_id : number = 0;
  http : HttpClient
  ApiCard : Api | undefined
  constructor(http : HttpClient, private activeRoute: ActivatedRoute, private route: Router) {
    this.http = http;
   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data)=>{
      this.disp_id = Number(data['api_id']);
      this.http
      .get<Api>(`https://jsonplaceholder.typicode.com/posts/${this.disp_id}`)
      .subscribe(data=>{
        console.log(data)
        this.ApiCard = data
        console.log(this.ApiCard)
      })
    })
    // const nav = this.route.getCurrentNavigation();
    // console.log(nav?.extras?.state)
    // console.log(nav)
    // if (nav?.extras?.state) {
    //   this.selectedApiCard = nav.extras.state['ApiCard'];
    // } else {
    //   // Handle the case where navigation state is not available
    //   console.log('No data passed');
    // }
    // console.log("event")
    // this.route.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //   console.log("event")
    //   const nav = this.route.getCurrentNavigation();
    //   console.log(nav)
    //   console.log(nav?.extras?.state)
    //   if (nav?.extras?.state) {
    //     this.selectedApiCard = nav.extras.state['ApiCard'];
    //     console.log('Received ApiCard:', this.selectedApiCard);
    //   } else {
    //     console.log('No state data found');
    //   }
    // });

    this.getApiData()
  }
  selectedApiCard  : Api | undefined;
  getApiData(){

    // const nav = this.route.getCurrentNavigation();
    // console.log(nav?.extras?.state)
    // console.log(nav)
    // if (nav?.extras?.state) {
    //   this.selectedApiCard = nav.extras.state['Card'];
    // } else {
    //   // Handle the case where navigation state is not available
    //   console.log('No data passed');
    // }
    // // this.selectedApiCard = nav?.extras.state?.['ApiCard'];
    // this.disp_id = this.selectedApiCard?.id || 0;
    // console.log("data in single comp  : "+this.selectedApiCard)
  }

  // dataDisplay(){
  //   this.selectedApiCard = api;
  //   console.log("data in single comp  : "+this.selectedApiCard)
  // }

}
