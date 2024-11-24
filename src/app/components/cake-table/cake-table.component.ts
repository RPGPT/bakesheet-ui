import { Component } from '@angular/core';

@Component({
  selector: 'app-cake-table',
  imports: [],
  templateUrl: './cake-table.component.html',
  styleUrl: './cake-table.component.scss'
})
export class CakeTableComponent {
  items = [
    {
      name: 'Puddin',
      price: 10.0,
      image: 'assets/puddin.png' // Replace with actual image path
    },
    {
      name: 'Chocolate Cake',
      price: 15.0,
      image: 'assets/puddin.png' // Replace with actual image path
    }
  ];

  createNewItem() {
    console.log('Create New Item button clicked');
    // Add modal or navigation for creating new items
  }

  editItem(itemName: string) {
    console.log(`Edit button clicked for ${itemName}`);
    // Add modal or navigation for editing the item
  }
}
