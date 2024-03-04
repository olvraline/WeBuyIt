import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentDto } from './DTO/payment.dto';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public login(userData: any): Observable<any> {
    const route = 'https://localhost:7191/user/login';
    return this.http.post(route, userData, {
      
    });

  }

  public getByIdUser(id: string):Observable<any> {
    const route: string = `https://localhost:7191/user/${id}`;
    return this.http.get(route, {
      
    });
  }

  public update(userData: any):Observable<any> {
    const route:string = 'https://localhost:7191/user';
    return this.http.put(route, userData, {
      
    });
  }

  public post(userData: any):Observable<any> {
    const route: string = 'https://localhost:7191/anuncio';
    return this.http.post(route, userData, {
      headers: {
        
      }
    });
  }
  public postcadastrousuario(userData: any):Observable<any> {
    const route: string = 'https://localhost:7191/user'
    ;
    return this.http.post(route, userData, {
    });
    
  }
    public postcadastroloja(userData: any):Observable<any> {
      const route: string = 'https://localhost:7191/store';
      return this.http.post(route, userData, {
      });
  }
  
  public postcadastrocartao(userData: PaymentDto):Observable<any> {
    const route: string = 'https://localhost:7191/payment';
    return this.http.post(route, userData, {
    });
    
  }

}

