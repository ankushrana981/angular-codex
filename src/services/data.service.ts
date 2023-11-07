// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private createHeaders(): HttpHeaders {
    return new HttpHeaders().set('X-API-KEY', environment.apiKey);
  }

  getIssue(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get(`${environment.apiUrl}/getIssue`, { headers });
  }
  getIssueView(slug:string): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get(`${environment.apiUrl}/getIssue/${slug}`, { headers });
  }

  getBlogs(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get(`${environment.apiUrl}/getBlogs`, { headers });
  }
  getBlogView(slug:string): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get(`${environment.apiUrl}/getBlogs/${slug}`, { headers });
  }

  getAllSkills(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get(`${environment.apiUrl}/getAllSkill`, { headers });
  }
  getAllSkillChapter(slug:any): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get(`${environment.apiUrl}/getSkillChapter/${slug}`, { headers });
  }
  getAllSkillChapterData(slug1:any, slug2:any): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get(`${environment.apiUrl}/getSkillChapter/${slug1}/${slug2}`, { headers });
  }
  getMetaTags(id:any): Observable<any> {
    const headers = this.createHeaders();;
    return this.http.get(`${environment.apiUrl}/getmetatags/${id}`, { headers });
  }
}