document.getElementById('diceButton').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const adviceTextElement = document.querySelector('.advice-text');
            const adviceNumberElement = document.querySelector('.advice-number');

            // Get the advice text and ID from the API response
            const advice = data.slip.advice;
            let adviceID = data.slip.id;

            // Format the ID to be 3 digits (e.g., 001, 117)
            let formattedID = adviceID.toString().padStart(3, '0');

            // Update the advice text in the element
            adviceTextElement.textContent = `"${advice}"`;

            // Update the advice number in the element
            adviceNumberElement.textContent = `ADVICE #${formattedID}`;
        })
        .catch(error => {
            console.error('Error fetching the advice:', error);
        });
});
