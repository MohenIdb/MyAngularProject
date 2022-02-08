import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BloodBankFormComponent } from './components/blood-bank-form/blood-bank-form.component';
import { BloodBankListComponent } from './components/blood-bank-list/blood-bank-list.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { BloodBankService } from './services/blood-bank.service';
import { PatientService } from './services/patient.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BloodBankFormComponent,
    BloodBankListComponent,
    PatientFormComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },

      { path: 'bloodBank/new', component: BloodBankFormComponent },
      { path: 'bloodBank/:id', component: BloodBankFormComponent },
      { path: 'bloodBank', component: BloodBankListComponent },

      { path: 'patient/new', component: PatientFormComponent },
      { path: 'patient/:id', component: PatientFormComponent },
      { path: 'patient', component: PatientListComponent },

    ])
  ],
  providers: [BloodBankService, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
