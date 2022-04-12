import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss']
})
export class SingleChoiceComponent implements OnInit {
  
  @Input() show = true;
  @Input() label = '';
  @Input() choices: string[] = [];
  @Input() control = new FormControl();
  @Input() size = '';

  constructor() { }

  ngOnInit(): void {
  }

}
