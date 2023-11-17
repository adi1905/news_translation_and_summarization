function analyzeSentiment() {
    // Get the news text from the textarea
    const newsText = document.getElementById('news-text').value;
    console.log('Input Text:', newsText);

    // Check if the text is not empty
    if (newsText.trim() === '') {
        alert('Please enter news text for analysis.');
        return;
    }

    // Get the analyze button
    const analyzeButton = document.querySelector('.analyze-button');

    // Disable the button and change text to 'Analyzing...'
    analyzeButton.disabled = true;
    analyzeButton.textContent = 'Analyzing...';

    // Make an API request to analyze sentiment
    fetch('/sentiment_analysis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ news_text: newsText }),
    })
    .then(response => response.json())
    .then(data => {
        // Display the sentiment result
        console.log('API Response:', data);
        displaySentimentResult(data);

        // Enable the button and change text back to 'Analyze'
        analyzeButton.disabled = false;
        analyzeButton.textContent = 'Analyze';
    })
    .catch(error => {
        console.error('Error analyzing sentiment:', error);

        // Enable the button and change text back to 'Analyze'
        analyzeButton.disabled = false;
        analyzeButton.textContent = 'Analyze';
    });
}

function displaySentimentResult(data) {
    // Show the result container
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';

    // Display sentiment label and score
    const sentimentLabel = document.getElementById('sentiment-label');
    const sentimentScore = document.getElementById('sentiment-score');
    console.log(data)
    if (data.data && data.data.length > 0) {
        sentimentLabel.textContent = `Sentiment: ${data.data[0].label}`;
        sentimentScore.textContent = `Score: ${data.data[0].score.toFixed(4)}`;
    } else {
        // Handle the case where the data is not in the expected format
        console.error('Invalid data format:', data);
    }
}
