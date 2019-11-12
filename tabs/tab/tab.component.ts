import {Component, ContentChild, ContentChildren, EventEmitter, OnInit, Output} from '@angular/core';
import {TabContentComponent} from "../tab-content/tab-content.component";
import {TabTitleComponent} from "../tab-title/tab-title.component";

@Component({
  selector: 'tab',
  template: '<ng-content></ng-content>',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @ContentChild(TabContentComponent, {static: false}) content: TabContentComponent;
  @ContentChild(TabTitleComponent, {static: false}) title: TabTitleComponent;

  constructor() {
  }

  ngOnInit() {
  }
}
