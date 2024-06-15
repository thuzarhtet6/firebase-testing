import firebase from "firebase/compat/app";

const database = firebase.database();

function addUser(userId,name,email,imageUrl){
    firebase.database().ref('users/'+userId).set({
        username: name,
        email: email,
        profile_url: imageUrl
    })
}

addUser('user_1',"Mary","mary123@gmail.com","https://www.google.com/imgres?q=a%20girl&imgurl=https%3A%2F%2Fscriptshadow.net%2Fwp-content%2Fuploads%2F2019%2F08%2FScreen-Shot-2019-08-13-at-8.09.58-PM.png&imgrefurl=https%3A%2F%2Fscriptshadow.net%2Fscreenplay-review-just-a-girl%2F&docid=qYsGTNWWEQFqUM&tbnid=nhL_LDX2jf7YNM&vet=12ahUKEwjX3rKk4rqGAxWXTWwGHRfuAUAQM3oECHkQAA..i&w=810&h=764&hcb=2&ved=2ahUKEwjX3rKk4rqGAxWXTWwGHRfuAUAQM3oECHkQAA");

