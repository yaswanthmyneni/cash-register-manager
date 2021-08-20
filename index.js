var billAmt = document.getElementById("billAmt");
var cashGiven = document.getElementById("cashGiven");

var cashGivenDiv = document.getElementById("cashGivenDiv");
var outputDiv = document.getElementById("output");

var nextBtn = document.getElementById("nextBtn");
var checkBtn = document.getElementById("checkBtn");

var notesRemaining = document.getElementsByClassName("notesRemaining");

var errorDiv = document.getElementById("errorDiv");
var currency = [2000, 500, 100, 20, 10, 5, 1];
var notes = [];

cashGivenDiv.style.display = "none";
outputDiv.style.display = "none";

nextBtn.addEventListener("click", () => {
  if (Number(billAmt.value) > 0) {
    hideError();
    cashGivenDiv.style.display = "block";
  } else {
    errorMsg("Please enter a valid amount");
  }
});

checkBtn.addEventListener("click", () => {
  if (Number(cashGiven.value) >= Number(billAmt.value)) {
    hideError();
    solution();
    for (let i = 0; i < notes.length; i++) {
      if (notes[i] === undefined) continue;
      notesRemaining[i].innerText = notes[i];
    }
    outputDiv.style.display = "block";
  } else {
    errorMsg("Please enter a valid amount");
  }
});

var solution = () => {
  var billAmount = parseInt(billAmt.value);
  var cash = parseInt(cashGiven.value);
  var cashRemaining = cash - billAmount;
  for (let i = 0; i < currency.length; i++) {
    if (cashRemaining >= currency[i]) {
      notes[i] = parseInt(cashRemaining / currency[i]);
      cashRemaining %= currency[i];
    }
  }
};

var errorMsg = (text) => {
  errorDiv.style.display = "block";
  errorDiv.innerHTML = "<p>" + text + "</p>";
};

var hideError = () => {
  errorDiv.style.display = "none";
};
