function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
  }
  
console.log(checkForSpam("Latest technology news"));  // false
console.log(checkForSpam("Amazing sale, only tonight!"));  // true

// Wyświetlanie wyników na stronie
const task3ResultsDiv = document.getElementById('task-3-results');
task3ResultsDiv.innerHTML += `<p>${checkForSpam("Latest technology news")}</p>`;
task3ResultsDiv.innerHTML += `<p>${checkForSpam("Amazing sale, only tonight!")}</p>`;
task3ResultsDiv.innerHTML += `<p>${checkForSpam("Get best sale offers now!")}</p>`;