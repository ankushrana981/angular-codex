import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/data.service';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.css']
})
export class OurBlogComponent implements OnInit {
  blogData:any;
  constructor(private blogsService:ApiService) { }

  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe(data => {
      this.blogData = data
    });
  }

}
