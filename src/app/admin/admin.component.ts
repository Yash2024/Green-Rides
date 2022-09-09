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
  cycleqr: string |null = localStorage.getItem("cycleid");
  usr: user= {_id:localStorage.getItem("_id"),email:this.emailid,name:this.name,rollno: this.rollno,branch:this.branch,password:"",cycleid:this.cycleqr}
  togglescn(){
    this.scn=!this.scn;
  }

  cyldtl: cycle[]=[];
  addqr(item: string)
  {
    this.cycleqr = item; 
    this.service.details(this.cycleqr).subscribe((res)=>{
      this.cyldtl = res as cycle[]
  })
    this.scn=false;
  }

  
  returncycle(){
    const cyl = this.cyldtl[0];
    if(cyl.status=="")
    {
      alert("This Cycle is not rented yet");
      this.cycleqr="";
    }
    else
    {
      const usr:user = {_id:cyl.stdid,email:"",password:"",name:"",rollno:"",branch:"",cycleid:""}; 
      this.service.update(usr as user).subscribe((res)=>{
          alert("Cycle Submitted");
          this.cycleqr="";
      })
      
      cyl.status="";
      cyl.stdid="";
      this.service.submitcycle(cyl as cycle).subscribe((res)=>{
        // this.cyldtl=[]
      })
    }
    
  }
  logout(){
    localStorage.setItem("user","");
    localStorage.setItem("token","");
  }
}
