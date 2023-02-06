import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMolDragDropStatus } from './IMolDragDropStatus';

@Injectable({
  providedIn: 'root'
})
export class MolDragdropService {

  public dragDropStatus$ = new BehaviorSubject<IMolDragDropStatus>({
    source: [],
    target: []
  });

  constructor() { }

  fireNext(molDragDropStatus: IMolDragDropStatus) {
    console.log('firing from within service', molDragDropStatus)
    this.dragDropStatus$.next(molDragDropStatus);

  }

}
