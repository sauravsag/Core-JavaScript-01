let paymentMethod = "credit"; 
switch (paymentMethod){
case "credit":
console.log("Processing fee for credit payment: 2%");
break;
case "debit":
console.log("Processing fee for debit payment: 1.5%");
break;
case "paypal":
console.log("Processing fee for PayPal payment: 3%");
break;
default:
console.log("Invalid payment method");
}