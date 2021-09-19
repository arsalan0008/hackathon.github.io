const firebaseConfig = {
    apiKey: "AIzaSyBshB7wfyciitzANcBsN-u4aWpnNIFr2uc",
    authDomain: "hackathon-8015e.firebaseapp.com",
    projectId: "hackathon-8015e",
    storageBucket: "hackathon-8015e.appspot.com",
    messagingSenderId: "280488011510",
    appId: "1:280488011510:web:cb7fdbea7169db94b1aed7",
    measurementId: "G-YJLGMK5VJK"
};

firebase.initializeApp(firebaseConfig);


function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      window.location = "./index.html"
      // ...
    })
    .catch((error) => {
      alert("enter correct email and password")
      // ..
    });
}

function login() {
    let email = document.getElementById("log_email").value;
    let password = document.getElementById("log_password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    window.location = "./level1.html"
    // ...
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("check your email address and password")
    });
}


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

function forget() {
  let email = document.getElementById("log_email").value;
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("we send the forget information to your email inbox")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert("enter your email address")
  });
}

let provider = new firebase.auth.GoogleAuthProvider();
async function google() {
    await firebase.auth().signInWithPopup(provider)
    window.location = "./index.html"
}
