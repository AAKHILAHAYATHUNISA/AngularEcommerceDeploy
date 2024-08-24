import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.scss']
})
export class NavbuttonComponent implements OnInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  card_id : any =0;
  constructor() { }

  ngOnInit(): void {
    this.card_id = Number(this.activeRoute.snapshot.paramMap.get('display_id'));
  }

}
