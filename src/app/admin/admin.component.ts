import { Component, OnInit } from '@angular/core';
import { CrsServiceService } from '../services/crs-service.service';
import { user } from '../user.model';
import { cycle } from '../cycle.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: CrsServiceService) { }

  ngOnInit(): void {
  }
  scn: boolean = false;
  name:string|null = localStorage.getItem("name");
  rollno: string |null = localStorage.getItem("rollno");
  branch: string | null = localStorage.getItem("branch");
  emailid: string  | null = localStorage.getItem("email");
  cycleqr: string |null ="";
  role: string|null = localStorage.getItem("role");
  usr: user= {_id:localStorage.getItem("_id"),email:this.emailid,name:this.name,rollno: this.rollno,branch:this.branch,password:"",cycleid:this.cycleqr,role: this.role}
  togglescn(){
    this.scn=!this.scn;
  }

  cyl:cycle={_id:"",cycleid:"",status:"",stdid:""};
  addqr(item: string)
  {
    this.cycleqr = item; 
    this.service.details(this.cycleqr).subscribe((res)=>{
      this.cyl = res as cycle
  })
    this.scn=false;
  }

  
  returncycle(){
    if(this.cyl.status=="")
    {
      alert("This Cycle is not rented yet");
      this.cycleqr="";
    }
    else
    {
      const usr:user = {_id:this.cyl.stdid,email:"",password:"",name:"",rollno:"",branch:"",cycleid:"",role:this.role}; 
      this.service.update(usr as user).subscribe((res)=>{
          alert("Cycle Submitted");
          this.cycleqr="";
      })
      
      this.cyl.status="";
      this.cyl.stdid="";
      this.service.submitcycle(this.cyl as cycle).subscribe((res)=>{
      })
    }
    
  }
  logout(){
    localStorage.setItem("user","");
    localStorage.setItem("token","");
  }
}
