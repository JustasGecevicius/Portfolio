const config = {
  apiKey: 'AIzaSyAafBYonIsLWISQ0IweqFpHr21-5yVerKA',
  authDomain: 'todo-629f8.firebaseapp.com',
  projectId: 'todo-629f8',
  storageBucket: 'todo-629f8.appspot.com',
  messagingSenderId: '809558641810',
  appId: '1:809558641810:web:cfd1be367d46fe9a196a4b',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
