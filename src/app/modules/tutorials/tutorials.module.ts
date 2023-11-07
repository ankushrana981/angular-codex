import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { WebDesigningComponent } from './web-designing/web-designing.component';
import { SharedModule } from 'src/app/shared/shared.module';


const route:Routes=[
  {
    path:'web-development',
    component:WebDevelopmentComponent
  },
  {
    path:'web-designing',
    component:WebDesigningComponent
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
export class TutorialsModule { }
