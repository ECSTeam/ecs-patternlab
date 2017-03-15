import { Component, OnInit } from '@angular/core';
var test = require('../../ei.js');

@Component({
  selector: 'pattern-lab',
  templateUrl: './patternlab.component.html',
  styleUrls: ['./patternlab.component.css']
})
export class PatternLabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    test();
  }

}
