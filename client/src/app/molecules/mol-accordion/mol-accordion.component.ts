import { Component, Input, OnInit } from '@angular/core';
import { IMolAccordionContext } from './IMolAccordionContext';
import { IRoom } from '../../room/IRoom';


@Component({
  selector: 'app-mol-accordion',
  templateUrl: './mol-accordion.component.html',
  styleUrls: ['./mol-accordion.component.scss']
})
export class MolAccordionComponent implements OnInit {

  constructor() { }

  @Input() context: IMolAccordionContext = { expanded_index: 0, titles: [], multi_open: false}

  titles = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expanded_index = 0;

  ngOnInit(): void {
  }

}
