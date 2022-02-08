import { Component, OnInit } from '@angular/core';

import { BloodBankService } from './../../services/blood-bank.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-bloodBank-form',
  templateUrl: './bloodBank-form.component.html',
  styleUrls: ['./bloodBank-form.component.css']
})
export class BloodBankFormComponent implements OnInit {
  bloodGroupID: any;
  bloodGroupName: any;
  description: any;
  bloodBank = { bloodGroupID: 0 };

  constructor(private route: ActivatedRoute, private router: Router, private bloodBankService: BloodBankService) {
    route.params.subscribe(p => {
      this.bloodBank.bloodGroupID = p['id'];
    }, err => {
      if (err.status == 404)
        this.router.navigate(['/bloodBank']);
    });
  }

  ngOnInit() {
    if (this.bloodBank.bloodGroupID !== undefined) {
      this.bloodBankService
        .getBloodBank(this.bloodBank.bloodGroupID)
        .subscribe(c => {
          this.bloodBank = c;
        });
    }
    else {
      this.bloodBank.bloodGroupID = 0;
      this.bloodGroupName = '';
      this.description = '';
    }
  }

  submit() {
    if (this.bloodBank.bloodGroupID != 0) {
      this.bloodBankService.update(this.bloodBank, this.bloodBank.bloodGroupID)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/bloodBank'])
        });
    }
    else {
      console.log(this.bloodBank);
      this.bloodBankService.create(this.bloodBank)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/bloodBank'])
        });
    }
  }

}

