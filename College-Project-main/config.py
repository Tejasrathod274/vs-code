
import os

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY", "supersecret")

    DATABASE_URL = os.environ.get("DATABASE_URL")
