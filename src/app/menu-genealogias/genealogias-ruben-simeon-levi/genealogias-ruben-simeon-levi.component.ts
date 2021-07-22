import {Component, ElementRef, OnInit} from '@angular/core';
import {TreeBuilderService} from "../../tree-builder.service";

@Component({
  selector: 'app-genealogias-ruben-simeon-levi',
  templateUrl: './genealogias-ruben-simeon-levi.component.html',
  styleUrls: ['./genealogias-ruben-simeon-levi.component.css']
})
export class GenealogiasRubenSimeonLeviComponent implements OnInit {

  constructor(private el: ElementRef, private treeBuilderService:TreeBuilderService) { }

  ngOnInit(): void {
    this.treeBuilderService.appendBase('Israel',this.el);
    this.treeBuilderService.appendChildren('Israel',['Ruben','Simeón','Levi']);

    this.treeBuilderService.appendChildren('Ruben',['Hanoc','Falú','Hezrón','Carmi']);

    this.treeBuilderService.appendChildren('Simeón',['Jemuel','Jamín','Ohad','Jaquín','Zohar','Saul']);

    this.treeBuilderService.appendChildren('Levi',['Gerson','Coat','Merari']);
    this.treeBuilderService.appendChildren('Gerson',['Libni','Simei']);
    this.treeBuilderService.appendChildren('Coat',['Amram','Izhar','Hebrón ','Uziel']);
    this.treeBuilderService.appendChildren('Merari',['Mahli ','Musi']);

    this.treeBuilderService.appendChildren('Amram',['Aaron','Moisés']);
    this.treeBuilderService.appendChildren('Izhar',['Core','Nefeg ','Zicri']);
    this.treeBuilderService.appendChildren('Uziel',['Misael  ','Elzafán ','Sitri']);

    this.treeBuilderService.appendChildren('Aaron',['Nadab','Abiú','Eleazar','Itamar']);
    this.treeBuilderService.appendChildren('Core',['Asir','Elcana','Abiasaf']);

    this.treeBuilderService.appendChildren('Eleazar',['Finees']);


  }

}
