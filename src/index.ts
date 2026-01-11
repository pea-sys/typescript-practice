// function getFizzBuzzsStr(num: number): string {
//   let output = "FizzBuzz";
//   if ( num % 3 !== 0 && num % 5 !== 0 ){
//     output = String(num);
//   }
//   else if ( num % 3 === 0 && num % 5 !== 0 ){
//     output ="Fizz";
//   }
//   else if ( num % 3 !== 0 && num % 5 === 0 ){
//     output ="Buzz";
//   }
//   return output;
// }
// for( let i=0; i<=100; i++ ) {
//   const message = getFizzBuzzsStr(i);
//   console.log(message);
// }

// function map(array: number[], callback: (num: number) => number): number[] {
//   const result: number[] = [];
//   for (let i = 0; i < array.length; i++) {
//     const mapped = callback(array[i]);
//     result.push(mapped);
//   }
//   return result;
// }
// const numbers = [1, 1, 2, 3, 5, 8, 13];
// const result = map(numbers, (x) => x * 10);
// console.log(result);
 
  

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

// class User{
//   readonly name: string;
//   readonly age: number;
//   constructor(name:string, age:number){
//     if (name === ""){
//       throw new Error("名前が空です");
//     }
//     this.name = name;
//     this.age = age;
//   }
//   getMessage(message:string): string {
//     return `${this.name}(${this.age}):${message}`;
//   }
// }



// const uhyo = new User("uhyo", 26);
// console.log(uhyo.getMessage("こんにちは"));

type Option<T> = {
  tag: "some";
  value: T;
} | {
  tag: "none";  
};

function ConsoleLog(obj:Option<number>): void {
  if (obj.tag === "some") {
    console.log(obj.value);
  } 
}

ConsoleLog({ tag: "some", value: 42 });

 