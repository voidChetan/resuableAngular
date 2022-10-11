import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() headerText : string = '';
  @Input() accordionColor : string = '';
  isAccordionOpen: boolean =  true;
  constructor() { }

  ngOnInit(): void {
  }

}
