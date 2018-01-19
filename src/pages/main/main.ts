import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeusDadosPage } from '../meus-dados/meus-dados';
import { PesagemPage } from '../pesagem/pesagem';
import { HomePage } from '../home/home';
import { RankingPage } from '../ranking/ranking';
import { GraficosPage } from '../graficos/graficos';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  public meusDadosPage = MeusDadosPage;
  public homePage = HomePage;
  public pesagemPage = PesagemPage;
  public rankingPage = RankingPage;
  public graficosPage = GraficosPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  public openPage(pagina){
    this.navCtrl.push(pagina);
  }

}
