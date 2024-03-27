from fastapi import FastAPI
from router import routes as prompt_routes
from db.session import engine
import model.prompt as models
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

models.Base.metadata.create_all(bind=engine)

app.include_router(prompt_routes.router)
