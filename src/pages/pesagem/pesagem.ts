import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PesagemProvider } from '../../providers/pesagem/pesagem';
import { PerfilProvider } from '../../providers/perfil/perfil';

/**
 * Generated class for the PesagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesagem',
  templateUrl: 'pesagem.html',
})
export class PesagemPage {
  public pesagemArr;
  public dataDefault = new Date().toISOString();
  public pesoDefault = 60;
  public gorduraDefault = 25;
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pesagemProvider: PesagemProvider,
    public loadingCtrl: LoadingController,
    public perfilProvider: PerfilProvider) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesagemPage');
  }

  ionViewDidEnter() {
    this.getPesagem();
  }

  public getPesagem() {
    this.showLoader();
    var config = JSON.parse(this.perfilProvider.getConfig());
    console.log(config.codUsuario);
    this.pesagemProvider.getPesagem(config.codUsuario).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.pesagemArr = objeto_retorno;
        // if (newpage){
        //   this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
        //   this.infiniteScroll.complete();
        // }else{
        //   this.lista_filmes = objeto_retorno.results;
        // }
        this.pesoDefault = objeto_retorno[0]['Peso'];
        this.gorduraDefault = objeto_retorno[0]['Fat'];
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

  public gravarPesagem() {
    var config = JSON.parse(this.perfilProvider.getConfig());
    this.pesagemProvider.gravaPesagem(config.codUsuario, this.dataDefault, this.pesoDefault, this.gorduraDefault).subscribe(
      data => {
        const  response = (data as any);
        this.getPesagem();
        console.log(response);
      }, error => {
        console.log(error);
      }
    );
  }

  public apagaPesagem(codPesagem){ 
    var config = JSON.parse(this.perfilProvider.getConfig());
    this.pesagemProvider.apagaPesagem(codPesagem).subscribe(
      data=>{
        const response = (data as any);
        this.getPesagem();
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );
  }
  

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.getPesagem();
  }

  showLoader() {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    this.loader.present();
  }

  hideLoader() {
    this.loader.dismiss();
  }

}
