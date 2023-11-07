import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/data.service';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.css']
})
export class ViewIssueComponent implements OnInit {
  slug:string='';
  currentItem='Issues';
  bnrImg='assets/images/issue-bnr.png';
   singleIssue: any;
   issueData:any;
  constructor(private route: Router,
    private blogsService:ApiService) { }

  ngOnInit(): void {
  this.slug = this.route.url.split('/')[2];
  this.blogsService.getIssueView(this.slug).subscribe(data => {
    this.singleIssue = data[0]
    console.log(this.singleIssue,"singleIssue")
  });
  this.blogsService.getIssue().subscribe(data => {
    this.issueData = data;
    console.log(this.issueData,"this.issueData")
  });
}
getSlug(slug:string){
  this.blogsService.getIssueView(slug).subscribe(data => {
    this.singleIssue = data[0]
  });

}
setAddComment(addComment: boolean) {
  // Implement the logic for setting addComment
}

handleProfileNavigate(singleBlog: any) {
  // Implement the logic for profile navigation
}
}
