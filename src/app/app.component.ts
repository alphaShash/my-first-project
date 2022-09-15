import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //template: `<p> {{myObject.color}}</p>`,
  //template: `<ul>
  //<li *ngFor = "let samplearray of myArray">{{samplearray}}</li>
  //</ul>`,
  template: `<ul>
  <li *ngIf = "myArray; else idTemplate">Type the array is present</li>
  </ul>
  <ng-template #idTemplate>Array is Empty</ng-template>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'my-first-project';
  myObject = {
    color:'blue',
    material : 'soft'
  };
  myArray = false
}
