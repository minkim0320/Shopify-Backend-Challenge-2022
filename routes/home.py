from flask import Blueprint, render_template, send_file
import os

home = Blueprint("home", __name__, template_folder="templates", static_folder="static")

# All routes from home page

@home.route("/")
def homepage():
  return render_template("home.html")

@home.route("/create")
def create_inventory():
  return render_template("createform.html")

@home.route("/edit/<product_id>")
def edit_inventory(product_id):
  return render_template("editform.html")

@home.route("/view/<product_id>")
def view_product(product_id):
  return render_template("viewproduct.html")

@home.route("/download/csvall")
def download_csv_all():
  return send_file("data/product_data_all.csv", as_attachment=True)

@home.route("/download/csvproduct")
def download_csv_product():
  return send_file("data/product_data_individual.csv", as_attachment=True)
