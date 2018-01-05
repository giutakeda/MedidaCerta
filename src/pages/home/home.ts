import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MuralProvider } from '../../providers/mural/mural';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    MuralProvider
  ]
})
export class HomePage {
  private listaMural;
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(public navCtrl: NavController, private mural: MuralProvider, private loadingCtrl: LoadingController) {

  }

  ionViewDidEnter() {
    this.getMural2();

  }

  public getMural2() {
    this.showLoader();
    this.mural.getMural().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.listaMural = objeto_retorno;
        // if (newpage){
        //   this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
        //   this.infiniteScroll.complete();
        // }else{
        //   this.lista_filmes = objeto_retorno.results;
        // }

        console.log(objeto_retorno);
        this.hideLoader();
        if (this.isRefreshing == true) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        console.log(error);
        this.hideLoader();
        if (this.isRefreshing == true) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    )
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.getMural2();
  }

  showLoader(){
    this.loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    this.loader.present();
  }

  hideLoader(){
    this.loader.dismiss();
  }
}


