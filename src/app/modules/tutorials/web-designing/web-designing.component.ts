import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/data.service';

@Component({
  selector: 'app-web-designing',
  templateUrl: './web-designing.component.html',
  styleUrls: ['./web-designing.component.css']
})
export class WebDesigningComponent implements OnInit {
  currentItem='Tutorials';
  aboutBnr='assets/images/insite-banner.svg';
  skillData:any;
  constructor(private service:ApiService,private sanitizer: DomSanitizer,
    private meta: Meta, private route: ActivatedRoute) { }

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
