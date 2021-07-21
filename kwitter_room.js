
var firebaseConfig = {
      apiKey: "AIzaSyCRzjUAFAr6_Mfn12HOmp9AT7EAe0tqOPQ",
      authDomain: "practice-29f49.firebaseapp.com",
      databaseURL: "https://practice-29f49-default-rtdb.firebaseio.com",
      projectId: "practice-29f49",
      storageBucket: "practice-29f49.appspot.com",
      messagingSenderId: "281651035411",
      appId: "1:281651035411:web:6cbd77f8f07a9b8c79aee6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name;
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
} 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
      
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("romm_name");
window.location="kwitterLogin.html";
}