// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getFirestore, collection, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRutVjCGnIi_QyUJ3TKRblnAKEzpieVbU",
    authDomain: "hackcamp-5c9cd.firebaseapp.com",
    projectId: "hackcamp-5c9cd",
    storageBucket: "hackcamp-5c9cd.appspot.com",
    messagingSenderId: "1089119375030",
    appId: "1:1089119375030:web:8e0e380a2b94a275dfe017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);
//postings collection
const postings = collection(db, 'postings');
const snapshot = getDocs(postings);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log(`logged in!`);
    } else {
        console.log(`No user`);
    }
})

async function writePosting() {
    const docData = {
        description: 'fresh basil',
        available: true,
        user: "Sally33",
        expiryDate: "Jan 23",
        meetingLocation: "IKB"
    }
    const newDoc = await addDoc(postings, docData);
}

async function readASingleDocument() {
    const mySnapshot = await getDoc(specialOfTheDay);
    if(mySnapshot.exists()) {
        const docData = mySnapshot.data();
        console.log(`M data is ${JSON.stringify(docData)}`);
    }
}

console.log('firestore yay');
