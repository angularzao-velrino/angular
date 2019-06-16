import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalproductComponent } from './modalproduct/modalproduct.component';
import { map } from 'rxjs/operators';

export interface Example {
  name: string;
  position: number;
  value: string;
}

const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', value: 'H' },
  { position: 2, name: 'Helium', value: 'He' },
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
  items: Observable<any[]>;
  title = 'loremipsum';
  displayedColumns: string[] = ['name', 'value', 'functions'];
  dataSource: any;

  constructor(private db: AngularFireDatabase,
    private dialog: MatDialog) {
    this.dataSource = this.db.list('item').snapshotChanges()
      .pipe(map(items => {
        return items.map(item => {
          return Object.assign({ key: item.payload.key }, item.payload.val())
        });
      }));
  }

  insert(data = null): void {
    const dialogRef = this.dialog.open(ModalproductComponent, {
      width: '500px',
      data: { ...data, type: 'create' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.list('item').push(result);
      }
    });
  }

  delete(key) {
    this.db.list('item').remove(key)
  }

  edit(data = null) {
    const dialogRef = this.dialog.open(ModalproductComponent, {
      width: '500px',
      data: { ...data, type: 'update' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.list('item').update(result.key, result)
      }
    });
  }
}
