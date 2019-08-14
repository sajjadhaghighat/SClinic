import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  Flag : Boolean = false;
  constructor(private toastr:ToastrService) { }
  styleChange()
  {
    this.Flag = !this.Flag;
    if(this.Flag == true)
    {
      this.toastr.info('استایل ۱ ', 'پیغام');
    }
    else
    {
      this.toastr.show('استایل ۲', 'پیغام');
    }
    
  }
}
