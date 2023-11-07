import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/services/data.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  slug:string='';
  currentItem='Blog';
  bnrImg='assets/images/blog-bnr.png';
   singleBlog: any;
   blogData:any;
  constructor(private route: Router,
    private blogsService:ApiService) { }

  ngOnInit(): void {
    
    this.slug = this.route.url.split('/')[2];
    this.blogsService.getBlogView(this.slug).subscribe(data => {
      this.singleBlog = data[0]
    });
    this.blogsService.getBlogs().subscribe(data => {
      this.blogData = data
    });
  }
  getSlug(slug:string){
    this.blogsService.getBlogView(slug).subscribe(data => {
      this.singleBlog = data[0]
    });
  }
  setAddComment(addComment: boolean) {
    // Implement the logic for setting addComment
  }

  handleProfileNavigate(singleBlog: any) {
    // Implement the logic for profile navigation
  }
}
