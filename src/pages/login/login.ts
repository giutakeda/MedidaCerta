import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { PerfilProvider } from '../../providers/perfil/perfil';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    LoginProvider
  ]
})
export class LoginPage {
  public usuario = "Giu";
  public senha = "giu22lud";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public perfilProvider: PerfilProvider,
    public loginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {

    this.perfilProvider.setConfig(false);
    
    this.loginProvider.login(this.usuario, this.senha).subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
        if (objeto_retorno.ret == true){
          this.perfilProvider.setConfig(objeto_retorno.ret, objeto_retorno.codUsuario, objeto_retorno.nome);
          this.navCtrl.push(TabsPage);
        }
      },
      error=>{
        console.log(error);
      }
    );
  }

}
