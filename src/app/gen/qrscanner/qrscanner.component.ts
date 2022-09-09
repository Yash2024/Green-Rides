import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.css']
})
export class QrscannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() sendcode = new EventEmitter<string>();
  public output: string="";
 
  // @ViewChild('action', { static: true }) action: NgxScannerQrcodeComponent;
  // TODO something this.action
  addcode(){
    this.sendcode.emit(this.output);
  }

  scnbtn:boolean=true;
  remscanbtn(){
    this.scnbtn=!this.scnbtn;
  }
  
  public onError(e: any): void {
    alert(e);
  }
}
