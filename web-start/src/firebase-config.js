/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBdqfD2iLgZsbTQx9FmhPgvdhb1TEWYvUg",
  authDomain: "friendlychat-e464b.firebaseapp.com",
  projectId: "friendlychat-e464b",
  storageBucket: "friendlychat-e464b.appspot.com",
  messagingSenderId: "635788289622",
  appId: "1:635788289622:web:af745c622bab70ab0d3df7"
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}