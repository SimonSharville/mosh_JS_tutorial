// let name = 'Mosh'; // Variable set to string 'Mosh'
// console.log(name);

// // Variable names cannot be a reserved keyword.
// //  Should be meaningful names.
// // Cannot start with a number.
// // Cannot contain a space or hyphen (-).
// // Variable Names are case-sensitive.
// // 

// -----------------------------------------------------------------------
// Operators
// // 01 If...else

// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 20;

if (hour >= 6 && hour < 12 ) 
  console.log('Good morning!');

else if (hour >= 12 && hour < 18 ) 
  console.log('Good afternoon!');

else  
  console.log('Good evening!');


// // 02 switch...case

let role = 'moderator';

switch (role) {
  case 'guest':
    console.log('Guest User');
    break;

    case 'moderator':
      console.log('Moderator User');
      break;
    
    default:
    console.log('Unknown User');
}
// or use
if (role ===  'guest') console.log('Guest');
else if (role ===  'moderator') console.log('Moderator');
else console.log('Unknown User');


// 03 For (Loop)

for (let i = 0; i <= 5; i++){ // i = indext
  // console.log('Hello World', i);
  if (i % 2 !== 0) console.log(i);
}

// 04 While (Loop)
// let i = 0;
// while (i <= 5){
//   if (i % 2 !== 0) console.log(i);
//   i++
// }

// 04 Do-While (Loop)
let i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++
} while (i <= 5);

// 05 Infinate Loops

// 06 for...in (Loop)
const person = {
  name: 'Mosh',
  age: 30
};

for (let key in person)
  console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];
// for (let index in colors)
//   console.log(index, colors[index]);

// 07 for...of (Loop)
for (let color in colors)
  console.log(color);
