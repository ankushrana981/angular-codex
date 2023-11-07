import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/data.service';

@Component({
  selector: 'app-main-issues',
  templateUrl: './main-issues.component.html',
  styleUrls: ['./main-issues.component.css']
})
export class MainIssuesComponent implements OnInit {
  currentItem='Issues';
  bnrImg='assets/images/issue-bnr.png';

  IssueData:any;
  constructor(private issueService: ApiService ,) { }

  ngOnInit(): void {
    this.issueService.getIssue().subscribe(data => {
      this.IssueData = data;
    });
  }
}
