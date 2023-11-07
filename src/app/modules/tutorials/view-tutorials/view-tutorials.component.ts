import { Component, OnInit } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgFor } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/services/data.service';
import { SharedModule } from '../../../shared/shared.module';
import { filter } from 'rxjs';

declare const bootstrap: any;

@Component({
  selector: 'app-view-tutorials',
  templateUrl: './view-tutorials.component.html',
  styleUrls: ['./view-tutorials.component.css'],
  standalone: true,
  imports: [CdkAccordionModule, NgFor, SharedModule],
})
export class ViewTutorialsComponent implements OnInit {
  chapterNames: any;
  chapterList: any;
  chapterData: any;
  url:string=''
  chapterValue: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ApiService
  ) {}

  ngOnInit(): void {
    
    this.chapterValue = this.router.url.split('/')[1];
    
    this.service.getAllSkillChapter(this.chapterValue).subscribe((data) => {
      this.chapterList = data;
      this.chapterNames = data[0].sub_chapter.map(
        (item: { name: any }) => item.name
      );


      this.url = data[0].sub_chapter.map((item: { url: any }) => item.url);
      if (this.chapterNames) {
        this.service
          .getAllSkillChapterData(this.chapterValue, this.url[0])
          .subscribe((data) => {
            this.chapterData = data;
          });
      }
      
      this.route.params.subscribe((params) => {
        if (
          this.chapterList[0]?.sub_chapter[0]?.url !== undefined &&
          this.router.url === `/${params['id']}`
        ) {
          this.router.navigate([
            `/${params['id']}/${this.chapterList[0]?.sub_chapter[0].url}`,
          ]);
        }
      });
    });
  }
  navigateToPreviousChapter() {
      if (this.chapterData.previous_page_url) {
     this.router.navigate([this.router.url.split('/')[1], this.chapterData.previous_page_url]);
    }
  }

  navigateToNextChapter() {
    if (this.chapterData.next_page_url) {
      this.router.navigate([this.router.url.split('/')[1], this.chapterData.next_page_url]);
     }
  }
  navigation(id: string, chapterList: any): void {
    const chapterId = chapterList?.sub_chapter.find(
      (chapter: { id: string }) => chapter.id === id
    );
    if (chapterId.url !== this.router.url.split('/')[2]) { 
      this.router.navigate([`/${this.router.url.split('/')[1]}/${chapterId.url}`]);
    }
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      const currentRoute = this.route.snapshot;
      const chapterValue = currentRoute.paramMap.get('id');
      this.service.getAllSkillChapterData(this.chapterValue, chapterValue)
        .subscribe((data) => {
          this.chapterData = data;
        });
    });
  }
}
