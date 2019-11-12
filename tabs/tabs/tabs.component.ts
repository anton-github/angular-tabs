import {AfterViewInit, Component, ContentChild, ContentChildren, OnInit, QueryList, ViewChildren} from '@angular/core';
import {TabComponent} from "../tab/tab.component";
import {TabTitleComponent} from "../tab-title/tab-title.component";
import {TabContentComponent} from "../tab-content/tab-content.component";

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterViewInit {

    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
    activeTab: TabComponent = null;

    constructor() {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.tabs.first) {
                this.activeTab = this.tabs.first
            }
        })
    }

    activateTab(tab) {
        this.activeTab = tab;
    }
}
