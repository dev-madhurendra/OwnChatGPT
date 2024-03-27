from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from db.connect import get_db
from util.function import get_chat_completion
import model.prompt as prompt_model
import schema.prompt as schemas

router = APIRouter(tags=["LangChain"], prefix="/api/v1")

@router.post("/chat", response_model=schemas.ResponsePrompt)
def create_prompt(request: schemas.RequestPrompt, db: Session = Depends(get_db)):
    response = get_chat_completion(content=request.body).choices[0].message.content
    prompt = prompt_model.Prompt(**request.model_dump())
    db.add(prompt)
    db.commit()
    response_data = {
        "prompt": request.body,
        "prompt_answer": response  
    }
    
    return JSONResponse(content=response_data)
