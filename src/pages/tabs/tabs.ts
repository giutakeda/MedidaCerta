import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PesagemPage } from '../pesagem/pesagem';
import { MeusDadosPage } from '../meus-dados/meus-dados';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PesagemPage;
  tab3Root = MeusDadosPage;

  constructor() {

  }
}
