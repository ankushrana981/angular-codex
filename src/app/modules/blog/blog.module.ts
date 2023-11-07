import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const route: Routes=[
  {
    path:'',
    component:BlogComponent,
  },
  {
    path:':id',
    component:ViewBlogComponent,
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
export class BlogModule { }
