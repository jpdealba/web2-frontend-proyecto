
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // API url

  baseApiUrl =  `${environment.apiUrl}/api/users/image`

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  // Returns an observable
  upload(file: any):Observable<any> {

      // Create form data
      const formData = new FormData();
      const user = this.authService.getUser()
      // Store form name as "file" with file data
      formData.append("file", file, user._id + ".png");

      // Make http post request over api
      // with formData as req
      return this.http.post(this.baseApiUrl, formData)
  }
}
