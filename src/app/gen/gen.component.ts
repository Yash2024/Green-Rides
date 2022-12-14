import { Component, OnInit } from '@angular/core';
import { CrsServiceService } from '../services/crs-service.service';
import { user } from '../user.model';
import { cycle } from '../cycle.model';

@Component({
  selector: 'app-gen',
  templateUrl: './gen.component.html',
  styleUrls: ['./gen.component.css']
})
export class GenComponent implements OnInit {

  constructor(private service: CrsServiceService) { }

  ngOnInit(): void {
  }

  scn: boolean = false;
  name:string|null = localStorage.getItem("name");
  rollno: string |null = localStorage.getItem("rollno");
  branch: string | null = localStorage.getItem("branch");
  emailid: string  | null = localStorage.getItem("email");
  cycleqr: string |null = localStorage.getItem("cycleid");
  cyldtl: cycle[]=[];
  usr: user= {_id:localStorage.getItem("_id"),email:this.emailid,name:this.name,rollno: this.rollno,branch:this.branch,password:"",cycleid:this.cycleqr,role: ""}
  togglescn(){
    this.scn=!this.scn;
  }
  cyl:cycle={_id:"",cycleid:"",status:"",stdid:""};


  addqr(item: string)
  {
      this.service.details(item).subscribe((res)=>{
        this.cyl=res as cycle;
        if(this.cyl.status=="")
        {
          this.cycleqr=item;
          this.usr.cycleid = item;

          this.service.update(this.usr as user).subscribe((res)=>{
            this.scn=false;
            alert ("cycle rented");
            
          });
          this.cyl.status="rented";
          this.cyl.stdid=this.usr._id;
          this.service.submitcycle(this.cyl as cycle).subscribe((res)=>{
            
          });
        }
        else{
          alert("This cycle is already rented");
        }
     });
    
  }

  logout(){
    localStorage.setItem("user","");
    localStorage.setItem("token","");
  }
}
