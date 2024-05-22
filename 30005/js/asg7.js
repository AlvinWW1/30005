function checkNumber() {
    const numInput = document.getElementById('numberInput').value;
    const num = parseInt(numInput);
    if (!isNaN(num) && num >= 10000 && num <= 99999) {
        const isEven = num % 2 === 0;
        document.getElementById('output').innerText = `The number ${num} is ${isEven ? "even" : "odd"}.`;
    }
    else {
        document.getElementById('output').innerText = 'Please enter a valid 5-digit number.';
    }
}

function checkTriviaAnswer() {
    const answer = document.getElementById('triviaAnswer').value.trim();
    const responseElement = document.getElementById('triviaResponse');
    const correctAnswer = 'Paris';
    if (answer.toLowerCase() === correctAnswer.toLowerCase()){
        responseElement.textContent = `Correct! You guessed: ${answer}`;
    }
    else{
        responseElement.textContent = `Incorrect. You guessed: ${answer}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const triviaInput = document.getElementById('triviaAnswer');
    triviaInput.addEventListener('keydown', function(event){
        if (event.key === 'Enter') {
            event.preventDefault();
            checkTriviaAnswer();
        }
    });
    
    const numberInput = document.getElementById('numberInput');
    numberInput.addEventListener('keydown', function(event){
        if (event.key === 'Enter'){
            event.preventDefault();
            checkNumber();
        }
    });
});