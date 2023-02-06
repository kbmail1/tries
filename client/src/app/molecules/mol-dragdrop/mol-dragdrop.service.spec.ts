import { TestBed } from '@angular/core/testing';

import { MolDragdropService } from './mol-dragdrop.service';

describe('MolDragdropService', () => {
  let service: MolDragdropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MolDragdropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
