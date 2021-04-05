import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBhgac7HNOM9ZZIHXJxSr2Zg0hjiN8UrmI",
	authDomain: "whatsapp-new-next.firebaseapp.com",
	projectId: "whatsapp-new-next",
	storageBucket: "whatsapp-new-next.appspot.com",
	messagingSenderId: "365021452299",
	appId: "1:365021452299:web:c3ee96ecce657a46d2cf0e",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
