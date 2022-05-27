//set local storage
localStorage.setItem(`name`, `mrinx`);
localStorage.setItem(`age`, 7);

//get local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age')

console.log(name, age);

///update local storage
// localStorage.setItem('name', 'mario');
// localStorage.age = 24

// name = localStorage.getItem('name');
// age = localStorage.getItem('age')
// console.log(name, age)


//remove local storage
// localStorage.removeItem('name');
// localStorage.removeItem('age')
localStorage.clear()

age = localStorage.getItem('name');
name = localStorage.getItem('age');

console.log(name,age)