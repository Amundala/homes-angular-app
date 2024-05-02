import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AboutComponent } from './components/about/about.component';

//---- After including our components, now we set the PATH, COMPONENTNAME, TITLE ---
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'House Details',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us',
  },
];
