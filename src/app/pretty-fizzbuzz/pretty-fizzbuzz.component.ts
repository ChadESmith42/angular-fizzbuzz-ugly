import { Component, OnInit, Input } from '@angular/core';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-pretty-fizzbuzz',
  templateUrl: './pretty-fizzbuzz.component.html',
  styleUrls: ['./pretty-fizzbuzz.component.css']
})
export class PrettyFizzbuzzComponent implements OnInit {

  @Input() answer;
  constructor() { }

  ngOnInit() {
  }

}