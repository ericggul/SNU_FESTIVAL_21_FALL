import { miniGameCollectionRef } from '@U/initializer/firebase';

export function fetchMiniGameFromFirestore(user) {
  return miniGameCollectionRef.doc(user.uid).get().then((doc) => (doc.exists ? doc.data() : null));
}

export function setPlaceInFirestore(user, places) {
  console.log('setPlaceInFirestore, api', places);
  miniGameCollectionRef.doc(user.uid).set({
    place: places,
  }, { merge: true }).then();
}

export function setHandwritingInFirestore(user, handwritings) {
  console.log('setPlaceInFirestore, api', handwritings);
  miniGameCollectionRef.doc(user.uid).set({
    handwriting: handwritings,
  }, { merge: true }).then();
  console.log('complete, api');
}

export function setStageInFirestore(user, stage, isCompleted) {
  miniGameCollectionRef.doc(user.uid).set({
    [stage]: isCompleted,
  }, { merge: true }).then();
}
