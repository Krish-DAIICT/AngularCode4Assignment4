import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  onIntervalFired(numb: number){
    // console.log(numb)
    if(numb%2 === 0){
      this.evens.push(numb);
    }else{
      this.odds.push(numb);
    }
  }
}
