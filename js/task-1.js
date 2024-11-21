function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
  
    if (totalPrice > customerCredits) {
      return "Insufficient funds";
    } else {
      return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
  }
  
console.log(makeTransaction(5, 3000, 23000));  // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000));  // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(5, 1000, 3000));   // "Insufficient funds"
  
// Wyświetlanie wyników na stronie
const task1ResultsDiv = document.getElementById('task-1-results');
task1ResultsDiv.innerHTML += `<p>${makeTransaction(5, 3000, 23000)}</p>`;
task1ResultsDiv.innerHTML += `<p>${makeTransaction(3, 1000, 15000)}</p>`;
task1ResultsDiv.innerHTML += `<p>${makeTransaction(5, 1000, 3000)}</p>`;