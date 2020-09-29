import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseProfilComponent } from './adresse-profil.component';

describe('AdresseProfilComponent', () => {
  let component: AdresseProfilComponent;
  let fixture: ComponentFixture<AdresseProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdresseProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
