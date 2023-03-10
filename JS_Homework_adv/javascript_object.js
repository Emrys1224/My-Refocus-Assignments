let customer = {
  customer_name : "Johnny Manggo",
  points : 12300,
  cart : [
    {
      item : "Shampoo",
      quantity : 2,
      price_$ : 3
    },
    {
      item : "Soap",
      quantity : 2,
      price_$ : 2
    },
    {
      item : "Toothpaste",
      quantity : 1,
      price_$ : 3
    }
    ]
}

console.log(`Hi, ${customer.customer_name}! We are happy to see you today.\nYour current points are: ${customer.points}.`);

let total_bill = 0;

for (i = 0; i < customer.cart.length; i++) {
  
  let quantity = customer.cart[i].quantity;
  let item = customer.cart[i].item;
  let price_$ = customer.cart[i].price_$;
  
  console.log(`${quantity}x ${item} ---- $ ${price_$}.00`);
  
  total_bill += (quantity * price_$);
  customer.points += quantity;
}

console.log(`Total Bill: ${total_bill}`);
console.log(`New Current Points: ${customer.points}`);
