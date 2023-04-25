import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge-output',
  templateUrl: './challenge-output.component.html',
  styleUrls: ['./challenge-output.component.css']
})
export class ChallengeOutputComponent {

  onomatopia: string = "";
  onomatopiaList: string[] = [];

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopiaList.push(this.onomatopia = event);
  };
}
