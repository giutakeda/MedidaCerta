import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilProvider } from '../../providers/perfil/perfil';

/**
 * Generated class for the MeusDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meus-dados',
  templateUrl: 'meus-dados.html',
  providers: [
    PerfilProvider
  ]
})
export class MeusDadosPage {
  public codUsuario;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public perfilProvider: PerfilProvider) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad MeusDadosPage');
    const config = JSON.parse(this.perfilProvider.getConfig());
    this.codUsuario = config.codUsuario;
  }



}
