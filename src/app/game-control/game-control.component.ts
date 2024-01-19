import { Component, EventEmitter, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  interval ;
  count: number = 0;
  @Output() intervalEmitter = new EventEmitter<number>();

  StartGame(){
    this.interval = setInterval(()=>{
      console.log(this.count);
      this.intervalEmitter.emit(this.count + 1);
      this.count++;
    }, 1000)
  }

  PauseGame(){
    clearInterval(this.interval);
  }
}
