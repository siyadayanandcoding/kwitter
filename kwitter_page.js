//YOUR FIREBASE LINKS
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


//Start code
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData(){
      firebase.database().ref("/"+room_name).on('value', function(snapshot){
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot){
                  childKey= childSnapshot.key;
                  childData= childSnapshot.val();
                  if(childKey!="purpose"){
                        firebase_message_id=childKey;
                        message_data=childData;
                        console.log(message_data);
                        name=message_data['name'];
                        message=message_data['message'];
                        like=message_data['like'];
                        row = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+ message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
                        document.getElementById("output").innerHTML+=row;
                  } });  }); }
                  getData();

        function updateLike(message_id)
        {
              button_id=message_id;
              likes=document.getElementById(button_id).value;
              likes_in_number=Number(likes) + 1;
              console.log(likes_in_number);

              firebase.database().ref(room_name).child(message_id).update({
                    like:likes_in_number
              });
        }

        function logout(){
              localStorage.removeItem("user_name");
              localStorage.removeItem("room_name");
              window.location.replace("kwitter.html");
        }
      
