from openai import OpenAI
from core.config import OPENAI_API_KEY

client = OpenAI(api_key=OPENAI_API_KEY)

def get_chat_completion(content: str, model="gpt-3.5-turbo"):
    return client.chat.completions.create(
        messages=[{
            "role": "user",
            "content": content,
        }],
        model=model,
    )