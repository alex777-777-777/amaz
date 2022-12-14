import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref, set } from "firebase/database";
import { uid } from "uid";
const firebaseConfig = {
  apiKey: "AIzaSyBQWLKkAbVJM3uZOSxTgM8-1hRmrIFdDx8",
  authDomain: "money-i.firebaseapp.com",
  databaseURL: "https://money-i-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "money-i",
  storageBucket: "money-i.appspot.com",
  messagingSenderId: "806013377959",
  appId: "1:806013377959:web:cfeacdc862cfa15fce6a82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const writeTodataBase = (data) => {
  const date = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/Minsk",
  });
  const postId = uid();
  set(ref(db, `users/` + postId), {
    name: data.name,
    email: data.email,
    phone: data.phone,
    answers: data.answer,
    date: date,
    direction: "AMAZONAOff",
  });
};
export default db;
