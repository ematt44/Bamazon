// NPM init to get json package
// npm install for mysql and inquirer

var mysql = require('mysql');
var inquirer = require('inquirer');

// Use some fun colors

var clc = require('cli-color');

// Enter name of data base and password to connect to mySQL

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected on: " + connection.threadId);
    customerChoices();


});

// Show the customer a list of available products to purchase
// Use a for loop to loop through the items from the products table 

function customerChoices() {
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (i = 0; i < res.length; i++) {
            console.log(clc.cyanBright("Product ID: " + res[i].item_id + "  |  Item: " + res[i].product_name + "  | Today's Price: $" + res[i].price +'\n'));
        }
        runSearch();
    });
}

// Prompt the user to have them select the ID of the product they would like to buy

function runSearch() {
    inquirer.prompt([{
            type: "input",
            name: "item_id",
            message: "Thank you for shopping at Bamazon! Enter the ID of the item you would like to purchase!",

        },
        {
// Ask the customer how many of that item they would like to purchase

            type: "input",
            name: "quantity",
            message: '\n' +"How many would you like to buy?",

        }
    ]).then(function (answers) {
        var query = "SELECT * FROM products WHERE ?";
        connection.query(query, {
            item_id: answers.item_id
        }, function (err, res) {
            if (err) throw err;

// After the customer selects how many items they want see if there is enough in stock


var totalCost = res[0].price * answers.quantity;
var item_id = res[0].item_id;
var newStockQuantity = res[0].stock_quantity - answers.quantity;
var totalSales = res[0].product_sales + totalCost;

// If there is not enough in the stock quantity, tell them insufficient quantity and end the transaction
            
    if (res[0].stock_quantity < answers.quantity) {
        console.log(clc.redBright("*********************************************************************************"));
        console.log(clc.redBright("Sorry, we do not have that many in stock, try a different store. Have a nice day!"));
        console.log(clc.redBright("*********************************************************************************"));
        connection.end();

// If there is enough give them the total cost and update inventory
            
    } else {
    connection.query('UPDATE products SET ? WHERE item_id = ?', [{stock_quantity: newStockQuantity, product_sales: totalSales}, item_id],

// Show the customer the total cost of their purchase
                    
function (err, res) {
console.log(clc.greenBright('\n'+"You got it! Here is your total: $" + totalCost));
 console.log(clc.yellowBright('\n'+"There are " + newStockQuantity + " of these left in stock!"));
    inquirer.prompt([{
    name: "confirm",
    type: "confirm",
    message: '\n' +"Would you like to keep shopping?"
    }])
    
    .then(function (answers) {
    if (answers.confirm === true) {
    customerChoices();

// End connection to bamazon_db
                           
    } else {
    connection.end();
    }
})

});
}
});
})

}