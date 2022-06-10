"""Product 2 warehouse database model."""
from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base


class Product2Warehouse(Base):
    """Class that represents the assignment of products to warehouses."""
    __tablename__ = 'product_2_warehouse'

    product_id = Column(Integer, ForeignKey('product.id'), primary_key=True, index=True)
    warehouse_id = Column(Integer, ForeignKey('warehouse.id'), primary_key=True, index=True)
    number_in_stock = Column(Integer, nullable=False, index=True)

    product = relationship('Product', backref='warehouse_associations', foreign_keys=[product_id])
    warehouse = relationship('Warehouse', backref='product_associations', foreign_keys=[warehouse_id])
