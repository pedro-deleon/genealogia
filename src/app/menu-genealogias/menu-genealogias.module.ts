import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MenuGenealogiasComponent} from "./menu-genealogias.component";
import { GenealogiasRubenSimeonLeviComponent } from './genealogias-ruben-simeon-levi/genealogias-ruben-simeon-levi.component';



@NgModule({
  declarations: [
    MenuGenealogiasComponent,
    GenealogiasRubenSimeonLeviComponent
  ],
  exports: [
    MenuGenealogiasComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule

  ]
})
export class MenuGenealogiasModule { }
