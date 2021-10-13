import { missionCollectionRef } from '@U/initializer/firebase';

export function fetchMissionsFromFirestore(user) {
  console.log(missionCollectionRef.doc(user.uid).get());
  return missionCollectionRef.doc(user.uid).get().then((doc) => (doc.exists ? doc.data() : null));
}

export function setLightInFirestore(user, lights) {
  return missionCollectionRef.doc(user.uid).set({
    light: lights,
  }, { merge: true });
}

export function setMissionInFirestore(user, mission, isCompleted) {
  return missionCollectionRef.doc(user.uid).set({
    [mission]: isCompleted,
    isLate: true,
  }, { merge: true });
}
