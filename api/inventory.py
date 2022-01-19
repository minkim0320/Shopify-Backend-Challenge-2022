from flask import request
from flask_restful import Resource, reqparse
from models.product import Product
import json
import logging

logger = logging.getLogger(__name__)

# API endpoint for non-identifiable products
# i.e. getting all products, or creating products

class Inventory(Resource):
  def get(self):
    inventory_list = []
    for product in Product.objects:
      inventory_list.append(product.to_dict())
    logger.debug('GET /api/inventory: ' + str(inventory_list))
    return {"inventory_list":inventory_list}

  def post(self):
    request_data = json.loads(request.data)
    new_product = Product(
      name=request_data['name'],
      stock=request_data['stock'],
      price=request_data['price'],
      description=request_data['description'],
    )
    new_product.save()
    return new_product.to_dict()


# API endpoint for identifiable products
# i.e. speicifed by product ID in /api/product/<product_id>

class InventoryProduct(Resource):
  def get(self, product_id):
    product = Product.objects(id=product_id)[0]
    response = {
      "product": product.to_dict()
    }
    logger.debug('GET /api/product'+product_id + ': ' + str(product.to_dict()))
    return response

  def put(self, product_id):
    product = Product.objects(id=product_id)[0]
    logger.debug('PUT /api/product'+product_id + ': ' + str(product.to_dict()))
    if product == None:
      response = {
        "result": "failure"
      }
      return response, 404
    else:
      request_data = json.loads(request.data)
      product.name = request_data['name']
      product.stock = request_data['stock']
      product.price = request_data['price']
      product.description = request_data['description']
      product.save()
      return product.to_dict()

  def delete(self, product_id):
    product = Product.objects(id=product_id)
    logger.debug('DELETE /api/product'+product_id + ': ' + str(product[0].to_dict()))
    if product == None:
      response = {
        "result": "failure"
      }
      return response, 404
    else:
      temp_name = product[0].name
      product.delete()
      return {"product": temp_name}

