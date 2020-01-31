import { Component } from '@angular/core';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyDqlTM_zXt2TkXYfqd9VT2A786t-YS1fzs',
      authDomain: 'bibliapp-backend.firebaseapp.com',
      databaseURL: 'https://bibliapp-backend.firebaseio.com',
      projectId: 'bibliapp-backend',
      storageBucket: 'bibliapp-backend.appspot.com',
      messagingSenderId: '1016353018496',
      appId: '1:1016353018496:web:2c5f04417f684ea1318c65'
    };
    // Initialize Firebase
    firebase.initializeApp(config);
  }

}
