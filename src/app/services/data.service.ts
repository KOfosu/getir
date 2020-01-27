import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ILoginDetails } from '../login/login-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // postLoginDetails(loginDetails: ILoginDetails): Observable<any> {
  //   return this.http.post('https://putsreq.com/67xyhjeHVErNp80y1pMp', loginDetails);
  // }
}
