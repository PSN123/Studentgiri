import firebase from 'firebase/app';
import 'firebase/firestore';
import config from './compenents/Firebaseconfig';

firebase.initializeApp(config);

const db=firebase.firestore();

export default db;