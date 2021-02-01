import { UserService } from '../user/user.service';
import { TokenService } from '../token/token.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private http: HttpClient,
    private tokenService:TokenService,
    private userService:UserService
    ) { }

  authenticate(userName: string, password: string) {

    console.log(userName, password);
    return this.http.post(API_URL + '/user/login',
      { userName, password },
      // acessar todos os dados da resposta
      { observe: 'response' }
    )
    // antes de se inscrevar quero capturar o token 
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        // window.localStorage.setItem('authToken', authToken);
        // this.tokenService.setToken(authToken);
        // classe que vai delegar para o tokenService setar o token e também vai emitir o token decodificado para quem se inscrever
        this.userService.setToken(authToken);
        console.log(`User ${userName} authenticated with token ${authToken}`)
      }));
  }
}
