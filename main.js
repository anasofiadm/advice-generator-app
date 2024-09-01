
document.getElementById('diceButton').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            alert(data.slip.advice);
        })
        .catch(error => {
            console.error('Error fetching the advice:', error);
        });
});
