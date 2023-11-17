document.addEventListener('DOMContentLoaded', function () {
    const summarizeForm = document.getElementById('summarize-form');
    const summarizedOutput = document.getElementById('summarized-output');
    
    document.getElementById('summarize-button').addEventListener('click', async function () {
        const text = document.getElementById('text-input').value;

        // Log input text
        console.log('Input Text:', text);

        // Display loading message or spinner while waiting for the response
        summarizedOutput.innerHTML = 'Summarizing...';

        const response = await fetch('/summarize_text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (response.status === 200) {
            const data = await response.json();
            const summarizedText = data.data;

            // Log the summarized output
            console.log('Summarized Output:', summarizedText);

            // Display the summarized output
            summarizedOutput.innerHTML = summarizedText;
        } else {
            // Log the error if any
            console.error('Error:', response.statusText);

            // Display an error message
            summarizedOutput.innerHTML = 'Unable to summarize';
        }
    });
});
