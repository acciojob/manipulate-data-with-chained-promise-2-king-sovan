function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function filterEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      document.getElementById('output').innerText = evenNumbers.join(', ');
      resolve(evenNumbers);
    }, 1000);
  });
}

function multiplyEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map(num => num * 2);
      document.getElementById('output').innerText = multipliedNumbers.join(', ');
      resolve(multipliedNumbers);
    }, 2000);
  });
}

getNumbers()
  .then(numbers => filterEvenNumbers(numbers))
  .then(evenNumbers => multiplyEvenNumbers(evenNumbers)) 
  .catch(err => console.error(err)); 

()) => { 
  cy.visit(baseUrl + "/main.html"); 
  cy.get("#output").should("contain", ""); 

  // First promise
  cy.wait(3000); 
  cy.get("#output").should("contain", "2,4"); 

  // Second Promise
  cy.wait(1000); 
  cy.get("#output").should("contain", "4,8"); 
}
