// const person = {
//   name: "Ashley",
//   age: 22,
//   location: {
//     city: "Mumbai",
//     temp: 99
//   }
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Goo suile",
//   publisher: {
//     name: "Pingu"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

// const address = ["new prathamesh", "hello", "how are you", "34324"];

// const [, , greeting = "New York", number] = address;

// console.log(`You are in ${greeting} `);

const item = ["Coffee (hot)", "$2", "$2.5", "$2.75"];
const [coffee, , med] = item;
console.log(`A ${coffee} costs ${med}`);
