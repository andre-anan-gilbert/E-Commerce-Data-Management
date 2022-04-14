"""Order detail database model."""
from sqlalchemy import Column, Float, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base


class OrderDetail(Base):
    """Class that represents the details of an order made by a customer."""
    __tablename__ = 'order_detail'

    order_id = Column(Integer, ForeignKey('order._id'), primary_key=True, index=True)
    product_item_number = Column(Integer, ForeignKey('product.item_number'), primary_key=True, index=True)
    price_at_time_of_purchase = Column(Float, index=True)
    number_of_items = Column(Integer, index=True)

    order = relationship('Order', backref='order_details')
    product = relationship('Product', backref='order_details')
