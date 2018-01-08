# Bamazon



Create a MySQL Database called bamazon.

Then create a Table inside of that database called products.

The products table should have each of the following columns:

item_id (unique id for each product)

product_name (Name of product)

department_name

price (cost to customer)

stock_quantity (how much of the product is available in stores)

Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

The app should then prompt users with two messages.

The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.
Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
However, if your store does have enough of the product, you should fulfill the customer's order.
This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.

Bamazon Screen Shots

<img width="986" alt="screenshot1" src="https://user-images.githubusercontent.com/32374088/34637906-040efe70-f275-11e7-8d09-182158d4d3d2.png">

<img width="991" alt="screenshot2" src="https://user-images.githubusercontent.com/32374088/34637908-0836787a-f275-11e7-9252-e89280365d3c.png">

<img width="964" alt="screenshot3" src="https://user-images.githubusercontent.com/32374088/34637909-0b3e8580-f275-11e7-912d-e1825ad98afe.png">

<img width="898" alt="screenshot4" src="https://user-images.githubusercontent.com/32374088/34637911-0e85a00c-f275-11e7-867c-84fe2a0ec7d1.png">

<img width="962" alt="screenshot5" src="https://user-images.githubusercontent.com/32374088/34637912-11f63404-f275-11e7-9fbb-fdccbded7be6.png">

