import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PerfilProvider } from '../providers/perfil/perfil';

@Component({
  templateUrl: 'app.html',
  providers:[
    PerfilProvider
  ]
})
export class MyApp {

  rootPage:any = LoginPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    perfilProvider: PerfilProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = perfilProvider.getConfig();
      console.log('aaaaa -> ' + config);
      if (config == null){
        this.rootPage = LoginPage;
      }else{
        config = JSON.parse(config);
        if(config.logado == true){
          this.rootPage = TabsPage;
        }else{
          this.rootPage = LoginPage;
        }
      }


      console.log(config);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
