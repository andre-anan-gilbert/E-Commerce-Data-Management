"""Department database model."""
from sqlalchemy import Column, Integer, String
from app.database.session import Base


class Department(Base):
    """Class that represents departments where employees work."""
    __tablename__ = 'department'

    _id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    manager = Column(Integer, index=True)
