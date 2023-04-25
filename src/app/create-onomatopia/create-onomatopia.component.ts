import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css'],
})
export class CreateOnomatopiaComponent {
  

  newOnomatopia: string = '';

  @Output()
  sendOnomatopiaToParent = new EventEmitter<string>();

  sendOnomatopia() {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }

  createOnomatopia(): void {
    this.sendOnomatopia();
  }
}
