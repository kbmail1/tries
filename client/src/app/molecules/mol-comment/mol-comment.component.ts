import { IMolCommentContext } from './IMolCommentContext';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mol-comment',
  templateUrl: './mol-comment.component.html',
  styleUrls: ['./mol-comment.component.scss']
})
export class MolCommentComponent implements OnInit {

  @Input() molCommentContext: IMolCommentContext = {} as IMolCommentContext;

  /*
  molCommentContext: IMolCommentContext = {
    comment: 'This is Tanay.  I don\'t call dad much as he has nothing to talk about',
    user_name: 'kundan',
    comment_time: '2/27/2024',
    self: true,
  }
  */


  constructor() { }

  ngOnInit(): void {
  }

}
