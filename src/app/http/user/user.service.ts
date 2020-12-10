import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.type';

const { httpEndpoints: Endpoints } = environment;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public async getMe(): Promise<User> {
    //@ts-ignore
    return this._http.get<User>(Endpoints.ME, { withCredentials: true, observe: 'response' }).toPromise();
  }


}
