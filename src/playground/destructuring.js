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

const book = {
  title: "Ego is the Enemy",
  author: "Goo suile",
  publisher: {
    name: "Pingu"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;
console.log(publisherName);
