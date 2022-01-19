from flask import Flask, request
from flask_restful import Api
from routes.home import home
from mongoengine import connect
import os

from api.inventory import Inventory
from api.inventory import InventoryProduct
from api.csvexport import CSVExport
from api.csvexport import CSVExportProduct

app = Flask(__name__)
app.register_blueprint(home, url_prefix="")
api = Api(app)
db = connect(host=os.environ['MONGODB_HOST'])

api.add_resource(Inventory, '/api/inventory')
api.add_resource(InventoryProduct, '/api/product/<product_id>')
api.add_resource(CSVExport, '/api/csvall')
api.add_resource(CSVExportProduct, '/api/csv/<product_id>')

if __name__ == "__main__":
  app.run(debug=True)