"""Base Class."""
from typing import Any

from sqlalchemy.ext.declarative import as_declarative, declared_attr


@as_declarative()
class Base:
    """Class that generates __tablename__ automatically"""
    id: Any
    __name__: str

    @classmethod
    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()
