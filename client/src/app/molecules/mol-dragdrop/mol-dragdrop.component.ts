import { MolDragdropService } from '@app/molecules/mol-dragdrop/mol-dragdrop.service';
import { FormControl } from '@angular/forms';
import { IMolDragDropContext } from './IMolDragDropContext';
import { IMolDragDropStatus } from './IMolDragDropStatus';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mol-dragdrop',
  templateUrl: './mol-dragdrop.component.html',
  styleUrls: ['./mol-dragdrop.component.scss'],
})
export class MolDragdropComponent implements OnInit {

  @Input() context: IMolDragDropContext = {} as IMolDragDropContext;

  public dragDropStatus$ = new BehaviorSubject<IMolDragDropStatus>({
    source: this.context.source,
    target: this.context.target,
  });

  constructor() {
    // place holder.
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    console.log(`new source: ${this.context.source}`)
    console.log(`new target: ${this.context.target}`)
    this.fireNext()
  }

  fireNext() {
    console.log('firing from within component', this.dragDropStatus$)
    this.dragDropStatus$.next({
      source: this.context.source,
      target: this.context.target,
    });
  }
}
