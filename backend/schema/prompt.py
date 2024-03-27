from pydantic import BaseModel

class Prompt(BaseModel):
    body: str

class RequestPrompt(Prompt):
    pass

class ResponsePrompt(Prompt):
    id: int