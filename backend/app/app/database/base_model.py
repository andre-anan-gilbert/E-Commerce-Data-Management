from sqlalchemy import Column, DateTime, Integer, ForeignKey
from sqlalchemy.ext.declarative import as_declarative
from sqlalchemy.orm import relationship


@as_declarative()
class BaseModel:
    id = Column(Integer, primary_key=True, index=True)
    created = Column(DateTime)
    updated = Column(DateTime)
    edited_by = Column(Integer, ForeignKey('category._id'), index=True)

    user = relationship('Category', backref='edits')
