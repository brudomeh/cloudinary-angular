import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.css']
})
export class PhoneEditComponent implements OnInit {
  phone: Object = {
    _id: '',
    name: '',
    brand: '',
    image: ''
  };

  constructor(public route: ActivatedRoute, public phoneService: PhoneService, public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.phoneService.get(params.id).subscribe(phone => {
        this.phone = phone;
      });
    });
  }

  editPhone(phone) {
    this.phoneService.edit(this.phone).subscribe(() => this.router.navigate(['/']));
  }
}
