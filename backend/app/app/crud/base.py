"""Default CRUD object."""
from typing import Any, Generic, Optional, Type, TypeVar, Union
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app.database.base import Base

ModelType = TypeVar('ModelType', bound=Base)
CreateSchemaType = TypeVar('CreateSchemaType', bound=BaseModel)
UpdateSchemaType = TypeVar('UpdateSchemaType', bound=BaseModel)


class CRUDBase(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    """CRUD base class with default methods to create, read, update, and delete.

    Attributes:
        model: A SQLAlchemy model class.
    """

    def __init__(self, model: Type[ModelType]) -> None:
        self._model = model

    def get(self, database: Session, obj_id: Any) -> Optional[ModelType]:
        return database.query(self._model).filter(self._model._id == obj_id).first()

    def get_multi(self, database: Session, *, skip: int = 0, limit: int = 50) -> list[ModelType]:
        return database.query(self._model).offset(skip).limit(limit).all()

    def create(self, database: Session, *, obj_in: CreateSchemaType) -> ModelType:
        obj_in_data = jsonable_encoder(obj_in)
        database_obj = self._model(**obj_in_data)
        database.add(database_obj)
        database.commit()
        database.refresh(database_obj)
        return database_obj

    def update(
        self,
        database: Session,
        *,
        database_obj: ModelType,
        obj_in: Union[UpdateSchemaType, dict[str, Any]],
    ) -> ModelType:
        obj_data = jsonable_encoder(database_obj)

        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)

        for field in obj_data:
            if field in update_data:
                setattr(database_obj, field, update_data[field])

        database.add(database_obj)
        database.commit()
        database.refresh(database_obj)
        return database_obj

    def remove(self, database: Session, *, obj_id: int) -> ModelType:
        obj = database.query(self._model).get(obj_id)
        database.delete(obj)
        database.commit()
        return obj
