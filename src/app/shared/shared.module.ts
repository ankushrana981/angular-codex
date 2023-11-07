import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutBannerComponent } from './about-banner/about-banner.component';
import { BannerComponent } from './banner/banner.component';
import { GoalsComponent } from './goals/goals.component';
import { IssueComponent } from './issue/issue.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { PopularTutorialComponent } from './popular-tutorial/popular-tutorial.component';
import { TrainingComponent } from './training/training.component';
import { TutorialTabComponent } from './tutorial-tab/tutorial-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {CdkAccordionModule} from '@angular/cdk/accordion'
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';



const components = [
    AboutBannerComponent,
    BannerComponent,
    GoalsComponent,
    IssueComponent,
    OurBlogComponent,
    PopularTutorialComponent,
    TrainingComponent,
    TutorialTabComponent,
    LoaderComponent
];

@NgModule({
    declarations: components,
    exports: [...components],
    imports: [
        CommonModule,
        MatTabsModule,
        CarouselModule,
        CdkAccordionModule,
        FormsModule
    ],
    providers: [
        
    ]
})
export class SharedModule { }
