for( let i=0; i<=100; i++ ) {
  let output = "FizzBuzz";
  if ( i % 3 !== 0 && i % 5 !== 0 ){
    output = String(i);
  }
  else if ( i % 3 === 0 && i % 5 !== 0 ){
    output ="Fizz";
  }
  else if ( i % 3 !== 0 && i % 5 === 0 ){
    output ="Buzz";
  }
  console.log(output);
}