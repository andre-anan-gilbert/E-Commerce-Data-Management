"""Product 2 warehouse database model."""
from sqlalchemy import Column, Integer
from app.database.session import Base


class Product2Warehouse(Base):
    """Class that represents the assignment of products to warehouses."""
    __tablename__ = 'product_2_warehouse'

    product_item_number = Column(Integer, primary_key=True, index=True)
    warehouse_id = Column(Integer, primary_key=True, index=True)
    number_in_stock = Column(Integer, index=True)
