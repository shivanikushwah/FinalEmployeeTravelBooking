import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.css']
})
export class ManagerloginComponent implements OnInit {
  username=GlobalConstants.username
  member:any=[]
  selfmember:any=[]
  allreq:any=[]
  displaynew=GlobalConstants.displaynew


  display=GlobalConstants.display
  usetypeid=GlobalConstants.usertypeid

  async chkclick1(){
    console.log("chkclick1 running");
    
  let url="https://localhost:8000/api/JourneyTickets/GetAllRequests"
  let obj={
    // "id":"02-07-2022-20-43-35",
    "id":"",
    "loginId": GlobalConstants.auth
  }
  let res=await fetch(url,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method:"POST",
    body:JSON.stringify(obj)

    
  })
  let apires;
  apires=await res.json()
  console.log("aaaaaa");
  
  console.log(apires);
  
  this.allreq=apires
  console.log("qqqqq");
  console.log( GlobalConstants.usertypeid);
  
  console.log(apires);
  for ( let emp of apires){
    // console.log(emp);
    
    if(emp.loginId==GlobalConstants.auth){
      this.selfmember.push(emp)
    }
    else{
      this.member.push(emp)
    }
    
    
  }
  
  
}
ndisp(){
  this.display=false
  this.displaynew=false

}





trq():any{
  console.log("inside trq");
  
  this.display=false
  this.displaynew=true
  console.log(GlobalConstants.username)
  console.log(this.member);
  
  // this.chkclick1()
  
  
  // return this.member
}
vtrq(){
  this.display=true
  this.displaynew=false
}


detailchk(element:any){
  GlobalConstants.detail=element

 console.log(element);
  this.router.navigateByUrl('/Details')
  
}
editchk(element:any){
  GlobalConstants.detail=element
  if(GlobalConstants.detail.currentStatus=="SUBMITTED"){
  
  
  this.router.navigateByUrl('/edit')
  }

}
deletechk(element:any){
  GlobalConstants.detail=element

 // console.log(element);
   this.router.navigateByUrl('/delete')
}



constructor(private router: Router) {}

  ngOnInit():  any {
    this.member=[]
  this.selfmember=[]
  this.display=GlobalConstants.display
  this.displaynew=GlobalConstants.displaynew
    // this.displaynew=false
    // console.log(GlobalConstants.auth)
    // console.log(GlobalConstants.display);
    
    this.chkclick1()
    console.log(this.selfmember);
    console.log(this.member);
    console.log("ngoninit");
    
    
    
   // this.checklog()
    
   //  return this.member
  }
  }


