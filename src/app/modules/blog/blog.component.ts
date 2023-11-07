import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  currentItem='Blog';
  bnrImg='assets/images/blog-bnr.png';
  blogData:any; 
  router = {
    pathname: '/blog' // Set your router information here
  };

  constructor(private rout: Router,
    private blogsService:ApiService) { }
  isHome() {
    return this.rout.url === '/';
  }
  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe(data => {
      this.blogData = data
    });
  }
  handleBlogBtn() {
   
  }
  handleProfileNavigate(val:any){

  }

}
