import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent,TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.scss']
})
export class TabComponentComponent implements OnInit {
@ViewChild('staticTabs') staticTabs: TabsetComponent;
displayCharts: boolean = false;
dropdownList: any[] = ['volvo', 'audi', 'bmw', 'aston Martin'];
sampleId;
sampleValue;
tabs: any[] = [
  { title: 'Title 1', content: 'Title 1 selected', active: true },
  { title: 'Title 2', content: 'Title 2 selected' },
  { title: 'Title 3', content: 'Title 3 selected' }
];
  constructor() { }

  ngOnInit() {
  }
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
  onSelect(data: TabDirective): void {
    console.log(data)
    if(data['heading'] == 'Title 2'){
      this.displayCharts = true;
    } else this.displayCharts = false;
    
  }
  changeOptions(e){
    console.log(e)
    this.sampleValue =e;
    this.sampleId = this.dropdownList.indexOf(e);    
  }
}
