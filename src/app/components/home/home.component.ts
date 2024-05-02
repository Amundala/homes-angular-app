import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../interfaces/housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isButtonDisabled: boolean = true;
  //--- Initializing our empty data strcutre ---
  housingLocationList: HousingLocation[] = [];

  //--- array to store searched locations ---
  filteredLocationList: HousingLocation[] = [];

  //--- Injecting Housing Servic to be invoked by the constructor ---
  housingSerive: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingSerive.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  //--- search form object ----
  onClickSearchButtonObject = new FormGroup({
    searchTerm: new FormControl(),
  });

  //--- on click of search button function ----
  filterResults(value: string) {
    //--- return all the results is nothing is searched ---
    if (!value) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    //--- filter to match our input value ----
    this.filteredLocationList = this.housingLocationList.filter((result) =>
      result?.city.toLocaleLowerCase().includes(value.toLowerCase())
    );
  }
}
