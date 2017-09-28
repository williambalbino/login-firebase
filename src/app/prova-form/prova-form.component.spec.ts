import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaFormComponent } from './prova-form.component';

describe('provaFormComponent', () => {
  let component: ProvaFormComponent;
  let fixture: ComponentFixture<ProvaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
