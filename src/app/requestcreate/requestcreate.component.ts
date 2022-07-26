import { Component, NgModule, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-requestcreate',
  templateUrl: './requestcreate.component.html',
  styleUrls: ['./requestcreate.component.css']
})
export class RequestcreateComponent {
  usetypeid=GlobalConstants.usertypeid
  message=''
  myDate = new Date();
  cValue = formatDate(this.myDate, 'yyyy-MM-ddThh:mm', 'en-US');
  

  // constructor() { }
  constructor(private router: Router) {}
  // handledata(data:any) { 
    
  //   // let d=document.getElementById('source').value;
  //   console.log(data);
  //   GlobalConstants.message="changed"
    
    
  // }
  async chkclick(data:any){
    let userid='';
    let userName='';
    let loginid='';
    
    // let url="https://localhost:8000/api/User/GetAllUsers"
    // let res=await fetch(url)
    // let apires;
    // apires=await res.json()
    // // GlobalConstants.detail=apires
    // console.log("oooooo")
    // console.log(apires);
    
    // // console.log(GlobalConstants.detail.userTypeId);
    
    // console.log(GlobalConstants.auth)
    // for (const employee in apires){
    //   if (apires[employee].userName==GlobalConstants.auth){
    //     console.log("inside if")
    //      userid=apires[employee].userId
    //     userName=apires[employee].name
    //     loginid=apires[employee].loginId
    //     this.usetypeid=apires[employee].userTypeId
        
    //   }
      
      

    // }
    console.log("aaaaaaa");
    console.log(this.myDate);
    
    console.log(this.cValue);
    
    
    console.log( this.usetypeid);
    console.log(data.traveldate);
    
    if(data.traveldate<this.cValue) {
      console.log("wrong date");
      alert("Use a valid Date")
      this.message='Invalid Date'
      return 
      
     }





    let url1="https://localhost:8000/api/JourneyTickets/CreateRequest"
    let obj={
      "requestId": "",
      "source": data.source,
      "destination": data.destination,
      "userId": GlobalConstants.userid,
      "name":GlobalConstants.username,
      "travelDate": data.traveldate,
      "bookingTime": "2022-07-17T12:02:35.338Z",
      "loginId": GlobalConstants.auth,
      "travelMode": data.mode,
      "currentStatus": "SUBMITTED"
    }
    let res1=await fetch(url1,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:"POST",
      body:JSON.stringify(obj)
  
      
    })
    let apires1;
    apires1=await res1.json()
    console.log("kkkkkkk");
    
    console.log(apires1);
    console.log("check manager");
    
    console.log(this.usetypeid);
    
    
   
    
    if(this.usetypeid=='EMPLOYEE'){
    
    this.router.navigateByUrl('/login')
    }
    if(this.usetypeid=='MANAGER'){
    
      this.router.navigateByUrl('/manager')
      }
   


















    

  }
  
  ngOnInit(): any {
    GlobalConstants.display=true
  }

}
