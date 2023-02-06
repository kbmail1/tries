import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IRoom } from './IRoom';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  providers: [DatePipe],
})
export class RoomComponent implements OnInit {

  @Input() room: IRoom = {} as IRoom;

  // ??
  message: string = '';

  comments = [
    {
      comment: 'comment1 in context defined in room.component.ts',
      user_name: 'kundan',
      comment_time: '1/1/1999',
      self: true,
    },
    {
      comment: 'comment2 in context defined in room.component.ts',
      user_name: 'kundan',
      comment_time: '2/2/1992',
      self: false,
    }
  ]

  constructor(
    private datePipe: DatePipe,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log('in this.roomComponent - ngAfterViewInit');
  }

  addComment(elemRef: HTMLInputElement) {
    const date = new Date()

    this.comments.push({
      comment: elemRef.value,
      user_name: 'kundan',
      comment_time: String(this.datePipe.transform(date, 'dd/MM/yyyy')),
      self: true,
    })
    elemRef.value = '';
  }
}
