import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  // Declaring the cardsList array inside the class
  cardsList = [
    {
      name: "Sample Card 1",
      description: "This is a description of card 1.",
      imageUrl: "/Users/kyawminoo/cardfight-vanguard-ui/src/Min Khant, Ethan.jpeg" // Replace with a valid image path or URL
    }
    // ... you can add more cards as needed
  ];
}