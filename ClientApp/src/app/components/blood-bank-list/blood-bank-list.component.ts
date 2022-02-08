import { Component, OnInit } from '@angular/core';

import { BloodBankService } from './../../services/blood-bank.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-bloodBank-list',
  templateUrl: './bloodBank-list.component.html',
  styleUrls: ['./bloodBank-list.component.css']
})
export class BloodBankListComponent implements OnInit {
  bloodBanks: any[];
  constructor(private router: Router, private bloodBankService: BloodBankService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.bloodBankService.getBloodBanks().subscribe(courses => this.bloodBanks = courses);
  }

  delete(id: any) {
    if (confirm("Are You Sure??")) {
      console.log(id);
      this.bloodBankService.delete(id).subscribe(x => {
        console.log(x), this.refreshData();
      });
    }
  }


}
