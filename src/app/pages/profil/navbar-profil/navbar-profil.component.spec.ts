import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProfilComponent } from './navbar-profil.component';

describe('NavbarProfilComponent', () => {
  let component: NavbarProfilComponent;
  let fixture: ComponentFixture<NavbarProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
