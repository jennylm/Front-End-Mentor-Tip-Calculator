let billAmount = 0;
let tipPercentage = 0;
let tipDecimal = 0
let numberOfPeople = 0;

let totalBillExact = 0;
let totalBill = 0;

let totalPerPersonExact = 0;
let totalPerPerson = 0;

let tipPerPersonExact = 0;
let tipPerPerson = 0;

const billAmountInput = document.getElementById("bill-amount");
const numberOfPeopleInput = document.getElementById("number-of-people");

const buttons = document.querySelectorAll(".button-container > button")
const customButton =document.getElementById("custom-button");
console.log(customButton);

const tipAmount = document.getElementById("tip-per-person");
const totalAmount = document.getElementById("total-per-person");

const errorBill = document.getElementById("bill-inner-container");
const errorPeople = document.getElementById("people-inner-container");

const resetButton = document.getElementById("reset-button");

console.log(tipAmount);
console.log(totalAmount);

buttons.forEach((button) => {
    button.addEventListener("click", function() {
      checkButton(button.value);
    }, false)
  });

customButton.addEventListener("click", function() {
  checkButton(customButton.value);
}, false);


function checkButton(button) {

  billAmount = billAmountInput.value;
  numberOfPeople = numberOfPeopleInput.value;

  //Handles case of no billAmount entered
  if (billAmount === "0") {
    billAmountInput.classList.add("error");

    let error = document.getElementById("bill-error-child");

    if (error === null) {
          errorBill.appendChild(errorMessage("Cannot be zero"));
    }
  }
  //Handles case of no numberOfPeople entered
  else if (numberOfPeople === "0" && billAmountInput !== "0") {

    let errorToRemove = document.getElementById("bill-error-child");

    if (errorToRemove !== null){
      billAmountInput.classList.remove("error");
      errorBill.removeChild(errorToRemove);
    }
    numberOfPeopleInput.classList.add("error");
    errorPeople.appendChild(errorMessage("Cannot be zero"));

  }

  else if (button === "") {
    console.log("Empty string");
  }

  else {

    let errorToRemove = document.getElementById("bill-error-child");

    if (errorToRemove !== null) {
          errorPeople.removeChild(errorToRemove);
    }

    numberOfPeopleInput.classList.remove("error");
    billAmountInput.classList.remove("error");

    tipDecimal = button / 100;
    // console.log(tipDecimal);
    totalBillExact = billAmount * (1 + tipDecimal);
    // console.log(totalBillExact);
    totalBill = totalBillExact.toFixed(2);
    // console.log(totalBill);

    totalPerPersonExact = totalBill / numberOfPeople;
    // console.log(totalPerPersonExact);
    totalPerPerson = totalPerPersonExact.toFixed(2);

    tipPerPersonExact = (billAmount/numberOfPeople) * tipDecimal;
    // console.log(tipPerPersonExact);
    tipPerPerson = tipPerPersonExact.toFixed(2);

    totalAmount.innerHTML = ("$" + totalPerPerson);
    tipAmount.innerHTML = ("$" + tipPerPerson);
  }
}

//Reset button

resetButton.addEventListener("click", function() {
  error = null;
  numberOfPeopleInput.classList.remove("error");
  billAmountInput.classList.remove("error");

  numberOfPeopleInput.value = null;
  billAmountInput.value = null;
  customButton.value = null;
  tipAmount.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
})

//Creates error message text

function errorMessage(name) {
  let h3 = document.createElement("h3");
  h3.textContent = name;
  h3.classList.add("errorText");
  h3.setAttribute("id", "bill-error-child");
  return h3;
}
