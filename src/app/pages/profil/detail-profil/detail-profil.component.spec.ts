import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfilComponent } from './detail-profil.component';

describe('DetailProfilComponent', () => {
  let component: DetailProfilComponent;
  let fixture: ComponentFixture<DetailProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
