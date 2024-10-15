import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, OnInit, output, OnDestroy } from '@angular/core';
import { TimerStatus } from '../../interfaces/timer-otp.interface';

@Component({
  selector: 'lib-timer',
  standalone: true,
  imports: [
    DecimalPipe,
    CommonModule
  ],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit, OnDestroy{
  public seconds = 59;
  public functionTimer!: NodeJS.Timeout;
  public timerStatus: TimerStatus = 'init';
  public sendStatusToParentComponent = output<TimerStatus>();

  ngOnInit(): void {
    this.startCounter();
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

  startCounter():void{
    if(this.timerStatus != 'countdown'){
      this.handlerTimerStatus('countdown');

      this.functionTimer = setInterval(() =>{
        this.seconds = this.seconds - 1;
        if(this.seconds == 0) this.stopInterval()
      }, 1000);
    }
  }

  stopInterval():void{
    clearInterval(this.functionTimer);
    this.handlerTimerStatus('expired');
  }

  handlerTimerStatus(status: TimerStatus):void{
    if(status == 'expired') this.seconds = 59;
    this.timerStatus = status;
    this.sendStatusToParentComponent.emit(this.timerStatus);
  }
}
