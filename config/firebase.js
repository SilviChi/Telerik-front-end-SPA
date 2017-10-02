
firebase.initializeApp({
	apiKey: "AIzaSyDx-TkLw8OwDNdnIAHARmHgjH4XnclKgzE",
	authDomain: "mycuisine-6f6e4.firebaseapp.com",
	databaseURL: "https://mycuisine-6f6e4.firebaseio.com",
	projectId: "mycuisine-6f6e4",
	storageBucket: "mycuisine-6f6e4.appspot.com",
	messagingSenderId: "497906490856"
});
export default firebase.database().ref();