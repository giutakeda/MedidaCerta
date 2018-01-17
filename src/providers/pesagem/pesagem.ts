import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PesagemProvider {
  private baseApiPath = "https://yasetai.000webhostapp.com/mobile.php";
  private opt;
  private header;
  private data;
  constructor(public http: Http) {
    console.log('Hello PesagemProvider Provider');
  }

  public getPesagem(codUsuario) {
    this.data = {
      opt: 'getPesagem',
      codUsuario: codUsuario
    };
    //this.header = { "headers": {"Content-Type": "text/plain"} };
    //this.header = { "headers": {"Content-Type": "application/json"} };
    // return this.http.get('http://giust.guy.jp/MedidaCerta/getMural.php');
    //return this.http.post('http://giust.guy.jp/MedidaCerta/mobile.php', JSON.stringify(this.data));
    return this.http.post('https://yasetai.000webhostapp.com/mobile.php', JSON.stringify(this.data));
  }

  public gravaPesagem(codUsuario, data, peso, fat){
    this.data = {
      opt: 'gravaPesagem',
      codUsuario: codUsuario,
      data: data,
      peso: peso,
      fat: fat
    };
    return this.http.post(this.baseApiPath, JSON.stringify(this.data));

  }

  public apagaPesagem(codPesagem){
    this.data = {
      opt: 'apagaPesagem',
      codPesagem: codPesagem
    };
    return this.http.post(this.baseApiPath, JSON.stringify(this.data));
  }
}
