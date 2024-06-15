import requests
import google.generativeai as genai

genai.configure(api_key="AIzaSyCzqP5RBjt-371znEmypXHCoFtfBaSoKLI")

# Create the model
# See https://ai.google.dev/api/python/google/generativeai/GenerativeModel
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-pro",
    generation_config=generation_config,
    # safety_settings = Adjust safety settings
    # See https://ai.google.dev/gemini-api/docs/safety-settings
)

url = "http://127.0.0.1:8000/api/blocknotes/?format=json"
payload = {}
headers = {}
all_docs_for_query = requests.request(
    "GET", url, headers=headers, data=payload)

# print(all_docs_for_query.json()[0]["content"])

content_from_doc = all_docs_for_query.json()[0]["content"]

text_from_doc = []

for block in content_from_doc:
    # print(f"This is a Block: {block}")
    if block["content"] == []:
        break
    # print(f"This is content from a Block: {block["content"]}")
    # print(f"This is text from a Block: {block["content"][0]["text"]}")
    text_from_doc.append(block["content"][0]["text"])

print(text_from_doc)
print()


chat_session = model.start_chat(
    history=[
        {
            "role": "user",
            "parts": [text_from_doc],
        },
    ]
)

question_on_doc = input("What is your question? ")

response = chat_session.send_message(question_on_doc)

print(response.text)
