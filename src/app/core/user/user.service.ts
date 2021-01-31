import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private userSubject = new Subject<User>();
  // com um behavior eu posso fazer o mesmo que o subject(emitir e me inscrever na minha emissão) 
  // porem inicio já passando um valor nesse caso null; quando emito o valor, e ninguem se pega fico aguardando até que alguem pegue o valor
  // diferente do subject que emite e se vc nao pegou não pega mais. 
  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {
    // caso o user feche o navegador ele não vai passar pelo processo de login,
    // logo o decodeAndNotify não será executado

    // this.tokenService.hasToken() && this.decodeAndNotify(); equivale ao de baixo
    if (this.tokenService.hasToken()) {
      this.decodeAndNotify();
    }

  }


  setToken(token: string) {
    console.log('setToken');
    // seta no localStorage
    this.tokenService.setToken(token);
    // se setou com sucesso decodifica e emite para quem se inscreveu
    this.decodeAndNotify();
  }

  decodeAndNotify() {
    console.log('decodeAndNotify');
    // garante que pegou token
    const token = this.tokenService.getToken();
    // decodifica o token
    const user = jwt_decode(token) as User;
    // emit
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

}
