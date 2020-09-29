import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyenPaiementComponent } from './moyen-paiement.component';

describe('MoyenPaiementComponent', () => {
  let component: MoyenPaiementComponent;
  let fixture: ComponentFixture<MoyenPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoyenPaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyenPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
