import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/data.service';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  currentItem ='Contact Us';
  bnrImg='assets/images/contact-us-bnr.png';
  borderContactNameErr: boolean = false;
  borderContactEmailErr: boolean = false;
  borderContactPhoneErr: boolean = false;
  borderContactSubjectErr: boolean = false;
  borderContactMessageErr: boolean = false;
  constructor(private service:ApiService,
    private meta: Meta, private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.route.data.subscribe((data) => {
      // Fetch meta tags from the backend
      this.service.getMetaTags('7').subscribe(data=>{
        this.meta.updateTag({ name: 'title', content: data[0].meta_tags });
        this.meta.updateTag({ name: 'description', content: data[0].meta_description });
      })
    });

  }
  handleChange(event: any) {
    // Handle input changes here
  }

  handleContactSubmit() {
    // Handle form submission here
  }
}
