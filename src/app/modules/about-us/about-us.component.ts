import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/data.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  currentItem ='About Us';
  bnrImg ='assets/images/about-svg.svg';
  topicData = [
    {
      name: "Web Development",
      link: "/web-development"
    },
    {
      name: "Web Designing",
      link: "/web-designing"
    },
    {
      name: "Basic computer",
      link: "/web-designing"
    },
    {
      link: "/php"
    },
    {
      name: "CodeIgniter Tutorial",
      link: "/codeigniter"
    },
    {
      name: "HTML5 Tutorials",
      link: "/html5"
    },
    {
      name: "CSS3 Tutorials",
      link: "/css3"
    },
    {
      name: "Photoshop Tutorials",
      link: "/web-designing"
    },
  ]
  svgIcon = this.sanitizer.bypassSecurityTrustHtml(``);
  constructor(private sanitizer: DomSanitizer,private service:ApiService,
    private meta: Meta, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      // Fetch meta tags from the backend
      this.service.getMetaTags('3').subscribe(data=>{
        this.meta.updateTag({ name: 'title', content: data[0].meta_tags });
        this.meta.updateTag({ name: 'description', content: data[0].meta_description });
      })
    });

  }

}
