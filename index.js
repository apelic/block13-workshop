// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(f) {
  console.log('f is ', f);
  let c = f - 32 * 5/9;
  console.log('c is ', c);
  return c;

}

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 * 

 */
function describeTemperature(f) {
  let description = '';
  const tempC = f - 32 * 5/9

  if(tempC < 32){
    console.log('c is less than 32');
    description = "very cold";
  } else if(tempC < 64){
    console.log('c is less than 64');
    description = "cold";
  } else if(tempC < 86){
    console.log('c is less than 86');
    description = "warm";
  } else if(tempC < 100){
    console.log('c is less than 100');
    description = "hot"; 
  } else if(tempC >= 100){
    console.log('c is 100 or more');
    description = "very hot";
  } 
  
  return description
}




/**
 * @param {number} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */
function getRandomInt(limit) {
  console.log('limit is ', limit);
  return Math.floor (Math.random() * limit);
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${description}.`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
