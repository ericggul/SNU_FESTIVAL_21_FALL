import { pokemongoCollectionRef } from '@U/initializer/firebase';

export function fetchPokemongosFromFirestore(user) {
  console.log('inside fetchpokemongos');
  console.log('1', pokemongoCollectionRef);
  console.log('2', pokemongoCollectionRef.doc(user.uid));
  console.log('3', pokemongoCollectionRef.doc(user.uid).get());
  console.log('4', pokemongoCollectionRef.doc(user.uid).get().then((doc) => (doc.exists ? doc.data() : null)));
  return pokemongoCollectionRef.doc(user.uid).get().then((doc) => (doc.exists ? doc.data() : null));
}

export function setPokemongoInFirestore(user, pokemongo, isCompleted) {
  console.log('set1', pokemongoCollectionRef);
  console.log('set2', pokemongoCollectionRef.doc(user.uid));
  console.log('set3', pokemongoCollectionRef.doc(user.uid).get());
  return pokemongoCollectionRef.doc(user.uid).set({
    [pokemongo]: isCompleted,
    isLate: true,
  }, { merge: true });
}
