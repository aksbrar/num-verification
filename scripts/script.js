// Imports
import { countries } from "./country.js";
import {verifynumber} from '../api/api.js';

// constant Variables
const counOption = document.querySelector("#options");
const form = document.querySelector(".num-input")
const numberInput = document.querySelector("#ph-number")

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

//get the data from the api
form.addEventListener('submit', async function(e){
  e.preventDefault()
  const number =  numberInput.value
  const code = counOption.value

  const result = await verifynumber(number, code)
  console.log(result)
})




