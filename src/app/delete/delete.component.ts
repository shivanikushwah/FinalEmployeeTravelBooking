import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  empdetail:any
  usrname:any
  member:any
  constructor(private router: Router) {}
 async chkdelete(){
    let url="https://localhost:8000/api/JourneyTickets/DeleteRequest"
    let obj={
      // "id":"02-07-2022-20-43-35",
      
        "requestId": this.empdetail.requestId
      
      
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
    // console.log(apires);
    // GlobalConstants.display=true
    if(res.ok){
      this.route()
      
      
    
    // this.router.navigateByUrl("/login")
    }
  
    
  }
  route(){
    if(GlobalConstants.usertypeid=="EMPLOYEE"){
      this.router.navigateByUrl('/login')
 
    }
    if(GlobalConstants.usertypeid=="MANAGER"){
    //  GlobalConstants.display=true
    if (GlobalConstants.username==this.empdetail.userId){
      GlobalConstants.display=true
      GlobalConstants.displaynew=false
    }
    else{
      GlobalConstants.display=false
      GlobalConstants.displaynew=true

    }
      this.router.navigateByUrl('/manager')
 
    }
    if(GlobalConstants.usertypeid=="TRAVEL_AGENT"){
     this.router.navigateByUrl('/travelagent')
 
   }
   if(GlobalConstants.usertypeid=="ADMIN"){
     this.router.navigateByUrl('/admin')
 
   }

  }
  

  ngOnInit(): void {
    GlobalConstants.display=true
    GlobalConstants.displaynew=true
    this.empdetail=GlobalConstants.detail
    console.log("in details");
    
    console.log(this.empdetail)
this.usrname=GlobalConstants.username
  }

}
