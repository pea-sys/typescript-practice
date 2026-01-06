function getFizzBuzzsStr(num: number): string {
  let output = "FizzBuzz";
  if ( num % 3 !== 0 && num % 5 !== 0 ){
    output = String(num);
  }
  else if ( num % 3 === 0 && num % 5 !== 0 ){
    output ="Fizz";
  }
  else if ( num % 3 !== 0 && num % 5 === 0 ){
    output ="Buzz";
  }
  return output;
}
for( let i=0; i<=100; i++ ) {
  const message = getFizzBuzzsStr(i);
  console.log(message);
}
// type User = {
//   name: string;
//   age: number;
//   premiumUser: boolean;
// };

// const data:string = `
// uhyo,99,1
// Bob,25,0
// Charlie,35,1
// `;

// const lines = data.trim().split("\n");
// const users: User[] = lines.map(line => {
//   const [name, ageStr, premiumUserStr] = line.split(",");
//   return {
//     name: name,
//     age: Number(ageStr),
//     premiumUser: premiumUserStr === "1"
//   };
// });


// for (const user of users){
//   if (user.premiumUser){
//     console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
//   }  else {
//     console.log(`${user.name}(${user.age})はプレミアムユーザーではありません。`);
//   }
// }