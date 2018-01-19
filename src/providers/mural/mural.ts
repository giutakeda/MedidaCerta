import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

/*
  Generated class for the MuralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class MuralProvider {
  //private keypass = "a0cf0cebfebc3a753c8a9cd8f72acf68";
  private keypass = "a0cf0cebfebc3a753c8a9cd8f72acf68";
  //private baseApiPath = "https://api.themoviedb.org/3";
  private baseApiPath = "https://yasetai.000webhostapp.com/";
  private baseApiPathPost = "https://yasetai.000webhostapp.com/mobile.php/";
  constructor(public http: Http) {
    console.log('Hello  Provider');
  }
  
  public getMural() {
    return this.http.get(this.baseApiPath + `getMural.php`);
  }

  public novaPostagem(codUsuario, mensagem){
    var data = {
      opt: 'novaPostagem',
      codUsuario: codUsuario,
      mensagem: mensagem
    };
    return this.http.post(this.baseApiPathPost, JSON.stringify(data));
  }
  
  public apagaMensagem(codBlog){
    var data={
      opt: 'apagaMensagem',
      codBlog: codBlog
    };
    return this.http.post(this.baseApiPathPost, JSON.stringify(data));
  }
}
