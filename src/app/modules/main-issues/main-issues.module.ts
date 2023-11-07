import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIssuesComponent } from './main-issues.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewIssueComponent } from './view-issue/view-issue.component';

const route:Routes=[
  {
    path:'',
    component:MainIssuesComponent
  },
  {
    path:':id',
    component:ViewIssueComponent,
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(route)
  ]
})
export class MainIssuesModule { }
