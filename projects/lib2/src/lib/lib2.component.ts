import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib2-lib2',
  template: `
    <p>
      lib2 works!
    </p>
    <lib1-lib1></lib1-lib1>
  `,
  styles: []
})
export class Lib2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
