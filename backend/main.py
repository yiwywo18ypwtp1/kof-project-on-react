from fastapi import FastAPI, Depends, HTTPException, Request, Response
from fastapi.responses import JSONResponse
from psycopg2 import IntegrityError
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import Base, engine, get_db, User

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
      "http://localhost:3000",
      "http://127.0.0.1:3000",
    ],
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
    password=user.password
  )
  db.add(new_user)
  try:
    db.commit()
    db.refresh(new_user)
  except IntegrityError:
    db.rollback()
    raise HTTPException(status_code=400, detail="Email already registered")
    
  response = JSONResponse(content={"message": f"User {user.username} registered successfully"})
  response.set_cookie(
    key="user_id",
    value=str(new_user.id),
    httponly=True,
    samesite="lax",  
    max_age=1200 * 1000,
  )
  return response


@app.post("/logout")
def logout(response: Response):
    response.delete_cookie("user_id")
    return {"message": "Logged out"}
  

@app.get("/user")
def get_user(request: Request, db: Session = Depends(get_db)):
  user_id = request.cookies.get("user_id")
  if not user_id:
    raise HTTPException(status_code=401, detail="Not authenticated")

  user = db.query(User).filter(User.id == user_id).first()
  if not user:
    raise HTTPException(status_code=404, detail="User not found")

  return { 
    "userName": user.username,
    "email": user.email,
    "password": user.password
  }
  
  
@app.get("/user-test/{user_id}")
def get_user(user_id: int, request: Request, db: Session = Depends(get_db)):

  user = db.query(User).filter(User.id == user_id).first()

  return {
    'username': user.username,
    'email': user.email,
    'password': user.password,
  }

  # return {
  #   "userName": 'ururu',
  #   "email": 'ururu@gmail.com',
  #   "password": '123'
  # }