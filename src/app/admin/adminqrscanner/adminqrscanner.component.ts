import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adminqrscanner',
  templateUrl: './adminqrscanner.component.html',
  styleUrls: ['./adminqrscanner.component.css']
})
export class AdminqrscannerComponent implements OnInit {

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
