import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-table-with-tabs',
  templateUrl: './table-with-tabs.component.html',
  styleUrls: ['./table-with-tabs.component.scss']
})
export class TableWithTabsComponent{
  @ViewChild('test', { static: true }) public test: ElementRef;
  @Input('tabsTitles') tabsTitles = [];
  @Input('tabContent') tabsContent;
  activeButton: string = '';
  public dataShows: object[];
  filterBy: string = "";

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['tabsContent']) {
      this.setTabsCounter();
    }
  }

  clickedSuperState(idButton: string) {
    console.log("clicked");
    this.filterBy = idButton.toUpperCase();
    this.filterData(this.filterBy);
  }

  private setTabsCounter() {
    this.tabsTitles.forEach(
      (data) => {
        data.counter = 0;
        this.tabsContent.forEach(element => {
          if (element.tabName.toUpperCase() === data.name.toUpperCase()) {
            data.counter = element.data.length;
          }
        });
      }
    );
    this.activateFirstTab();
  }

  private activateFirstTab() {
    if (!this.test) { return; }
    let element = this.test.nativeElement as HTMLElement;
    element.firstChild.dispatchEvent(new MouseEvent("click"));
  }

  private filterData(tabid: string) {
    this.dataShows = [];
    this.tabsContent.map(data => {
      if (data.tabName.toUpperCase() === tabid.toUpperCase()) this.dataShows = data.data
    })
  }

}
