import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skill2';
  rest=[
    {name:'Aromas Multi-Cuisine Restaurant',image:'\assets\images\aromas-multicuisine-restaurant.jpg',link:'/aroma'},
    {name:'GAD Restaurant',image:'\assets\images\gad-restaurant-the-gateway.jpg',link:'/gad'},
    {name:'Ilapuram Restaurant',image:'\assets\images\ilapuram-vijayawada.jpg',link:'/ila'},
    {name:'Kaizen Restaurant',image:' \assets\images\kaizen.jpg',link:'/kaizen'},
    {name:'Lotus Food City',image:'\assets\images\lotus-food-city-view.jpg',link:'/lotus'},
    {name:'Minerva Grand Restaurant',image:'\assets\images\minerva-grand-restaurant.jpg',link:'/minerva'},
    {name:'Orientation Restaurant',image:'\assets\images\orientation.jpg',link:'/orien'},
    {name:'Sweet Magic',image:'src\assets\images\sweet-magic.jpg',link:'/sweet'},
    {name:'Taj Restaurant',image:'\assets\images\taj.jpg',link:'/taj'},
    {name:'TFL',image:'src\assets\images\tfl.jpg',link:'/tfl'}
  ]
}
