var firebaseConfig = {
      apiKey: "AIzaSyDqAue-EvYSvvIgCHF2cp3oFKY1lwUKecE",
      authDomain: "kwitter-2a4dc.firebaseapp.com",
      databaseURL: "https://kwitter-2a4dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-2a4dc",
      storageBucket: "kwitter-2a4dc.appspot.com",
      messagingSenderId: "657987380575",
      appId: "1:657987380575:web:a5b61dba8075fc4577c2ea"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}