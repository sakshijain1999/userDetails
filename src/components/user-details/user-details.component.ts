import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploadServiceService } from 'src/services/file-upload-service.service';
import { UserDetailService } from 'src/services/user-detail.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  shortLink: string = "";
  loading: boolean = false; 
  file:any =  File = null;
  userDetails:any
 constructor(private router: Router,private fileUploadService: FileUploadServiceService,private service : UserDetailService){}
 myForm = new FormGroup({

  file: new FormControl('', [Validators.required]),
  fileSource: new FormControl('', [Validators.required])
});
  ngOnInit(): void {
    this.getUserDetails();
  }
  edit(){
    this.router.navigate(['edit'])
  }
  onChange(event) {
    console.log(event);
    
    this.file = event.target.files[0];
    this.myForm.patchValue({
      fileSource:this.file
    });
}
  onUpload() {
 
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event: any) => {
          console.log(event);
          
            if (typeof (event) === 'object') {

                this.shortLink = event.link;

               
            }
        }
    );
}
getUserDetails(){
  this.service.getAllUser().subscribe((res: any) => {
   this.userDetails = res[0]
  })
}
}
