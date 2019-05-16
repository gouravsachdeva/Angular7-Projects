import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { PatientDepartmentComponent } from './patientdepartment.component';

// Components routing
import { PatientDepartmentRoutingModule } from './patientdepartment-routing.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [
    FormsModule,
    PatientDepartmentRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [PatientDepartmentComponent, RegistrationComponent]
})
export class PatientDepartmentModule { }
