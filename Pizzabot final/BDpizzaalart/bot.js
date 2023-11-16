// Define menu items and price
const vegetarian = "Vegeterian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

// Function to check if the pizza is on the menu
function checkOrderName(orderName) {
    return orderName === vegetarian || orderName === hawaiian || orderName === pepperoni;
}

// Function to calculate total cost
function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice;
}

// Function to calculate cooking time
function cookingTime(orderQuantity) {
    if (orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity <= 5) {
        return 15;
    } else {
        return 20;
    }
}

// Greet the customer
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`);

// Ask for pizza order and quantity
let orderName = prompt("Enter the name of the pizza you want to order today.");


// Check if the pizza is on the menu
if (checkOrderName(orderName)) {
    let  orderQuantity= prompt(`How many of ${orderName} do you want?`);
    // Calculate total cost
 let orderTotal = totalCost(orderQuantity);

 // Calculate cooking time
 let minutesToCook = cookingTime(orderQuantity);
    // Finalize the order
    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${minutesToCook} minutes.`);
} else {
    // Inform the customer that the selected pizza is not on the menu
    alert("Sorry, that pizza is not on the menu.");
}

