import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolCommentComponent } from './mol-comment.component';

describe('MolCommentComponent', () => {
  let component: MolCommentComponent;
  let fixture: ComponentFixture<MolCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MolCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
