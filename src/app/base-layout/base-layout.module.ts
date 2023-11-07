import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout.component';
import { FormsModule } from '@angular/forms';
import { ViewTutorialsComponent } from '../modules/tutorials/view-tutorials/view-tutorials.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'',
    component:BaseLayoutComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        loadChildren:() => import("../modules/home/home.module").then(m => m.HomeModule)
      },
      { 
        path:'courses',
        loadChildren:()=> import('../modules/course/course.module').then(m=>m.CourseModule)
      },
      { 
        path:'blog',
        loadChildren:()=> import('../modules/blog/blog.module').then(m=>m.BlogModule)
      },
      { 
        path:'quizes',
        loadChildren:()=> import('../modules/quizes/quizes.module').then(m=>m.QuizesModule)
      },
      { 
        path:'about',
        loadChildren:()=> import('../modules/about-us/about-us.module').then(m=>m.AboutUsModule)
      },
      { 
        path:'contact',
        loadChildren:()=> import('../modules/contact-us/contact-us.module').then(m=>m.ContactUsModule)
      },
      { 
        path:'issues',
        loadChildren:()=> import('../modules/main-issues/main-issues.module').then(m=>m.MainIssuesModule)
      },
      { 
        path:'',
        loadChildren:()=> import('../modules/tutorials/tutorials.module').then(m=>m.TutorialsModule)
      },
      { 
        path:'login',
        loadChildren:()=> import('../modules/login/login.module').then(m=>m.LoginModule)
      },
      { 
        path:'register',
        loadChildren:()=> import('../modules/sign-up/sign-up.module').then(m=>m.SignUpModule)
      },
      {
        path:':id',
        loadChildren:()=> import('../modules/tutorials/view-tutorials/view-tutorials.module').then(m=>m.ViewTutorialsModule)
      }
    ]
  },
  
]

@NgModule({
  declarations: [
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class BaseLayoutModule { }
