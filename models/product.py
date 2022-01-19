import mongoengine as me
import datetime

# Mongo Model for Product (Inventory)

class Product(me.Document):
  name = me.StringField(required=True)
  stock = me.IntField(required=True)
  price = me.DecimalField(required=True)
  description = me.StringField()

  def to_dict(self):
    return {
      'id': str(self.id), 
      'name': str(self.name),
      'price': str(self.price),
      'stock': str(self.stock),
      'description': str(self.description),
    }
