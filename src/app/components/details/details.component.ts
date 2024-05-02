import { Component, inject } from '@angular/core';
import { HousingLocation } from '../../interfaces/housing-location';
import { HousingService } from '../../services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  //--- injecting the Activate Routes----
  route: ActivatedRoute = inject(ActivatedRoute);
  //--- Initializing the Id & details ofr HousingLocation Structure ---
  houseLocationId = -1;
  housingLocationDetail: HousingLocation | undefined;
  //--- injecting our service dependency ----
  housingService: HousingService = inject(HousingService);

  constructor() {
    //--- getting the actual ID from this compent's URL ---
    this.houseLocationId = Number(this.route.snapshot.params['id']);
    //--- Invoking getHousingLocationById function from the service---
    this.housingLocationDetail = this.housingService.getHousingLocationById(
      this.houseLocationId
    );
  }

  //--- creating form object ----
  applicationForm = new FormGroup({
    izinaRibanza: new FormControl(''),
    izinaRihera: new FormControl(''),
    emailYawe: new FormControl(''),
  });

  //--- handle form apply CLICK method ---
  submitApplication() {
    this.housingService.serviceSubmitApplication(
      this.applicationForm.value.izinaRibanza ?? '',
      this.applicationForm.value.izinaRihera ?? '',
      this.applicationForm.value.emailYawe ?? ''
    );
  }
}
