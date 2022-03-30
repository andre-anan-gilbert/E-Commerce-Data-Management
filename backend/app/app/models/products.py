"""Products database model."""
from sqlalchemy import Column, Float, Integer, String
from app.database.base_class import Base


class Products(Base):
    """Class that represents the products."""
    item_number = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    price = Column(Float, index=True)
    category_id = Column(Integer, index=True)
    supplier_id = Column(Integer, index=True)
