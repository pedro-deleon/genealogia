import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenealogiasRubenSimeonLeviComponent } from './genealogias-ruben-simeon-levi.component';

describe('GenealogiasRubenSimeonLeviComponent', () => {
  let component: GenealogiasRubenSimeonLeviComponent;
  let fixture: ComponentFixture<GenealogiasRubenSimeonLeviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenealogiasRubenSimeonLeviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenealogiasRubenSimeonLeviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
