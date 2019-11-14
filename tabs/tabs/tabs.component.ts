import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html'
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

    private initTabs() {
        this.setInitialTab();
        this.tabs.changes.subscribe(this.onTabsChanged)
    }

    private setInitialTab() {
        if (this.tabs.first) {
            this.activeTab = this.tabs.first;
        }
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

    private setTabOnRemoveActive() {
        if (this.tabs.first) {
            this.activeTab = this.tabs.first;
        } else {
            this.activeTab = null;
        }
    }

    activateTab(tab) {
        this.activeTab = tab;
    }
}
