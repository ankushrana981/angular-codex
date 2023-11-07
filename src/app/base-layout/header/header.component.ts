import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  slug: string | undefined;
  user: any;
  showNavDrop: boolean = false;
  hideUserDetail: boolean = false;
  isScrolled: boolean = false;
  searchValue: string = '';
  aquaticCreatures: { label: string; value: string }[] = [
    { label: 'PHP', value: '/php' },
    { label: 'HTML', value: '/html5' },
    { label: 'CSS', value: '/css3' },
    { label: 'JavaScript', value: '/javascript' },
    { label: 'J-query', value: '/jquery' },
    { label: 'Angular', value: '/angular' },
    { label: 'React.js', value: '/reactjs' },
    { label: 'CodeIgniter', value: '/codeigniter' },
    { label: 'Node.js', value: '/nodejs' }
  ];
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.handleScroll();
      }
    });
   }
  ngOnInit(): void {
    this.handleScroll();
  }
  isActive(route: string) {
    return this.router.isActive(route, true);
  }
  isNavLinkActive() {
    const slug = this.router.parseUrl(this.router.url).queryParamMap.get('slug');
    return (
      this.router.isActive('/web-development', true) ||
      this.router.isActive('/web-designing', true) ||
      (slug !== null && this.router.url.includes(slug))
    );
  }
  handleScroll() {
    if (this.router.url !== '/login' && this.router.url !== '/register' && !this.router.url.startsWith('/user/')) {
      const isScrolled = window.scrollY > 80;
      this.isScrolled = isScrolled;
    }
  }
  handleSearch() {
    this.router.navigate([this.searchValue]);
  }

  toggleUserDetail() {
    this.hideUserDetail = !this.hideUserDetail;
  }

  navigateToUserDetails() {
    // Implement navigation to user details
  }

  handleLogout() {
    // Implement logout logic
  }
  navigateToUserBlogs(){

  }
  navigateToUserIssues(){
    
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.router.navigate(['/register']);
  }
}
