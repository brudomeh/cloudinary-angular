import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  phone: any;

  constructor(public route: ActivatedRoute, public phoneService: PhoneService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.phoneService.get(params.id).subscribe(phone => {
        this.phone = phone;
      });
    });
  }
}
