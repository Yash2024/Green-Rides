import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrsServiceService } from '../services/crs-service.service';
import { user } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: CrsServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  usr : user = {_id:"",email:"",password:"",name:"",rollno:"",branch:"",cycleid:"",role:""};
  showPassword: boolean = false;

  myFunction(){
    this.showPassword=!this.showPassword;
  }

  signin(){
    if(this.usr.email==="")
    {
      alert("Please Enter Email")
    }
    else if(this.usr.password==="")
    {
      alert("Please Enter Password")
    }
    else{
      this.service.login(this.usr as user).subscribe((res)=>{
        alert(res.message);
        localStorage.setItem("token",res.token);
        localStorage.setItem("_id", res._id);
        localStorage.setItem("name", res.name);
        localStorage.setItem("rollno", res.rollno);
        localStorage.setItem("branch", res.branch);
        localStorage.setItem("cycleid", res.cycleid);
        localStorage.setItem("email", res.email);
        localStorage.setItem("role",res.role);
        if(res.role==="guard")
        {
          this.router.navigate(['admin']);
        }
        else{
          this.router.navigate(['home']);
        }
        
      }, (error: HttpErrorResponse) => {
        console.log("Error:" +error.message);
        alert("please enter valid email Id");
      }
      )
    }
  }
}
