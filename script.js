
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChangeds
  } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDX4QcAcipT9guaQ6UvpAeNYotofT-rxG0",
    authDomain: "blog-website.firebaseapp.com",
    projectId: "blog-website-840e0",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  window.signUp = function () {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Signed up!");
        window.location.href = "dashboard.html";
      })
      .catch((error) => alert(error.message));
  };

  window.logIn = function () {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Logged in!");
        window.location.href = "dashboard.html";
      })
      .catch((error) => alert(error.message));
  };

  
  window.logOut = function () {
    signOut(auth)
      .then(() => {
        alert("Logged out!");
        window.location.href = "login.html";
      })
      .catch((error) => alert(error.message));
  };

  onAuthStateChanged(auth, (user) => {
    if (!user && window.location.pathname.includes("dashboard")) {
      window.location.href = "login.html";
    }
  });
