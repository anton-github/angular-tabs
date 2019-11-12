import {AfterContentInit, AfterViewInit, Component, ContentChildren, QueryList, ViewChildren} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
    activeTab: TabComponent = null;

    constructor() {
        this.onTabsChanged = this.onTabsChanged.bind(this);
    }

    ngAfterContentInit() {
        this.initTabs();
    }

    private setInitialTab() {
        if (this.tabs.first) {
            this.activeTab = this.tabs.first;
        }
    }

    private setTabOnRemoveActive() {
        if (this.tabs.first) {
            this.activeTab = this.tabs.first;
        } else {
            this.activeTab = null;
        }
    }

    private initTabs() {
        this.setInitialTab();
        this.tabs.changes.subscribe(this.onTabsChanged)
    }

    private onTabsChanged() {
        if (this.activeTab) {
            if (this.tabs.find((tab => tab === this.activeTab)) === undefined) {
                this.setTabOnRemoveActive();
            }
        } else {
            this.setInitialTab();
        }
    }

    activateTab(tab) {
        this.activeTab = tab;
    }
}
