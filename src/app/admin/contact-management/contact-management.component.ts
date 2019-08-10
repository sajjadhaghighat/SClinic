import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';
import { ToastrService } from 'ngx-toastr';
import { StyleService } from 'src/app/Services/style.service';

@Component({
  selector: 'app-contact-management',
  templateUrl: './contact-management.component.html',
  styleUrls: ['./contact-management.component.css']
})
export class ContactManagementComponent implements OnInit {

  constructor(public cservice:ContactService,private toastr:ToastrService,public styleservice:StyleService) { }

  ngOnInit() {
    this.cservice.getContactList();
  }
  select : number;
  getdata(code : number)
  {
    this.select = code;
    this.cservice.getContactList();
  }
  onDelete()
  {
    this.cservice.deleteContact(this.select).subscribe(
      data => {
        this.cservice.getContactList();
        this.toastr.success('پیغام با موفقیت حذف شد','');
                
      }, 
      error =>{
        this.toastr.error('ارتباط با سرور برقرار نشد','خطا');
      }
    );
  }

}
