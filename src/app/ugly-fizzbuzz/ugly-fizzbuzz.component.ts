import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ugly-fizzbuzz',
  templateUrl: './ugly-fizzbuzz.component.html',
  styleUrls: ['./ugly-fizzbuzz.component.css']
})
export class UglyFizzbuzzComponent implements OnInit {
  @Input() answer;
  constructor() { }

  ngOnInit() {
  }

}