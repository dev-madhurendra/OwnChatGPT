from sqlalchemy import Column, Integer, String
from db.session import Base

class Prompt(Base):
    __tablename__ = 'prompt'
    id = Column(Integer,primary_key=True,autoincrement=True)
    body = Column(String(length=10000))