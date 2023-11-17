document.addEventListener("DOMContentLoaded", function() {
    const translationForm = document.getElementById('translation-form');
    const translatedOutput = document.getElementById('translated-output');
    const copyButton = document.getElementById('copy-button');

    translationForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const text = document.getElementById('text-input').value;
        const selectedLanguage = document.getElementById('language-select');
        const selectedLanguageOption = selectedLanguage.options[selectedLanguage.selectedIndex];
        const language = selectedLanguageOption.text; // Get the selected language
        
        // Log user input to the console
        console.log('User Input:', text);
        console.log('Selected Language:', language);
        
        // Prepare the data to send to the API
        const data = { text, language };
        
        const response = await fetch('/translate_text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        if (response.status === 200) {
            const responseData = await response.json();
            const translatedText = responseData.success;
            translatedOutput.textContent = translatedText;
            
            // Print the translated text to the console
            console.log('Translated Text:', translatedText);
        } else {
            translatedOutput.textContent = 'Unable to translate';
            console.error('Unable to translate');
        }
    });

    copyButton.addEventListener("click", function() {
        const range = document.createRange();
        range.selectNode(translatedOutput);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        copyButton.classList.add("copy-success");
        copyButton.querySelector(".clipboard").textContent = "✅";
        copyButton.querySelector(".copy-text").textContent = "Copied";
    });
});
