import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import { SharedModule } from 'src/app/shared/shared.module';

const route:Routes=[
  {
    path:'',
    component:CourseComponent
  }
]

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(route)
  ]
})
export class CourseModule { }
