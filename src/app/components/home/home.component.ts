import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../interfaces/housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isButtonDisabled: boolean = true;
  housingLocationList: HousingLocation[] = [];

  //--- Injecting Housing Servic to be invoked by the constructor ---
  housingSerive: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingSerive.getAllHousingLocations();
  }
}
