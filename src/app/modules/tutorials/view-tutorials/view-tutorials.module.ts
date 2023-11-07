import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTutorialsComponent } from './view-tutorials.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const route:Routes=[
  {
    path:'',
    component:ViewTutorialsComponent
  },
  {
    path:':id',
    component:ViewTutorialsComponent
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(route)
  ]
})
export class ViewTutorialsModule { }
