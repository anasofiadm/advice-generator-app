document.getElementById('diceButton').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            // Select the element with the class 'advice-text'
            const adviceTextElement = document.querySelector('.advice-text');
            
            // Change the inner text of the selected element to the new advice
            adviceTextElement.textContent = `"${data.slip.advice}"`;
        })
        .catch(error => {
            console.error('Error fetching the advice:', error);
        });
});
