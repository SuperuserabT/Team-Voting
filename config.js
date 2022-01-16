import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyA1FNAR_OF1qdZpsv7p-gcX-VIOFt1a048",
        authDomain: "team-voting-app-dd28a.firebaseapp.com",
        databaseURL: "https://team-voting-app-dd28a-default-rtdb.firebaseio.com",
        projectId: "team-voting-app-dd28a",
        storageBucket: "team-voting-app-dd28a.appspot.com",
        messagingSenderId: "956425294712",
        appId: "1:956425294712:web:001cff2d8947510c3dee8d"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();