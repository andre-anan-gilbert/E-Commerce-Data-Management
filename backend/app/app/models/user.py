"""User database model."""
from sqlalchemy import Column, Integer, String
from app.database.base import Base


class User(Base):
    """Class that represents a user in the database."""
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    hashed_password = Column(String, nullable=False)
    token_version = Column(Integer, nullable=False, default=0)
