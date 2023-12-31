import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  dataList = [
    {
        link: "/php",
        name: "PHP Tutorials",
    },
    {
        link: "/codeignitor",
        name: "Codelgniter Tutorial",
    },
    {
        link: "/html5",
        name: "HTML5 Tutorials",
    },
    {
        link: "web-designing/",
        name: "Photoshop Tutorials",
    },
    {
        link: "/jquery",
        name: "jQuery Tutorials",
    },
];
 anotherDataList = [
    {
        link: "web-development",
        name: "Laravel Tutorials",
    },
    {
        link: "/angular",
        name: "Angular Tutorial",
    },
    {
        link: "/css3",
        name: "CSS3 Tutorials",
    },
    {
        link: "/javascript",
        name: "Javascript Tutorials",
    },
    {
        link: "/reactjs",
        name: "Reactjs Tutorials",
    },
];
 content = [
    {
        link: "/courses",
        name: "Courses",
    },
    {
        link: "",
        name: "Video",
    },
    {
        link: "/issues",
        name: "Issues",
    },
    {
        link: "/web-designing",
        name: "Skills",
    },
    {
        link: "/web-designing",
        name: "Popular Tutotrials",
    },
    {
        link: "/web-designing",
        name: "Students",
    },
    {
        link: "/web-development",
        name: "Professionals",
    },
];

 pageLink = [
    {
        link: "/",
        name: "Home",
    },
    {
        link: "/about-us",
        name: "About Us",
    },
    {
        link: "/issues",
        name: "Issues",
    },
    {
        link: "/blog",
        name: "Blog",
    },
    {
        link: "/contact-us",
        name: "Contact Us",
    },
];
 year = new Date().getFullYear()
  constructor() { }

  ngOnInit(): void {
  }

}
