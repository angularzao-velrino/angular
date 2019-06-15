import { Component } from '@angular/core';

export interface Example {
  name: string;
  position: number;
  value: string;
}

const ELEMENT_DATA: Example[] = [
  { position: 1, name: 'Hydrogen', value: 'H' },
  { position: 2, name: 'Helium',  value: 'He' },
  { position: 3, name: 'Lithium', value: 'Li' },
  { position: 4, name: 'Beryllium', value: 'Be' },
  { position: 5, name: 'Boron', value: 'B' },
  { position: 6, name: 'Carbon', value: 'C' },
  { position: 7, name: 'Nitrogen', value: 'N' },
  { position: 8, name: 'Oxygen', value: 'O' },
  { position: 9, name: 'Fluorine', value: 'F' },
  { position: 10, name: 'Neon', value: 'Ne' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loremipsum';
  displayedColumns: string[] = ['position', 'name', 'value'];
  dataSource = ELEMENT_DATA;
}
