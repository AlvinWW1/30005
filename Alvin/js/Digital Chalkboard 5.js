function lastItem(fruits, outputId) {
    fruits.sort((a,b) => a.localeCompare(b));
    const lastAlphabetical = fruits[fruits.length - 1];
    const outputDiv = document.getElementById(outputId);
    if (!outputDiv.innerHTML){
        outputDiv.innerHTML = `Fruits sorted: ${fruits.join(',')}<br>Last Alphabetical Item: ${lastAlphabetical}`;
    }
    toggleVisibility(outputId);
}

function lastItem(fruits, outputId){
    fruits.sort((a,b) => a.localeCompare(b));
    const lastAlphabetical = fruits[fruits.length - 1];
    const outputDiv = document.getElementById(outputId);
    outputDiv.innerHTML = `Fruits sorted: ${fruits.join(',')}<br>Last Alphabetical Item: ${lastAlphabetical}`;
}

function lastItem(fruits,outputId) {
    fruits.sort((a,b) => a.localeCompare(b));
    const lastAlphabetical = fruits[fruits.length - 1];
    const outputDiv = document.getElementById(outputId);
    outputDiv.innerHTML = `Fruits sorted: ${fruits.join(',')}<br>Last Alphabetical Item: ${lastAlphabetical}`;
}

function getAndSort(){
    let numberOfCategories = parseInt(prompt('How many categories would you like to enter? Choose between 2 and 4.'));
    while (isNaN(numberOfCategories) || numberOfCategories < 2 || numberOfCategories > 4){
        numberOfCategories = parseInt(prompt('Invalild input. Please enter a number between 2 and 4'));
    }
    let categories = [];
    let items = [];
    let sortedItems = [];

    for(let i=0; i < numberOfCategories; i++){
        categories.push(prompt(`Enter category ${i + i} of ${numberOfCategories};`));
    }

    for (let category of categories){
        let item = prompt(`Enter one ${category}`);
        items.push(item);
    }

    sortedItems.sort();

    let displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = `<h2> You entered:</h2><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    displayArea.innerHTML = `<h2> I sorted by:</h2><ul>${sortedItems.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

document.getElementById('sortButton').addEventListener('click', getAndSort);