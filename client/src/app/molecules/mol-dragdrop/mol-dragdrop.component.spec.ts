import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolDragdropComponent } from './mol-dragdrop.component';

describe('MolDragdropComponent', () => {
  let component: MolDragdropComponent;
  let fixture: ComponentFixture<MolDragdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolDragdropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MolDragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
