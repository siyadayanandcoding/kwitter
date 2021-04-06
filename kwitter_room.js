
//ADD YOUR FIREBASE LINKS

 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCNI9hFuVDJNYhEwcpCOtqZwky3ncFvkyM",
      authDomain: "kwitter-7597c.firebaseapp.com",
      databaseURL: "https://kwitter-7597c-default-rtdb.firebaseio.com",
      projectId: "kwitter-7597c",
      storageBucket: "kwitter-7597c.appspot.com",
      messagingSenderId: "999606677700",
      appId: "1:999606677700:web:703d0cae524ea771101991"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}


