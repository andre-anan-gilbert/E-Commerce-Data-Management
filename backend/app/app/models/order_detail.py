"""Order detail database model."""
from sqlalchemy import Column, Float, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base
from app.database.base_mixin import BaseMixin


class OrderDetail(Base, BaseMixin):
    """Class that represents the details of an order made by a customer."""
    __tablename__ = 'order_detail'

    order_id = Column(Integer, ForeignKey('order.id'), primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey('product.id'), primary_key=True, index=True)
    price_at_time_of_purchase = Column(Float, nullable=False, index=True)
    number_of_items = Column(Integer, nullable=False, index=True)

    order = relationship('Order', backref='order_details', foreign_keys=[order_id])
    product = relationship('Product', backref='order_details', foreign_keys=[product_id])
