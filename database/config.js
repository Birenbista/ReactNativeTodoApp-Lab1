// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCXpjvL0LeEQxK35jDapggGZ__0b4fuf3M',
    authDomain: 'reactnativeprojects-a368d.firebaseapp.com',
    projectId: 'reactnativeprojects-a368d',
    storageBucket: 'reactnativeprojects-a368d.appspot.com',
    messagingSenderId: '127659811196',
    appId: '1:127659811196:web:5e080c3835b23d2038c4f9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
