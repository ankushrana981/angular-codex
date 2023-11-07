import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-banner',
  templateUrl: './about-banner.component.html',
  styleUrls: ['./about-banner.component.css']
})
export class AboutBannerComponent implements OnInit {
  @Input() name = '';
  @Input() bnrImg = '';
  constructor() { }

  ngOnInit(): void {
  }

}
