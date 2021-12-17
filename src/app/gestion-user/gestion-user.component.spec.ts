import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUSerComponent } from './gestion-user.component';

describe('GestionUSerComponent', () => {
  let component: GestionUSerComponent;
  let fixture: ComponentFixture<GestionUSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionUSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
