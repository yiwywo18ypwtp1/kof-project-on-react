from psycopg2 import IntegrityError
from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import Base, engine, get_db, User

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class UserCreate(BaseModel):
    username: str
    email: str
    password: str

@app.post("/register")
async def register(user: UserCreate, db: Session = Depends(get_db)):
# Проверка на существующего пользователя
    user_exists = db.query(User).filter(User.username == user.username).first()
    if user_exists:
      raise HTTPException(status_code=400, detail="Username already registered")
    
    new_user = User(
        username=user.username,
        email=user.email,
        password=user.password  # ⚠️ Лучше хешировать пароль (см. ниже)
    )
    db.add(new_user)
    try:
        db.commit()
        db.refresh(new_user)
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Email already registered")
      
    return {"message": f"User {user.username} registered successfully"}