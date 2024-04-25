let billAmountEl = document.getElementById("billAmount");
let percentageTipEl = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalAmountEl = document.getElementById("totalAmount");
let errorMsgEl = document.getElementById("errorMessage");

let calculateButtonEl = document.getElementById("calculateButton");

calculateButtonEl.onclick = function() {
    let billAmount = (billAmountEl.value);
    let percentageTipAmount = (percentageTipEl.value);

    if (billAmount === "") {
        errorMsgEl.textContent = "Please Enter valid Input";
    } else if (percentageTipAmount === "") {
        errorMsgEl.textContent = "Please Enter Valid Input";
    } else {
        errorMsgEl.textContent = ""
        let bill = parseInt(billAmount)
        let calculatedTip = (percentageTipAmount / 100) * bill;
        let total = bill + calculatedTip;
        tipAmountEl.value = calculatedTip;
        totalAmountEl.value = total;
    }
}