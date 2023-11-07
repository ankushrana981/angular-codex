import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/data.service';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent implements OnInit {
  currentItem ='Tutorials';
  bnrImg = 'assets/images/insite-banner.svg';
  skillData:any;
  constructor(private service:ApiService,private sanitizer: DomSanitizer,private meta: Meta, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAllSkills().subscribe(data =>{
      this.skillData = data;
    })
    this.route.data.subscribe((data) => {
      // Fetch meta tags from the backend
      this.service.getMetaTags('4').subscribe(data=>{
        this.meta.updateTag({ name: 'title', content: data[0].meta_tags });
        this.meta.updateTag({ name: 'description', content: data[0].meta_description });
      })
    });
  }
  getSanitizedSvg(svgContent: string | null): SafeHtml | null {
    if (svgContent) {
      return this.sanitizer.bypassSecurityTrustHtml(svgContent);
    }
    return null;
  }

}
