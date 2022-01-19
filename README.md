# Shopify Backend Intern Challenge (Summer 2022) - Min Kim
This is an inventory tracking web appication built using Python Flask backend, using MongoDB (Atlas) for Data storage and HTML/CSS/JS for frontend interface.
Basic CRUD functionalities are available:
- Create inventory items
- Edit inventory items
- Delete inventory items
- View a list of Inventory items

This application also allows users to export product data as a CSV.

## How to Run the Application
This application can be accessed at: https://shopify-inventory-tracking-app.herokuapp.com/

However, if you wish to run it locally, the following are required:
- Python3 (Made with version 3.7.9)
- A MongoDB Atlas cluster with host set as the environment variable `MONGODB_HOST`

Then,
1. Clone the project from github
2. Run `pip install -r requirements.txt` from root directory
3. Run `flask run` from the root directory
4. Application will be running at the endpoint: `http://localhost:5000/`

## Usage
1. To create a new item, click on `Create Inventory` on the navbar, enter the information and click `Create`
2. To edit, click on `Edit` from the homepage, then update the information and click `Finish`
3. To delete, click on `Delete` from the homepage
4. To view item details, click on the name of the product/item
5. To export all the items' data to CSV, click on `Export All to CSV` in home page
6. To export data for a particular item to CSV, click on `CSV Export` at the corresponding row of products.
