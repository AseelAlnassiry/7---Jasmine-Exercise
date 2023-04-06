window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = document.getElementById('loan-amount');
  const years = document.getElementById('loan-years');
  const rate = document.getElementById('loan-rate');

  amount.value = 1000;
  years.value = 2;
  rate.value = 2;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthly;
  if (values.rate === 0) {
    return (monthly = (values.amount / (values.years * 12)).toFixed(2));
  }
  let monthlyRate = values.rate / 100 / 12;
  let numeator = values.amount * monthlyRate;
  let denominator = 1 - Math.pow(1 + monthlyRate, -12 * values.years);
  return (monthly = (numeator / denominator).toFixed(2));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = monthly;
}
