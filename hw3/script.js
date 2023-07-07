//Task 1-The combination of the two arrays without any duplicate surnames.

const clients1 = ["Gilbert", "Salvatore", "Pierce", "Summers", "Forbes", "Donovan", "Bennett"];
const clients2 = ["Pierce", "Zaltzman", "Salvatore", "Michaelson"];
const combination = [...new Set([...clients1, ...clients2])];
console.log(combination);

//Task 2- an array charactersShortInfo based on characters's array, which consists of objects with only 3 fields - name, surname, and age.

const characters = [
    {
        name: "Elena",
        lastName: "Gilbert",
        age: 17,
        gender: "woman",
        status: "human"
    },
    {
        name: "Caroline",
        lastName: "Forbes",
        age: 17,
        gender: "woman",
        status: "human"
    },
    {
        name: "Alaric",
        lastName: "Saltzman",
        age: 31,
        gender: "man",
        status: "human"
    },
    {
        name: "Damon",
        lastName: "Salvatore",
        age: 156,
        gender: "man",
        status: "vampire"
    },
    {
        name: "Rebekah",
        lastName: "Mikaelson",
        age: 1089,
        gender: "woman",
        status: "vampire"
    },
    {
        name: "Klaus",
        lastName: "Mikaelson",
        age: 1093,
        gender: "man",
        status: "vampire"
    }
];
const charactersShortInfo = characters.map(({ name, lastName, age }) => {
    return {
      name,  surname: lastName, age,
    };
  });
  console.log(charactersShortInfo);

//Task 3-destructuring assignment 

const user1 = {
    name: "John",
    years: 30
  };
const { name, years: age, isAdmin = false } = user1;
console.log(`Name: ${name} Age: ${age} isAdmin: ${isAdmin}`);

//Task 4- create a complete profile

const satoshi2020 = {
    name: 'Nick',
    surname: 'Sabo',
    age: 51,
    country: 'Japan',
    birth: '1979-08-21',
    location: {
      lat: 38.869422, 
      lng: 139.876632
    }
  }
  
  const satoshi2019 = {
    name: 'Dorian',
    surname: 'Nakamoto',
    age: 44,
    hidden: true,
    country: 'USA',
    wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    browser: 'Chrome'
  }
  
  const satoshi2018 = {
    name: 'Satoshi',
    surname: 'Nakamoto', 
    technology: 'Bitcoin',
    country: 'Japan',
    browser: 'Tor',
    birth: '1975-04-05'
  }
  const fullProfile = {...satoshi2018, ...satoshi2019,...satoshi2020};
  console.log(fullProfile);
  
  //Task 5- add one more book to it without modifying the existing array

  const books = [{
    name: 'Harry Potter',
    author: 'J.K. Rowling'
  }, {
    name: 'Lord of the rings',
    author: 'J.R.R. Tolkien'
  }, {
    name: 'The witcher',
    author: 'Andrzej Sapkowski'
  }];
  
  const bookToAdd = {
    name: 'Game of thrones',
    author: 'George R. R. Martin'
  }
const all = [...books, bookToAdd];
console.log(all);

//Task 6- Add properties age and salary to it without modifying the original object

const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
  }
const properties ={
    ...employee,
    age: 30,
    salary:3000
}
console.log(properties)

//Task 7- Complete the code

const array = ['value', () => 'showValue'];
// Write the code here
const [value,showValue] = array
alert(value); // should output 'value'
alert(showValue()); // should output 'showValue'
