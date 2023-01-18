function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(5, 4);

console.log(sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(4.5);

console.log(minutes);

function getGreeting(name) {
  return 'Hello there, ' + name + '.';
}

var greeting = getGreeting('General Kenobi');

console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var sumTimes5 = addAndMultiplyBy5(2, 3);

console.log(sumTimes5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multDiv5 = multiplyAndDivideBy5(10, 4);

console.log(multDiv5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtracted = subtractTwoNumbers(25, 10);

console.log(subtracted);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(10);

console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Kristian', 'Krog');

console.log(fullName);

function cube(number) {
  return Math.pow(number, 3);
}

var cubed = cube(2);

console.log(cubed);
