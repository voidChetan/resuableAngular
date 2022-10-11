import { HttpClientModule } from '@angular/common/http';
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[autoTextLength]'
})
export class AutoTextLengthDirective implements OnInit {
  minRows: number = 2;
  maxRows: number = 6;
  private input: HTMLTextAreaElement;
  private AvgLineHeight: number = 20;
  constructor(private elementRef:ElementRef) {
    this.input = this.elementRef.nativeElement;
    this.input.rows = this.minRows;
   }
   ngOnInit() {
    this.calculateRowHeight();
   }
   @HostListener("input")
   onInput(event: any) : void {
    this.calculateRowHeight();
   }
   calculateRowHeight() {
    let inputStyleHeight = this.input.style;
    debugger;
    if(inputStyleHeight) {
      inputStyleHeight['height'] = "auto";
      let textAreaHeight = this.input.scrollHeight;
      inputStyleHeight['height'] = textAreaHeight + "px";
      let rowCount = Math.floor(textAreaHeight/this.AvgLineHeight);
      console.log('rowCount'+ rowCount);
      console.log('maxRows'+ this.maxRows);
      if (rowCount <=  this.maxRows) {
        inputStyleHeight['height'] = (textAreaHeight + "px");
        inputStyleHeight.setProperty('overflow-y','hidden');
      } else {
        inputStyleHeight['height'] = (this.maxRows * this.AvgLineHeight )+ "px";
        inputStyleHeight.setProperty('overflow-y','auto');
      }
    }
   }

}
