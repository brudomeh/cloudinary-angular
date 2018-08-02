import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-phone-add',
  templateUrl: './phone-add.component.html',
  styleUrls: ['./phone-add.component.css']
})
export class PhoneAddComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/phone`,
    method: 'POST'
  });

  newPhone: Object = {
    name: '',
    brand: '',
    image: ''
  };
  feedback;


  constructor(public phoneService: PhoneService, public router: Router) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
   }

  addPhone(phone) {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', phone.name);
      form.append('brand', phone.brand);
    };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => {
      this.router.navigate(['/']);
    };
  }

}
