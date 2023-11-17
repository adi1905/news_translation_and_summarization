from googletrans import Translator

def translate_to_any_language(text, target_language):
    try:
        # Create a Translator object
        translator = Translator()

        # Use the translate method to translate the text
        translated_text = translator.translate(text, dest=target_language)

        # Return the translated text
        return translated_text.text
    except Exception as e:
        print(str(e))
        return None
