import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolAccordionComponent } from './mol-accordion.component';

describe('MolAccordionComponent', () => {
  let component: MolAccordionComponent;
  let fixture: ComponentFixture<MolAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MolAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
