import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent  {
  des='';
  token:any
  message=''
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  constructor(private router: Router) {}
  async chkclick2(data:any){
    console.log(data.uname);
    GlobalConstants.auth=data.uname;
    
    // let url="https://localhost:8000/api/User/GetAllUsers"
    // let res=await fetch(url)
    // let apires2;
    // apires2=await res.json()
    //console.log("iiiiii");
    //console.log(apires2);
    
    
    
    // console.log(apires2)
    // console.log(GlobalConstants.auth)
    // //let des=GlobalConstants.detail
    // for (const employee in apires2){
    //   if (apires2[employee].userName==GlobalConstants.auth){
    //     console.log("inside if")
    //      this.des=apires2[employee].userTypeId;
    //     console.log(this.des);
    //     GlobalConstants.usertypeid=apires2[employee].userTypeId
    //     //console.log("iiiiii");
    //     console.log(GlobalConstants.usertypeid);
        
        
  
        // this.des=apires2[employee].UserTypeId
        //console.log(apires2[employee].UserTypeId);
        
        //console.log(apires2[employee].name);
      //   GlobalConstants.username=apires2[employee].name;
      //  console.log(GlobalConstants.username);
       
        
        
        
      // }
    // }
    
    













    
    let url1="https://localhost:8000/api/Authenticate/login"
    let obj={
      "password": data.psw,
      "loginId": data.uname
    }
    let res1=await fetch(url1,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:"POST",
      body:JSON.stringify(obj)

      
    })
    let apires;
    console.log(res1);
    
    if(res1.status!=200){

      // alert("wrong id or pass")
      this.message='Incorrect id or pass'
      return 
    }



    apires=await res1.json()
    console.log(res1);

    
    localStorage.setItem('token',apires.token)
    // this.getDecodedAccessToken(apires.token)
    this.token=(this.getDecodedAccessToken(apires.token));
    console.log(this.token);
    console.log("zzzzz");
    console.log(this.token.LoginId);

    
    
    GlobalConstants.usertypeid=this.token.UserTypeId;
    localStorage.setItem('role',this.token.UserTypeId)
    this.des=GlobalConstants.usertypeid
    GlobalConstants.username=this.token.Name
    GlobalConstants.userid=this.token.UserId
    // console.log( GlobalConstants.username);
    

    
    
    console.log(apires);
    if (res1.ok){
      console.log("good");
      console.log(res1.status);
      
     
      console.log(GlobalConstants.username);
      if(this.des=="EMPLOYEE"){
        console.log("employeeeeee");
        
        this.router.navigateByUrl('/login')

      }
      if(this.des=='MANAGER'){
        this.router.navigateByUrl('/manager')

      }
      if(this.des=='TRAVEL_AGENT'){
        this.router.navigateByUrl('/travelagent')

      }
      if(this.des=='ADMIN'){
        this.router.navigateByUrl('/admin')

      }
      
      

    }
    // }else{
    //   console.log("bad");
    //   alert("wrong details")
    //   this.router.navigateByUrl('/Auth')
      
    // }
 
    }
 

  

}
