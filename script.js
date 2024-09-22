// Function that returns a promise resolving an array of numbers after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to filter out odd numbers
function filterEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      document.getElementById('output').innerText = evenNumbers.join(', ');
      resolve(evenNumbers);
    }, 1000);
  });
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map(num => num * 2);
      document.getElementById('output').innerText = multipliedNumbers.join(', ');
      resolve(multipliedNumbers);
    }, 2000);
  });
}

// Execute the promise chain
getNumbers()
  .then(numbers => filterEvenNumbers(numbers)) // Filter out odd numbers
  .then(evenNumbers => multiplyEvenNumbers(evenNumbers)) // Multiply even numbers by 2
  .catch(err => console.error(err)); // Handle any errors

