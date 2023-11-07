import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    currentItem='Course';
    bnrImg='assets/images/course-bnr.png';
  courseData = [
     {
         name: "Basic Computer Courses",
         desc: "MS Office Combo Pack, Microsoft Word, Microsoft Excel, Microsoft PowerPoint",
         link: "/web-designing"
     },
     {
         name: "Web Designing",
         desc: "Web Designing - Learn Bootstrap, CSS3, HTML5, Learn JavaScript, jQuery",
         link: "/web-designing"
     },
     {
         name: "Web Development Courses",
         desc: "Web Development - Learn PHP, MySQL, HTML5, CSS3, Javascript, jQuery",
         link: "/web-development"
     },
     {
         name: "Graphic Designing",
         desc: "Graphic Designing - Master pack,  Figma, Adobe Illustrator, Adobe Photoshop",
         link:"/web-designing"
     },
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
