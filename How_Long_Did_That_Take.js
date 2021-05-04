Number.prototype.isPrime = function() {
  for( let i=2; i<this; i++ ) {
    if( this % i === 0 ) {
      return false;
    }
  }
  return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
  if( num.isPrime() ) {
    primeCount++;
  }
  num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// The 10,000th prime number is 104729
// This took 76075.81859993935 milliseconds to run


// isPrime() optimized
Number.prototype.isPrime = function() {
  for( let i=2; i<Math.sqrt(this); i++ ) {
    if( this % i === 0 ) {
      return false;
    }
  }
  return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
  if( num.isPrime() ) {
    primeCount++;
  }
  num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// The 10,000th prime number is 104003
// This took 355.0628001689911 milliseconds to run


// Fibonacci
// recursive
const { performance } = require('perf_hooks');
const start = performance.now();
function rFib( n ) {
  if ( n < 2 ) {
    return n;
  }
  return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// This took 2.294100046157837 milliseconds to run

// iterative - faster than recursive
const { performance } = require('perf_hooks');
const start = performance.now();
function iFib( n ) {
  const vals = [ 0, 1 ];
  while(vals.length-1 < n) {
    let len = vals.length;
    vals.push( vals[len-1] + vals[len-2] );
  }
  return vals[n];
}
iFib(20);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// This took 0.048399925231933594 milliseconds to run


// Reversing a string
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);

//more efficient
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed2 = str => [...str].reverse().join("");
console.log(reversed2(story));
