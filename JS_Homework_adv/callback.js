function discount(percentage, amount) {
  return amount - (amount * (percentage/100));
}

function age_checker(age) {
  return age >= 10;
}

function calculate(customer_group = [], discount_func) {
  const group_count = customer_group.length;
  let sub_total = group_count * 299;
  
  if (group_count < 6) {
    return `Sorry, No Discount. Bill: ${sub_total}`;
  }
  
  const all_age_10_and_above = customer_group.every(age_checker);
  let discount = 0;
  let grand_total;
  
  if (all_age_10_and_above) {
    discount = 15;
  } else {
    discount = 10;
  }
  
  grand_total = discount_func(discount, sub_total);
  
  return `${discount}% discount. Bill: ${grand_total}`;
}

const customer_group1 = [8, 12, 11, 11, 18, 24, 5, 10];
console.log(calculate(customer_group1, discount));

const customer_group2 = [10, 11, 11, 13, 19, 14];
console.log(calculate(customer_group2, discount));

const customer_group3 = [12, 12, 14];
console.log(calculate(customer_group3, discount));