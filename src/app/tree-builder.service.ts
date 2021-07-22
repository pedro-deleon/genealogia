import {ElementRef, Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeBuilderService {

  private renderer: Renderer2;

  divRoot: any;
  a: any;
  ul: any;
  li: any;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.divRoot = this.renderer.createElement('div');
    this.a = this.renderer.createElement('a');
    this.ul = this.renderer.createElement('ul');
    this.li = this.renderer.createElement('li');
  }


  appendBase(padreRoot: string, el: ElementRef) {
    this.divRoot.className = 'tree';
    let text = this.renderer.createText(padreRoot);

    this.renderer.appendChild(this.divRoot, this.ul);
    this.renderer.appendChild(this.ul, this.li);
    this.renderer.appendChild(this.li, this.a);
    this.renderer.appendChild(this.a, text);
    this.renderer.appendChild(el.nativeElement, this.divRoot);

    this.a.setAttribute('id'
      ,text.toString().toLowerCase());
  }


  appendChildren(father: string, children: string[], numberNameFather?: number) {
    this.cleanTags();
    children.forEach(child =>{
      this.renderer.appendChild(this.ul,this.li);
      this.renderer.appendChild(this.li, this.a);
      let text = this.renderer.createText(child);
      this.renderer.appendChild(this.a,text);


      this.li = null;
      this.a = null;
      this.li = this.renderer.createElement('li');
      this.a = this.renderer.createElement('a');
    });

    let tags = this.divRoot.getElementsByTagName('a');
    let tagFather;
    for(let tag of tags){
      if(tag.innerText.toLowerCase() == father.toLowerCase()){
        tagFather = tag;
        break;
      }
    }

    let parentNode = this.renderer.parentNode(tagFather);
    this.renderer.appendChild(parentNode,this.ul);
    this.cleanTags();
  }

  private cleanTags(){
    this.ul = null;
    this.li = null;
    this.a = null;
    this.a = this.renderer.createElement('a');
    this.ul = this.renderer.createElement('ul');
    this.li = this.renderer.createElement('li');
  }
}
