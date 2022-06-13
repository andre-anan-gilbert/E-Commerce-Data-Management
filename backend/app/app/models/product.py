"""Product database model."""
from sqlalchemy import Column, Float, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base
from app.database.base_mixin import BaseMixin


class Product(Base, BaseMixin):
    """Class that represents products."""
    __tablename__ = 'product'

    name = Column(String, nullable=False, index=True)
    price = Column(Float, nullable=False, index=True)
    description = Column(String, index=True)
    category_id = Column(Integer, ForeignKey('category.id'), index=True)
    supplier_id = Column(Integer, ForeignKey('supplier.id'), index=True)

    category = relationship('Category', backref='products')
    supplier = relationship('Supplier', backref='products')
