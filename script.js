function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function filterEvenNumbers(numbers) {
  return new Promise((resolve) => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    document.getElementById('output').innerText = evenNumbers.join(','); // Removed space after comma
    resolve(evenNumbers);
  });
}

function multiplyEvenNumbers(numbers) {
  return new Promise((resolve) => {
    const multipliedNumbers = numbers.map(num => num * 2);
    document.getElementById('output').innerText = multipliedNumbers.join(','); // Removed space after comma
    resolve(multipliedNumbers);
  });
}

getNumbers()
  .then(numbers => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(numbers);
      }, 1000);
    });
  })
  .then(filterEvenNumbers)
  .then(evenNumbers => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(evenNumbers);
      }, 2000);
    });
  })
  .then(multiplyEvenNumbers)
  .catch(err => console.error(err));