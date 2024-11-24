import { Component } from '@angular/core';
import { CakeTableComponent } from "../../components/cake-table/cake-table.component";

@Component({
  selector: 'app-home-page',
  imports: [CakeTableComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
