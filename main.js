// Define the callback function that will be invoked by the JSONP response
function handleAdviceResponse(data) {
    // Display the advice in an alert box
    alert(data.slip.advice);
}

// Add an event listener to the button with the id 'diceButton'
document.getElementById('diceButton').addEventListener('click', function() {
    // Create a new script element
    const script = document.createElement('script');
    
    // Set the source to the API URL with the callback parameter
    script.src = 'https://api.adviceslip.com/advice?callback=handleAdviceResponse';
    
    // Append the script to the body (or head), which triggers the request
    document.body.appendChild(script);
    
    // After the script loads, it can be removed
    script.onload = function() {
        document.body.removeChild(script);
    };
});
