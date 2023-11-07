import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizesComponent } from './quizes.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const route:Routes=[
  {
    path:'',
    component:QuizesComponent
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
export class QuizesModule { }
