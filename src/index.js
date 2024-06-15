// console.log("hello");
// console.log("hello world");
// console.log("hi hi hi");

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { firebaseConfig } from "./library/config.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const usersRef = ref(db, "users");
onValue(usersRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

function writeUserData(userId, name, mail, gender) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    name,
    mail,
    gender,
  })
    .then(() => console.log("Success! User data was added successfully"))
    .catch(() => console.log("User data was not added"));
}

writeUserData(5, "Jones", "jones224@gmail.com", "male");
