// code/pizzabot.js
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

function checkOrderName(orderName) {
  return orderName === vegetarian || orderName === hawaiian || orderName === pepperoni;
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

function orderPizza() {
  const orderName = document.getElementById("pizzaType").value;
  const orderQuantity = parseInt(document.getElementById("quantity").value, 10);

  if (!checkOrderName(orderName)) {
   
  

  const orderTotal = totalCost(orderQuantity);
  const cookingTimeMinutes = cookingTime(orderQuantity);

  const responseMessage = `
    Great, I'll get started on your ${orderName} right away. 
    It will cost ${orderTotal} kr.
    The pizzas will take ${cookingTimeMinutes} minutes.
  `;

  document.getElementById("response").innerHTML = responseMessage;
}

}
