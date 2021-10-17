export function shuffleArray(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

export function getRandomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function sumOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
}
