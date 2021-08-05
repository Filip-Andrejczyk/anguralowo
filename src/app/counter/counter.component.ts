import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent implements OnInit {
  @Input()
  count: number = 0;

  @Output() 
  countChange = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(){
    this.countChange.emit(++this.count);
  }

}
