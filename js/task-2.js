function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
      return message;
    } else {
      return message.slice(0, maxLength) + '...';
    }
  }
  
console.log(formatMessage("Curabitur ligula sapien", 16));  // "Curabitur ligula..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30));  // "Vestibulum facilisis purus nec"
  
// Wyświetlanie wyników na stronie
const task2ResultsDiv = document.getElementById('task-2-results');
task2ResultsDiv.innerHTML += `<p>${formatMessage("Curabitur ligula sapien", 16)}</p>`;
task2ResultsDiv.innerHTML += `<p>${formatMessage("Vestibulum facilisis purus nec", 23)}</p>`;
task2ResultsDiv.innerHTML += `<p>${formatMessage("Vestibulum facilisis purus nec", 30)}</p>`;