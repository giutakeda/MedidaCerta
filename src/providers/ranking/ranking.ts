import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RankingProvider {
  private baseApiPathPost = "https://yasetai.000webhostapp.com/mobile.php/";
  //public baseApiPathPost = "http://giust.guy.jp/MedidaCerta/mobile.php/";
  constructor(public http: Http) {
    console.log('Hello RankingProvider Provider');
  }

  public getRanking(){
    var data = {
      opt: 'ranking'
    };

    return this.http.post(this.baseApiPathPost, JSON.stringify(data));
  }

}
