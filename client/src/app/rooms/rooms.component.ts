import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IRoom } from '@app/room/IRoom';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  newRoomInputHide: boolean
  // Use Rest API to get all rooms (its not @Input)
  rooms: IRoom[] = [
    { creator_name: 'Neeta', room_name: 'Room 1' },
    { creator_name: 'Kundan', room_name: 'Room 2' },
    { creator_name: 'John', room_name: 'Room 2' },
    { creator_name: 'Tanay', room_name: 'Room 1' },
    { creator_name: 'Kavin', room_name: 'Room 5' },
  ]

  @ViewChild('newRoomName') newRoomName: ElementRef = new ElementRef('')

  roomSelectedIndex: number = 0;
  roomSelected: IRoom = {} as IRoom;

  constructor() {
    this.newRoomInputHide = true;
    this.roomSelected = this.rooms[this.roomSelectedIndex];
  }

  ngOnInit(): void {
  }

  createRoomForm = new FormGroup({
    room_name: new FormControl(''),
  });

  onSubmit() {
    console.log('onSubmit - start creating new room')
    this.newRoomInputHide = false;
  }

  createRoom() {
    console.log('ReST API call to create new room')
    // if success
    // - add room to array and hide 'input and icon'
    // - show new room in list
    // - select new room

    this.newRoomInputHide = true;
    this.rooms.push(
      { creator_name: 'Self', room_name: this.newRoomName.nativeElement.value }
    )
  }

  onRoomClick(index: number) {
    console.log('onRoomClick - open Room #', index)
    this.roomSelectedIndex = index;
    this.roomSelected = {
      creator_name: this.rooms[index].creator_name,
      room_name: this.rooms[index].room_name
    }
  }
}
