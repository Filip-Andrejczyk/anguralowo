import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-liczenie',
  templateUrl: './liczenie.component.html',
  styleUrls: ['./liczenie.component.scss'],
})
export class LiczenieComponent implements OnInit {
  public parentCount: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
