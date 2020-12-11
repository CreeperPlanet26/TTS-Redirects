import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user.type';

const { httpEndpoints: Endpoints } = environment;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public async getMe(): Promise<User> {
    // return await this._http.get<User>(Endpoints.ME, { withCredentials: true }).toPromise();
    // const user = await axios.get<User>(Endpoints.ME, { withCredentials: true });
    return (await fetch(Endpoints.ME, { method: 'GET', credentials: 'include' }) as unknown as Promise<User>);
  }


}
