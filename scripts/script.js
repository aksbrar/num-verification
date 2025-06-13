// Imports
import { countries } from "./country.js";

// constant Variables
const counOption = document.querySelector("#options");

// add country names and codes into options
counOption.innerHTML += countries.map(c => {
  if (c.name.length>15){
    let slicedName = c.name.slice(0, 15)
    return `<option value="${c.code}">${slicedName}(${c.code})</option>`
  }
  else {
    return `<option value="${c.code}">${c.name}(${c.code})</option>`
  }
}).join("")



