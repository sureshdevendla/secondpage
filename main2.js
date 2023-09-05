
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgZtoAUn8VqwHcI7xVYbJVbSM9J0ruGbk",
  authDomain: "multipagewe.firebaseapp.com",
  databaseURL: "https://multipagewe-default-rtdb.firebaseio.com",
  projectId: "multipagewe",
  storageBucket: "multipagewe.appspot.com",
  messagingSenderId: "500218178946",
  appId: "1:500218178946:web:c0059071320924b65e739b",
  measurementId: "G-MR9156QM2C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("name of the user");
document.getElementById("user_name").innerHTML="Welcome"+user_name+" !";

function addnumber(){
    m_number=document.getElementById("mnumber").value;
    
    firebase.database().ref("/").child(m_number).update({
        purpose:"for verifing the user"
    });
    
}
