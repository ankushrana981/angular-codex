import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {
  currentItem='Quizes';
  bnrImg='assets/images/contact-us-bnr.png';
  quizeData:any
  constructor(private service:ApiService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.service.getAllSkills().subscribe(data =>{
      this.quizeData = data;
    })
  }
  getSanitizedSvg(svgContent: string | null): SafeHtml | null {
    if (svgContent) {
      return this.sanitizer.bypassSecurityTrustHtml(svgContent);
    }
    return null;
  }
}
