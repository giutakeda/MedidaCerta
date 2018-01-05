// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginProvider {
  private baseApiPath = "http://giust.guy.jp/MedidaCerta/mobile.php";
  private data;
  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  public login(usuario, senha){
    this.data = {
      opt: 'login',
      usuario: usuario,
      senha: senha
    }
    return this.http.post(this.baseApiPath, JSON.stringify(this.data));
  }

  public checkLogged(){
    return 1;
  }
}
