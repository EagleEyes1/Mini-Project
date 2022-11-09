// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRp28rYYPTfmwfmlB01N87WEdnakt3s8Q",
    authDomain: "miniproject123-2663b.firebaseapp.com",
    projectId: "miniproject123-2663b",
    storageBucket: "miniproject123-2663b.appspot.com",
    messagingSenderId: "27096455826",
    appId: "1:27096455826:web:7aa1498d43106c2b74644b",
    measurementId: "G-VJS0BEVFPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)