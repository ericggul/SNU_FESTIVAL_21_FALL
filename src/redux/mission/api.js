import { missionCollectionRef } from '@U/initializer/firebase';

export function fetchMissionsFromFirestore(user) {
  console.log(missionCollectionRef.doc(user.uid).get());
  return missionCollectionRef.doc(user.uid).get().then((doc) => (doc.exists ? doc.data() : null));
}

export function setMissionInFirestore(user, mission, isCompleted) {
  console.log('setmission1', missionCollectionRef.doc(user.uid));
  return missionCollectionRef.doc(user.uid).set({
    [mission]: isCompleted,
    isLate: true,
  }, { merge: true });
}
