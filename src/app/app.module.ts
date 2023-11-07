import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { BlogComponent } from './modules/blog/blog.component';
import { QuizesComponent } from './modules/quizes/quizes.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MainIssuesComponent } from './modules/main-issues/main-issues.component';
import { HttpClientModule } from '@angular/common/http';
import { WebDevelopmentComponent } from './modules/tutorials/web-development/web-development.component';
import { WebDesigningComponent } from './modules/tutorials/web-designing/web-designing.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ViewBlogComponent } from './modules/blog/view-blog/view-blog.component';
import { ViewIssueComponent } from './modules/main-issues/view-issue/view-issue.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogComponent,
    ViewBlogComponent,
    QuizesComponent,
    MainIssuesComponent,
    WebDevelopmentComponent,
    WebDesigningComponent,
    ViewIssueComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    SharedModule,
    FormsModule,
    CommonModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
