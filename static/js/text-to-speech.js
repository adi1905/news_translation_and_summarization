// text-to-speech.js

document.addEventListener("DOMContentLoaded", function() {
    // Add a click event listener to the "Hear" button
    document.getElementById("hear-button").addEventListener("click", function() {
        // Get the text from the right half
        var translatedText = document.getElementById("translated-output").textContent;

        // Get the selected language from the left half
        var selectedLanguage = document.getElementById("language-select").value;

        // Get the language code from the language mapping
        var languageCode = getLanguageCode(selectedLanguage);

        // Log statements (for debugging)
        console.log("Text to speak: " + translatedText);
        console.log("Selected language: " + selectedLanguage);
        console.log("Language code: " + languageCode);

        // Call the text-to-speech API
        textToSpeechAPI(translatedText, languageCode);
    });
});

// Define your language mapping dictionary
var languageMapping = {
    "Hindi": "hi",
    "Marathi": "mr",
    "Bengali": "bn",
    "Telugu": "te",
    "Tamil": "ta",
    "Gujarati": "gu",
    "Kannada": "kn",
    "Urdu": "ur",
    "Punjabi": "pa",
    "Oriya": "or",
    "Malayalam": "ml",
    "Assamese": "as",
    "Nepali": "ne",
    "Sanskrit": "sa",
    "French": "fr",
    "Spanish": "es",
    "German": "de",
    "Italian": "it",
    "Japanese": "ja",
    "Chinese": "zh",
    "Russian": "ru",
    "Arabic": "ar"
};

// Function to get the language code from the language mapping
function getLanguageCode(language) {
    return languageMapping[language];
}

// Function to call the text-to-speech API
function textToSpeechAPI(text, languageCode) {
    // Make an API request to the Flask route
    // You need to implement this part to send a POST request with the text and language code
    // You can use fetch() or XMLHttpRequest to make the request to /text_to_speech
    // and pass the data as JSON

    // For example (using fetch):
    fetch("/text_to_speech", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text, language: languageCode })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the API response here
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
