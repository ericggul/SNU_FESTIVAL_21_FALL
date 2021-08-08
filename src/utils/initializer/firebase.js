import { FIREBASE_CONFIG } from '@/config';
import 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';

if (FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export const firestore = firebase.firestore();
export const guestBookCollectionRef = firestore.collection('guest-book');
export const miniGameCollectionRef = firestore.collection('mini-game');
export const missionCollectionRef = firestore.collection('mission');
export const pokemongoCollectionRef = firestore.collection('pokemongo');
export const linkCollectionRef = firestore.collection('link');
export const votePhoneCertCollectionRef = firestore.collection('vote-phone-cert');
export const voteSingStealerCollectionRef = firestore.collection('vote-sing-stealer');
export const competitionCollectionRef = firestore.collection('competition');
export const groupRankingCollectionRef = firestore.collection('group-ranking');
export const jabtiCollectionRef = firestore.collection('jabti');

export const auth = firebase.auth();
