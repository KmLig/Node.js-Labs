var name = 'Khiem';
var age = 30;
var hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and user has hobbies: " +
    userHasHobby
  );
}

const add = (a, b) => a + b;
const addOne = a  => a + 1;
const addRandom = () => 1 + 1;

console.log(summarizeUser(name, age, hasHobbies));
console.log(addRandom());

const person = {
    name: 'Khiem',
    age: 30,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  const hobbies = ['Sports', 'Cooking'];
  // for (let hobby of hobbies) {
  //     console.log(hobby);
  // }
  console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
  console.log(hobbies);

setTimeout(()=> {
  console.log('Timer is done!');
}, 2000);