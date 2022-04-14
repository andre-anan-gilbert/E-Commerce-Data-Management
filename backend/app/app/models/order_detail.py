"""Order detail database model."""
from sqlalchemy import Column, Float, Integer
from app.database.session import Base


class OrderDetail(Base):
    """Class that represents the details of an order made by a customer."""
    __tablename__ = 'order_detail'

    order_id = Column(Integer, primary_key=True, index=True)
    product_item_number = Column(Integer, primary_key=True, index=True)
    price_at_time_of_purchase = Column(Float, index=True)
    number_of_items = Column(Integer, index=True)
