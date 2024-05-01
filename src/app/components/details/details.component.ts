import { Component, inject } from '@angular/core';
import { HousingLocation } from '../../interfaces/housing-location';
import { HousingService } from '../../services/housing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  houseLocationId = -1;
  housingLocationDetail: HousingLocation | undefined;
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.houseLocationId = Number(this.route.snapshot.params['id']);

    this.housingLocationDetail = this.housingService.getHousingLocationById(
      this.houseLocationId
    );
  }
}
