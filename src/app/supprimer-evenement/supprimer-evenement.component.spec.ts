import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerEvenementComponent } from './supprimer-evenement.component';

describe('SupprimerEvenementComponent', () => {
  let component: SupprimerEvenementComponent;
  let fixture: ComponentFixture<SupprimerEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
