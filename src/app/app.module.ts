import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { ModalproductComponent } from './modalproduct/modalproduct.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ModalproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCq1B5wqtWTyFKwH0JMxOxHPJnvq9QoN78",
      authDomain: "loremipsum-e61d0.firebaseapp.com",
      databaseURL: "https://loremipsum-e61d0.firebaseio.com",
      projectId: "loremipsum-e61d0",
      storageBucket: "",
      messagingSenderId: "633581222928",
      appId: "1:633581222928:web:3c44e68638861c86"
    }, 'shazam'),
    AngularFireDatabaseModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    ModalproductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
