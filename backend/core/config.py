import os
from dotenv import load_dotenv

load_dotenv()
OPENAI_API_KEY=os.environ.get("OPENAI_API_KEY")
DB_URL=os.environ.get("DB_URL") or "sqlite:///./test.db"