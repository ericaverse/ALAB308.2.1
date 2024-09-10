//Part 1: Growing Pains
let radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const plantArea = 0.8;
let limit = area / plantArea;
//output demarcation
console.log(`-------------------------`);
console.log(`-------------------------`);
/*--*/
console.log(
  `The limit for a garden with a ` +
    radius +
    `-meter radius is ` +
    limit.toFixed(2) +
    ` plants.`
);

let week = 1;
let currentPlants = 20; //`The area is starting with 20 plants.`
let ratio = currentPlants / limit;
let currentCapacity = ratio.toFixed(3) * 100;
//Week 1
console.log(`START`);
console.log(
  `Week:`,
  week,
  `Plants:`,
  currentPlants,
  `Current Capacity: `,
  currentCapacity + `%`,
  `Plant.`
);
controlFlow();
controlFlow();
controlFlow();

function controlFlow(n) {
  week += 1;
  currentPlants = currentPlants * 2; //`The plants double in number every week.`
  ratio = currentPlants / limit;
  currentCapacity = ratio.toFixed(3) * 100;

  if (ratio <= 0.5) {
    console.log(
      `Week:`,
      week,
      `Plants:`,
      currentPlants,
      `Current Capacity: `,
      currentCapacity + `%`
    );
    console.log(`Okay to Plant.`);
  } else if (ratio < 0.8) {
    console.log(
      `Week:`,
      week,
      `Plants:`,
      currentPlants,
      `Current Capacity: `,
      currentCapacity + `%`
    );
    console.log(`Monitor.`);
  } else if (ratio >= 0.8) {
    console.log(
      `Week:`,
      week,
      `Plants:`,
      currentPlants,
      `Current Capacity: `,
      currentCapacity + `%`
    );
    console.log(`Prune!`);
  } else {
    console.log(
      `Week:`,
      week,
      `Plants:`,
      currentPlants,
      `Current Capacity: `,
      currentCapacity + `%`
    );
    console.log(`Check your math.`);
  }
}

//Part 2: Thinking Bigger

//Part 3: Errors in Judgement
