function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"

function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("hello")); // 5

function capitalizeWords(sentence) {
  return sentence.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

console.log(capitalizeWords("bonjour tout le monde")); 
// "Bonjour Tout Le Monde"

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMax([3, 7, 2, 9, 4])); // 9
console.log(findMin([3, 7, 2, 9, 4])); // 2

function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10


function filterArray(arr) {
  return arr.filter(num => num > 5);
}

console.log(filterArray([1, 6, 3, 8, 2])); // [6, 8]


function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120


function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(9)); // false




function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]
