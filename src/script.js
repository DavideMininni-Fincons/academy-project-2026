/**
 * Exercise notes
 *
 * A user is buying a JavaScript course from your website;
 * however, the code which calculates the final price is missing some pieces.
 * Replace the ______ with the correct JavaScript syntax.
 */


document.getElementById('checkout-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the browser from reloading the page

  const stringPrice = document.getElementById('course-price').value;
  const userInputCoupon = document.getElementById('coupon-code').value;
  const isVipMember = document.getElementById('vip-member').checked;

  // Request 1 - Convert the string input into a real number to avoid calculation bugs.
  ______ price = ______(stringPrice);

  // Request 2 - Define a tax rate constant (22%). This variable must NOT be reassignable.
  ______ TAX_RATE = 0.22;

  // Request 3 - Calculate the base tax amount.
  let taxAmount = price ______ TAX_RATE;
  let finalPrice = price ______ taxAmount;

  console.log('Initial price with tax: ' + finalPrice);

  // Request 4 - Apply a 10€ discount ONLY if the user is a VIP member AND the final price is greater than 30.
  if (isVipMember ______ finalPrice ______ 30) {
    console.log("VIP Discount Applied!");
    finalPrice = finalPrice - 10;
  }

  // Request 5 - Check if the coupon code is EXACTLY equal to "SUMMER20" (check value AND type).
  if (userInputCoupon ______ "SUMMER20") {
    console.log("Coupon accepted! 5% extra off.");
    // Request 6 - Deduct 5% from the current final price
    finalPrice = finalPrice * ______;
  }

  // Request 7 - Use Number functions to trim decimals.
  finalPrice = ______.toFixed(2);

  // Display the result on screen without breaking the form layout
  document.getElementById('result').innerText = 'Final total item checkout cost: €' + finalPrice;
});
