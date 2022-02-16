let birth_year = 2006;
let current_year = new Date().getFullYear();
let age = current_year - birth_year;

document.getElementById("age").innerHTML = age;