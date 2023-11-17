from txtai.pipeline import Summary

def summarize_text_with_txtai(input_text):
    # Create a Summary instance
    summary = Summary()

    # Generate the summary
    result = summary(input_text)

    return result

# input_text = """
# There are more layers to the suspension of Sri Lanka Cricket (SLC) than are visible. On the surface, the International Cricket Council (ICC) decision, taken after an emergent board meeting, seems beneficial to the body it has suspended. Shammi Silva, the elected president of the SLC, is not exactly a persona non grata after the unexpected ICC decision. The ICC, in fact, said it still recognised him and his 'democratically elected office-bearers' and as a director.

# More specifically, this move has been intended to prevent the government takeover of the SLC, which the country's auditor general said is mired in corruption. To stretch the point further, only a couple of days ago, the country's Parliament debated the SLC corruption issue and was preparing to have its own representative, namely Arjuna Ranatunga, run the body.

# To elaborate, there has been an attempt to change the constitution of the SLC altogether, and Sports Minister Roshan Ranasinghe has been at the forefront of these plans. He appointed Ranatunga, a former and the only World Cup-winning captain in the island, as the chairman of the interim committee. The decision was stayed by a court of appeal, but only for two weeks. The stay order, passed on a Silva appeal, was set to be in effect until November 16.
# """

# summary_result = summarize_text_with_txtai(input_text)

# # Print the summary
# print(summary_result)