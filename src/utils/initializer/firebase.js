import { FIREBASE_CONFIG } from '@/config';
import 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';

if (FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export const firestore = firebase.firestore();
export const guestBookCollectionRef = firestore.collection('guest-book');

export const auth = firebase.auth();
