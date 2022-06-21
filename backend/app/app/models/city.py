"""City database model."""
from sqlalchemy import Column, Index, String
from app.database.session import Base
from app.database.mixins import AssociationMixin


# this entity is not an association object, but since it uses postal code as ID
# it requires the same fields as them and thus uses the Association Mixin
class City(Base, AssociationMixin):
    """Class that represents the assignment of postal codes to city names."""
    __tablename__ = 'city'

    postal_code = Column(String, primary_key=True, index=True)
    name = Column(String, index=True)

    __table_args__ = (Index('city_postal_code_uc', 'postal_code', 'name'),)
