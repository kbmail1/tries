import { MolDragdropComponent } from './../molecules/mol-dragdrop/mol-dragdrop.component';
import { IMolDragDropStatus } from './../molecules/mol-dragdrop/IMolDragDropStatus';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IMolDragDropContext } from '../molecules/mol-dragdrop/IMolDragDropContext';
import { MolDragdropService } from '@app/molecules/mol-dragdrop/mol-dragdrop.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
})
export class InviteComponent implements OnInit, AfterViewInit {

  /**
   * Assuming Single dragdrop child for now.
   * Later multiple with its own behavior subject.
   */


  initialSource = ['Neeta', 'Kundan', 'Kavin', 'Tanay']
  initialTarget = ['John', 'Paul', 'Ringo', 'George']

  status: IMolDragDropStatus = {
    source: this.initialSource,
    target: this.initialTarget,
  }

  context: IMolDragDropContext = {
    sourceHeader: 'Active users',
    targetHeader: 'Users to add to room',
    source: this.initialSource,
    target: this.initialTarget,
  }

  @ViewChild('dragDropChild') dragDropChild: MolDragdropComponent | undefined;

  constructor() { }

  ngOnInit(): void {
    //
  }

  ngAfterViewInit(): void {
    if (this.dragDropChild) {
      this.dragDropChild.dragDropStatus$.subscribe((status) => {
        console.log("in InviteComponent: status: ", status)
      })
    }
  }
}
