import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones: Array<any> = [];

  constructor( public phoneService: PhoneService) {
    this.phoneService.getList().subscribe( ppe => this.phones = ppe);
  }

  ngOnInit() {
  }

}
