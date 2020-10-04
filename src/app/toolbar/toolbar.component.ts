import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';



interface dataStructure {
  id: number;
  name: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  displayArray: Array<any> = [];
  currentIndex;
  currentId;
  currentInfo;
  @ViewChild('heart') heart: ElementRef;
  @ViewChild('filter') filter: ElementRef;
  @ViewChild('calendar') calendar: ElementRef;
  @ViewChild('share') share: ElementRef;
  icons: Array<string> = ['fa fa-heartbeat', 'fa fa-filter', 'fa fa-calendar-o', 'fa fa-share-alt']
  constructor() {
    for (let i = 1; i <= 23; i++) {
      let newObj: dataStructure = {
        id: i,
        name: 'debjeet' + i
      }
      this.displayArray.push(newObj);
    }
    this.currentIndex = 0;
    this.currentId = this.displayArray[0].id;
    this.currentInfo = this.displayArray[0].name;
  }

  move(advance = true) {
    this.currentIndex = (this.currentIndex + (advance ? 1 : -1) + this.displayArray.length) % this.displayArray.length;
    this.currentId = this.displayArray[this.currentIndex].id;
    this.currentInfo = this.displayArray[this.currentIndex].name;
  }

  ngOnInit() {
  }
  goBack() {
    this.move(false);
  }
  goForward() {
    this.move();
  }
  changeColor(s) {
    console.log('clicked');
    
    if (s == 'heart') { 
      if(this.heart.nativeElement.classList.contains('selected')){
        this.heart.nativeElement.classList.remove('selected');
        this.heart.nativeElement.classList.add('active');
      } else if(this.heart.nativeElement.classList.contains('active')){
        this.heart.nativeElement.classList.remove('active');
        this.heart.nativeElement.classList.add('toggle');
      } else if(this.heart.nativeElement.classList.contains('toggle')){
        this.heart.nativeElement.classList.remove('toggle');
        this.heart.nativeElement.classList.add('inActive');
      } else {
        this.heart.nativeElement.classList.remove('active');
        this.heart.nativeElement.classList.remove('inActive');
        this.heart.nativeElement.classList.add('selected');
  
      }
    }
    if (s == 'filter') { 
      if(this.filter.nativeElement.classList.contains('selected')){
        this.filter.nativeElement.classList.remove('selected');
        this.filter.nativeElement.classList.add('active');
      } else if(this.filter.nativeElement.classList.contains('active')){
        this.filter.nativeElement.classList.remove('active');
        this.filter.nativeElement.classList.add('toggle');
      } else if(this.filter.nativeElement.classList.contains('toggle')){
        this.filter.nativeElement.classList.remove('toggle');
        this.filter.nativeElement.classList.add('inActive');
      } else {
        this.filter.nativeElement.classList.remove('active');
        this.filter.nativeElement.classList.remove('inActive');
        this.filter.nativeElement.classList.add('selected');
  
      }
    }
    if (s == 'calendar') {
      if(this.calendar.nativeElement.classList.contains('selected')){
        this.calendar.nativeElement.classList.remove('selected');
        this.calendar.nativeElement.classList.add('active');
      } else if(this.calendar.nativeElement.classList.contains('active')){
        this.calendar.nativeElement.classList.remove('active');
        this.calendar.nativeElement.classList.add('toggle');
      } else if(this.calendar.nativeElement.classList.contains('toggle')){
        this.calendar.nativeElement.classList.remove('toggle');
        this.calendar.nativeElement.classList.add('inActive');
      } else {
        this.calendar.nativeElement.classList.remove('active');
        this.calendar.nativeElement.classList.remove('inActive');
        this.calendar.nativeElement.classList.add('selected');
  
      }
     }
    if (s == 'share') {
      if(this.share.nativeElement.classList.contains('selected')){
        this.share.nativeElement.classList.remove('selected');
        this.share.nativeElement.classList.add('active');
      } else if(this.share.nativeElement.classList.contains('active')){
        this.share.nativeElement.classList.remove('active');
        this.share.nativeElement.classList.add('toggle');
      } else if(this.share.nativeElement.classList.contains('toggle')){
        this.share.nativeElement.classList.remove('toggle');
        this.share.nativeElement.classList.add('inActive');
      } else {
        this.share.nativeElement.classList.remove('active');
        this.share.nativeElement.classList.remove('inActive');
        this.share.nativeElement.classList.add('selected');
  
      }
     }

  }
}
