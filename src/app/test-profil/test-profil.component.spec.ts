import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProfilComponent } from './test-profil.component';

describe('TestProfilComponent', () => {
  let component: TestProfilComponent;
  let fixture: ComponentFixture<TestProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
