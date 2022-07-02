// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
  import { getDatabase , set , ref , update , onValue} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
  import { getDownloadURL,  getStorage , ref as sRef } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";
  import { getFirestore,  collection, addDoc, getDocs, onSnapshot  } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configurat<ion
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC1_uL5ufHpuaVdG7--l9w-yUzBhjqcyJg",
    authDomain: "linugux1.firebaseapp.com",
    databaseURL: "https://linugux1-default-rtdb.firebaseio.com",
    projectId: "linugux1",
    storageBucket: "linugux1.appspot.com",
    messagingSenderId: "79414229398",
    appId: "1:79414229398:web:9056d8929e3957f0b285b7",
    measurementId: "G-K0X85YD479"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  const auth = getAuth();
  const storage = getStorage();
  const db = getFirestore();
  
  const dt = new Date();

export const saveTask = (title , description) => { 
  console.log(title ,description)
  if (title=="" || description == "") {
    alert("NOT Note´s or Description")
  }else {
  addDoc(collection(db, 'tasks'), {title, description, dt });
  update(ref(database, 'tasks' +' '+title ),{title, description, dt })
  document.getElementById('task-title').value = "";
  document.getElementById('task-description').value = "";
  }
}
  //export const getTasks = () => console.log('tasks list')
export const getTasks = () => getDocs(collection(db, 'tasks'))

export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)


wupdate.addEventListener('click', (e) => {
    const userId = auth.currentUser.uid;
    const username = document.getElementById("username").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const dt = new Date();
    alert('Sure , Change items !!!')
    update(ref(database, 'users/' + userId),{
          date_update: dt,
          username: username,
          lastname: lastname,
          email: email,
          telephone: telephone
      })
     var parra = document.getElementById("buttonUpdate").style = "display: ;"
     var parra1 = document.getElementById("actualizar").style = "display: none;"
     var parra2 = document.getElementById("logout1").style = "display: ;"

     return onValue(ref(database, '/users/' + userId), (snapshot) => {
            const username = (snapshot.val() && snapshot.val().username) || ' ';
            const lastname = (snapshot.val() && snapshot.val().lastname) || ' ??[?] ';
            const email = (snapshot.val() && snapshot.val().email) || ' ';
            const status = (snapshot.val() && snapshot.val().status) || ' ';
            const telephone = (snapshot.val() && snapshot.val().telephone) || ' Not Telephone';
            // ...
                document.getElementById("showUsername").innerHTML = userId + '<br>' + username + ' ' + lastname + ' <br> ' + email + '<br>' + telephone +  '<br>' + 'Status : ' + status ;
                document.getElementById("username").value = username ;
                document.getElementById("lastname").value = lastname ;
                document.getElementById("email").value = email ;
                document.getElementById("telephone").value = telephone;
                document.getElementById("dt").innerHTML = dt;
          }, {
            onlyOnce: true
          });
  });

  
  cancel.addEventListener('click', (e) => {
         var parra = document.getElementById("buttonUpdate").style = "display: ;"
         var parra1 = document.getElementById("actualizar").style = "display: none;"
         var parra2 = document.getElementById("logout1").style = "display: ;"
  });

  cupdate.addEventListener('click', (e) => {
         var parra = document.getElementById("buttonUpdate").style = "display: none;"
         var parra1 = document.getElementById("actualizar").style = "display: ;"
         var parra2 = document.getElementById("logout1").style = "display: none;"
  });

 login.addEventListener('click',(e)=>{
   var email1 = document.getElementById('email1').value;
   var password1 = document.getElementById('password1').value;

      signInWithEmailAndPassword(auth, email1, password1)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        const dt = new Date();
        const email = user.email;

         update(ref(database, 'users/' + user.uid),{
          last_login: dt,
          status: "on",
        })

         /*alert('Welcome !!! ' + email);*/
         var parrafo = document.getElementById("login-form").style = "display:none;"
         var parrafo1 = document.getElementById("logout1").style = "display:;"
         var parrafo2 = document.getElementById("message").style = "display:;"
         var parrafo3 = document.getElementById("buttonUpdate").style = "display:;"
         var parrafo4 = document.getElementById("logout4").style = "display:;"

         const userId = auth.currentUser.uid;
          return onValue(ref(database, '/users/' + userId), (snapshot) => {
            const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            const lastname = (snapshot.val() && snapshot.val().lastname) || 'Anonymous';
            const email = (snapshot.val() && snapshot.val().email) || 'Anonymous';
            const status = (snapshot.val() && snapshot.val().status) || 'Anonymous';
            const telephone = (snapshot.val() && snapshot.val().telephone) || 'Not Telephone';
            // ...
                document.getElementById("showUsername").innerHTML = userId + '<br>' + username + ' ' + lastname + ' <br> ' + email + '<br>' + telephone + '<br>' + 'Status : ' + status;
                document.getElementById("username").value = username ;
                document.getElementById("lastname").value = lastname ;
                document.getElementById("email").value = email ;
                document.getElementById("telephone").value = telephone;
                document.getElementById("dt").innerHTML = dt;
          }, {
            onlyOnce: true
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
  });

 });

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    //bla bla bla
    // ...
  } else {
    // User is signed out
    // ...
    //bla bla bla
  }
});

logout.addEventListener('click',(e)=>{
   
   signOut(auth).then(() => {
     // Sign-out successful.

     //alert('user loged out bye !!!');
     var parrafo = document.getElementById("login-form").style = "display:;";
     var parrafo1 = document.getElementById("logout1").style = "display: none;";
     var parrafo2 = document.getElementById("message").style = "display: none;";
     var parrafo3 = document.getElementById("actualizar").style = "display: none;";
     var parrafo5 = document.getElementById("logout4").style = "display: none;";
     var parrafo5 = document.getElementById("buttonUpdate").style = "display: none;";
   }).catch((error) => {
     // An error happened.
     const errorCode = error.code;
     const errorMessage = error.message;

        alert(errorMessage);
   });
});
