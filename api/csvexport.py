from flask import request
from flask_restful import Resource, reqparse
from models.product import Product
import csv
import os

class CSVExport(Resource):
  def get(self):
    try:
      with open ('data/product_data_all.csv', 'w') as f:
        writer = csv.writer(f, lineterminator='\n')
        writer.writerow(['id', 'name', 'price', 'stock', 'description'])
        for product in Product.objects:
          writer.writerow(product.to_dict().values())
    except:
      return "Error in CSV", 404

class CSVExportProduct(Resource):
  def get(self, product_id):
    try:
      with open ('data/product_data_individual.csv', 'w') as f:
        writer = csv.writer(f, lineterminator='\n')
        writer.writerow(['id', 'name', 'price', 'stock', 'description'])
        writer.writerow(Product.objects(id=product_id)[0].to_dict().values())
    except:
      return "Error in CSV", 404