import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList.js';


var config = {
    apiKey: "AIzaSyBvygZkwK_68jQZIrdC5tS34toXHUuX0Kw",
    authDomain: "bloc-chat-2525a.firebaseapp.com",
    databaseURL: "https://bloc-chat-2525a.firebaseio.com",
    projectId: "bloc-chat-2525a",
    storageBucket: "bloc-chat-2525a.appspot.com",
    messagingSenderId: "179555936478"
  };
  firebase.initializeApp(config);


  class App extends Component {
    render() {
      return (
        <div>
          <RoomList firebase = {firebase}/>
        </div>
      );
    }
  }

  export default App;
