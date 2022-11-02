// import animals, { useAnimals } from "./data";

// console.log(animals);

// //names used when destructuring must be unique bc they cannot be used again for another value
// const [cat, dog] = animals; //destructuring array

// console.log(dog);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

//destructure properties from object
//the names used here must be exactly as those written in the properties
//const { name, sound } = cat;
// console.log(sound);

//we can assign diff var names to the properties by doing the following
// const { name: catName, sound: catSound } = cat;
// console.log(catName);

//we can also give properties default values if they do not contain a value
//e.g. if name is undefined then give it the following value
// const { name = "Fluffy", sound = "Purr" } = cat;
// console.log(catName);

//destructuring nested objects
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water },
// } = cat;

// console.log(water);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
console.log(tesla.model);

const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;

const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
