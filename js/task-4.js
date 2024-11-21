function getShippingCost(country) {
    let price;
    
    switch (country) {
      case "China":
        price = 100;
        break;
      case "Chile":
        price = 250;
        break;
      case "Australia":
        price = 170;
        break;
      case "Jamaica":
        price = 120;
        break;
      default:
        return "Sorry, there is no delivery to your country";
    }
    
    return `Shipping to ${country} will cost ${price} credits`;
  }
  
console.log(getShippingCost("Australia"));  // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany"));    // "Sorry, there is no delivery to your country"

// Wyświetlanie wyników na stronie
const task4ResultsDiv = document.getElementById('task-4-results');
task4ResultsDiv.innerHTML += `<p>${getShippingCost("Australia")}</p>`;
task4ResultsDiv.innerHTML += `<p>${getShippingCost("Germany")}</p>`;
task4ResultsDiv.innerHTML += `<p>${getShippingCost("China")}</p>`;
task4ResultsDiv.innerHTML += `<p>${getShippingCost("Chile")}</p>`;