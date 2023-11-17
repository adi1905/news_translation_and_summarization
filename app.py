from flask import Flask,render_template,jsonify,session,request
from translator_code import *
from summarizator_code import *
from sentiment_analyis_code import *
from gtts import gTTS
import tempfile
import os

app = Flask(__name__)


# Updated language mapping
language_mapping = {
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
    "Arabic": "ar",
    # Add more languages and codes as needed
}


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/main')
def main():
    return render_template('main.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/translate')
def translate():
    return render_template('translate.html', language_mapping=language_mapping)

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/sentiment')
def sentiment():
    return render_template('sentiment_analysis.html')

@app.route('/summarize')
def summarize():
    return render_template('summarize.html')

@app.route('/service')
def services_template():
    return render_template('services.html')

@app.route('/summarize_text',methods = ['POST'])
def summarize_text():
    try:
        text = request.json.get("text")
        summarixed_output = summarize_text_with_txtai(text)
        if summarixed_output is not None:
            return jsonify({"data":summarixed_output}),200
        else:
            return jsonify({"error":"Something went wrong"}),200

    except:
        return jsonify({"error":"Summarizator is not able to summarize this"}),200

@app.route('/translate_text', methods=["POST"])
def translate_text():
    data = request.json
    text = data.get("text")
    language = data.get("language")
    print(language)
    language_code = language_mapping.get(language)
    translated_text = translate_to_any_language(text, language_code)
    if translated_text is not None:
        return jsonify({"success": translated_text}), 200
    else:
        return jsonify({"error", "Unable to translate"}), 200

@app.route('/text_to_speech', methods=['POST'])
def text_to_speech():
    try:
        data = request.get_json()
        if 'text' in data:
            text = data['text']
            language = data.get('language', 'en')  # Default to English if language is not provided

            # Create a gTTS object with the specified language
            tts = gTTS(text, lang=language)

            # Save the speech as a temporary MP3 file
            temp_file = tempfile.NamedTemporaryFile(suffix=".mp3", delete=False)
            tts.save(temp_file.name)

            # Play the speech using the default audio player
            os.system(f"mpg321 {temp_file.name}")  # On Linux
            # You can use other methods for playing audio on different platforms

            # Close and remove the temporary MP3 file
            temp_file.close()
            os.remove(temp_file.name)

            return jsonify({'message': 'Text converted to speech and played successfully'}),200
        else:
            return jsonify({'error': 'Text is missing in the request'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 200


@app.route('/sentiment_analysis',methods = ['POST'])
def sentiment_analysis():
    data = request.json
    news_text = data.get('news_text',None)
    print(news_text)
    if news_text is None:
        return jsonify({"error":"Please enter the news text"}),200
    else:
        sentiment_output = sentiment_analyzer_helper(news_text)
        return jsonify({"data":sentiment_output}),200
    

if __name__ == "__main__":
    app.run(debug=True) 
