import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MuralProvider } from '../../providers/mural/mural';
import { PerfilProvider } from '../../providers/perfil/perfil';

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
  public data;
  public postagem;
  constructor(
    public navCtrl: NavController,
    private mural: MuralProvider,
    private loadingCtrl: LoadingController,
    private perfilProvider: PerfilProvider
  ) {

  }

  ionViewDidEnter() {
    this.getMural2();

  }

  public postarMensagem() {
    let config = this.perfilProvider.getConfig();
    let config2 = JSON.parse(config);
    this.mural.novaPostagem(config2.codUsuario, this.postagem).subscribe(
      data=>{
        const response = (data as any);
        console.log(response);
        this.getMural2();
        this.postagem = "";
    }, error=>{
      console.log(error);
    });
  }

  public apagaMensagem(codMensagem){
      var config = JSON.parse(this.perfilProvider.getConfig());
      this.mural.apagaMensagem(codMensagem).subscribe(
        data=>{
          const response = (data as any);
          this.getMural2();
          console.log(response);
        },
        error=>{
          console.log(error);
        }
      );
    }

  public getMural2() {
    this.showLoader();
    this.mural.getMural().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.listaMural = objeto_retorno;
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


