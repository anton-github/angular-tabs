import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
    selector: 'tab-title',
    template: '<ng-template><ng-content></ng-content></ng-template>',
    styleUrls: ['./tab-title.component.scss']
})
export class TabTitleComponent implements OnInit {
    @ViewChild(TemplateRef, {static: false}) public template: TemplateRef<any>;

    constructor() {
    }

    ngOnInit() {
    }
}
