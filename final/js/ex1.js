function lastItem(fruits) {
    const outputDiv = document.getElementById('output');
    fruits.sort();
    const lastAlphabetical = fruits[fruits.length - 1];
    outputDiv.innerHTML = `Original Array: ${fruits.join(', ')}<br>Last Alphabetical Item: ${lastAlphabetical}`;
}

function getUserInputs() {
    let numberOfItems = parseInt(prompt('How many items would you like to enter? Choose between 2 and 4.'));
    while (isNaN(numberOfItems) || numberOfItems < 2 || numberOfItems > 4) {
        numberOfItems = parseInt(prompt('Invalid input. Please enter a number between 2 and 4.'));
    }

    const items = [];
    for (let i = 0; i < numberOfItems; i++) {
        items.push(prompt(`Enter item ${i + 1} of ${numberOfItems}:`));
    }

    items.sort(); // Sort the items alphabetically

    const displayArea = document.getElementById('userInputResults');
    displayArea.innerHTML = `<h2>You entered:</h2><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}
