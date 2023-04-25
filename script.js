const name = prompt("Hey buddy ! whatsup !?");
const occasion = prompt("Is it your birthday today?");

document.querySelector("#header h1").innerHTML = `Happy ${occasion}!`;
document.querySelector("#name").innerHTML = name;
