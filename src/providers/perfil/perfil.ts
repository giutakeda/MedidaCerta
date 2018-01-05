import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let config_key = "config";

@Injectable()
export class PerfilProvider {
  public perfil = {CodUsuario: 1}
  private config = {
    logado: false,
    codUsuario: 0,
    nome: null
  }
  constructor(public http: Http) {
    console.log('Hello PerfilProvider Provider');
  }

  public getPerfilByCod(){
    return 1;  
  }

  public setConfig(logado?: boolean, codUsuario?, nome?){
    let config = {
      logado: false,
      codUsuario: 0,
      nome: null
    }

    if(logado){
      config.logado = logado;
    }
    if(codUsuario){
      config.codUsuario = codUsuario;
    }
    if(nome){
      config.nome = nome;
    }
    
    localStorage.setItem(config_key, JSON.stringify(config));

  }

  public getConfig(): any{
    return localStorage.getItem(config_key);
  }

}
