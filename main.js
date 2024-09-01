document.getElementById('diceButton').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            // Select the element with the class 'advice-text'
            const adviceTextElement = document.querySelector('.advice-text');
            
            // Change the inner text of the selected element to the new advice
            adviceTextElement.textContent = `"${data.slip.advice}"`;
            
            // Generate a random number between 001 and 300
            let randomID = Math.floor(Math.random() * 300) + 1;
            let formattedID = randomID.toString().padStart(3, '0');

            // Update the advice text
            adviceTextElement.textContent = `"${advice}"`;

            // Update the advice number text
            adviceNumberElement.textContent = `ADVICE #${formattedID}`;
        
        })
        .catch(error => {
            console.error('Error fetching the advice:', error);
        });
});
