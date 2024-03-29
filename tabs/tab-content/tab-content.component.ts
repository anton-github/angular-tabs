import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'tab-content',
  template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class TabContentComponent implements OnInit {
  @ViewChild(TemplateRef, {static: false}) public template: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }
}
