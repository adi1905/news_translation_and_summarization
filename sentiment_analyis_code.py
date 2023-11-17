from transformers import pipeline

def sentiment_analyzer_helper(news_text):
    sentiment_analysis = pipeline("sentiment-analysis")

    result = sentiment_analysis(news_text)
    print(result)
    # Result is a list with a dictionary containing 'label' and 'score'
    sentiment_label = result[0]['label']
    sentiment_score = result[0]['score']

    print(f"Sentiment: {sentiment_label}, Score: {sentiment_score}")
    return result

# news_text = '''“It obviously hurts when people who have played the game themselves make such comments. I am not saying all of them do it. Some of them understand the mindset of the players, having gone through similar situations in their careers. They lend you support, say the right thing and even help you with certain technicalities. But some people like to focus on the negatives. It feels bad as an Indian cricketer,” Kohli told ‘BCCI.TV’.'''
# sentiment_analyzer_helper(news_text)
