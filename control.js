//Part 1: Growing Pains
let radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const plantArea = 0.8;
let limit = area / plantArea;
console.log(
  `The limit for a garden with a ` +
    radius +
    `-meter radius is ` +
    limit +
    ` plants.`
);

/* Where "n" is the number of plants */
let n = 20; //`The area is starting with 20 plants.`
let week = 1;
let currentPlants = n;
//Week 1
console.log(`Week:`, week, `Plants`, currentPlants);
currentPlants = n * 2; //`The plants double in number every week.`
//Week 2
console.log(`Week:`, (week += 1), `Plants`, currentPlants);

//Part 2: Thinking Bigger

//Part 3: Errors in Judgement
