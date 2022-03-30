"""Product 2 warehouses database model."""
from sqlalchemy import Column, Integer
from app.database.base_class import Base


class Product2Warehouse(Base):
    """Class that represents a product which belongs to a warehouse."""
    product_item_number = Column(Integer, primary_key=True, index=True)
    warehouse_id = Column(Integer, primary_key=True, index=True)
    number_in_stock = Column(Integer, index=True)
