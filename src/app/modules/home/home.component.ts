import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiService,
    private meta: Meta, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      // Fetch meta tags from the backend
      this.service.getMetaTags('2').subscribe(data=>{
        this.meta.updateTag({ name: 'title', content: data[0].meta_tags });
        this.meta.updateTag({ name: 'description', content: data[0].meta_description });
      })
    });

  }

}
