import { Component, AfterViewInit, ViewChild, Input, ElementRef } from '@angular/core';

declare var kendo: any;

@Component({
  selector: 'app-combo-wrapper',
  templateUrl: './combo-wrapper.component.html',
  styleUrls: ['./combo-wrapper.component.css']
})
export class ComboWrapperComponent implements AfterViewInit  {
  @Input()
  options: any;
  @ViewChild('selectElement')
  selectElement: ElementRef<HTMLSelectElement>;
  @Input()
  disabled: boolean;
  @Input()
  id: string;
  @Input()
  required: boolean;
  @Input()
  dataRequiredMsg: string;
  @Input()
  className: string;


  constructor() { }

  ngAfterViewInit() {
    kendo.jQuery(this.selectElement.nativeElement).kendoComboBox(this.options);
  }
}
