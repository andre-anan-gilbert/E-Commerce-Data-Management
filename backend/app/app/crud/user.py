"""User CRUD object."""
from typing import Any, Optional, Union
from sqlalchemy.orm import Session
from app.crud.base import CRUDBase
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from app.core.security import get_password_hash, verify_password


class CRUDUser(CRUDBase[User, UserCreate, UserUpdate]):
    """CRUD user class with methods to get, create, update, and authenticate."""

    def get(self, database: Session, obj_id: Any) -> Optional[User]:
        return database.query(self._model).filter(self._model.user_id == obj_id).first()

    def get_by_email(self, database: Session, *, email: str) -> Optional[User]:
        return database.query(User).filter(User.email == email).first()

    def create(self, database: Session, *, obj_in: UserCreate) -> User:
        db_obj = User(
            email=obj_in.email,
            hashed_password=get_password_hash(obj_in.password),
        )
        database.add(db_obj)
        database.commit()
        database.refresh(db_obj)
        return db_obj

    def update(self, database: Session, *, database_obj: User, obj_in: Union[UserUpdate, dict[str, Any]]) -> User:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)

        if update_data['password']:
            hashed_password = get_password_hash(update_data['password'])
            del update_data['password']
            update_data['hashed_password'] = hashed_password

        return super().update(database, database_obj=database_obj, obj_in=update_data)

    def authenticate(self, database: Session, *, email: str, password: str) -> Optional[User]:
        user_email = self.get_by_email(database, email=email)
        if user_email is None: return
        if not verify_password(password, user_email.hashed_password): return
        return user_email


user = CRUDUser(User)
