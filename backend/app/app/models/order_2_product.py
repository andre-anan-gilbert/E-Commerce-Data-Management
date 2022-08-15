"""Order detail database model."""
from sqlalchemy import Column, Float, Integer, ForeignKey
from sqlalchemy.orm import relationship, backref
from app.database.session import Base
from app.database.mixins import AssociationMixin


class Order2Product(Base, AssociationMixin):
    """Class that represents the details of an order made by a customer."""
    __tablename__ = 'order_2_product'

    order_id = Column(Integer, ForeignKey('order.id'), primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey('product.id', ondelete='CASCADE'), primary_key=True, index=True)
    price_at_time_of_purchase = Column(Float, nullable=False, index=True)
    number_of_items = Column(Integer, nullable=False, index=True)

    order = relationship('Order', backref='product_associations', foreign_keys=[order_id])
    product = relationship('Product',
                           backref=backref('order_associations', passive_deletes=True),
                           foreign_keys=[product_id])
