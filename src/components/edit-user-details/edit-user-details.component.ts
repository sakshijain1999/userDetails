import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetailService } from 'src/services/user-detail.service';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.css']
})
export class EditUserDetailsComponent {

  userFrm: any = FormGroup;
  constructor(private router: Router,private formBulder: FormBuilder,private service : UserDetailService){}
  ngOnInit() {
    this.formValidation();
    this.getUser();
  }
  formValidation() {
    this.userFrm = this.formBulder.group({
      id:1,
      name:[''],
      domain:[''],
      gender:[''],
      dateofbirth:[],
      number:[],
      Location:['']
    })
  }
getUser(){
  this.service.getAllUser().subscribe((res)=>{
    this.patchValue(res[0])
    
  }
  )
}
  patchValue(res){
    this.userFrm.patchValue({
      name:res.name,
      domain:res.domain,
      gender:res.gender,
      dateofbirth:res.dateofbirth,
      number:res.number,
      Location:res.Location
    })
  }
  EditUser(value){
    let body = {
      name:value.name,
      domain:value.domain,
      gender:value.gender,
      dateofbirth:value.dateofbirth,
      number:value.number,
      Location:value.Location
    }
    this.service.EditUser(this.userFrm.id, body).subscribe((res)=>{
      console.log(res);
      
    }
    )
  }

}
