// Selecting HTML Elements
let totalBalance = document.getElementById("total-balance");
let totalIncome = document.getElementById("total-income");
let totalExpense = document.getElementById("total-expenses");
let button = document.getElementById("button");
let addBox = document.getElementById("box-2")

// User Inputs
let inputText = document.getElementById("input-text");  
let inputAmount = document.getElementById("input-amount");


// Showing Input amount to income screen
let incomeShow =()=>{
    totalIncome.innerHTML = `$${inputAmount.value}`;
}

// Showing Input amount to expenses screen
let expenseShow =()=>{
    totalExpense.innerHTML = `$${inputAmount.value}`;
}

// Updating Total Balance
let updateTotalBalance=()=>{
    if(inputAmount.value >= 0){
        let balanceZero = parseInt(totalBalance.innerHTML);
    if(isNaN(balanceZero)){
        balanceZero = 0;
    }
    totalBalance.innerHTML = balanceZero + parseInt(inputAmount.value);
    }
    else if(inputAmount.value <= 0){
        let balanceZero = parseInt(totalBalance.innerHTML);
    if(isNaN(balanceZero)){
        balanceZero = 0;
    }
    totalBalance.innerHTML = balanceZero - Math.abs(parseInt(inputAmount.value));
    }
}

// Showing main balance to screen
let balanceShow =()=>{
    button.addEventListener("click", ()=>{
        if(inputAmount.value > 0){
            incomeShow();
            updateTotalBalance();
            showTransactions();
        }
        else{
            expenseShow();
            updateTotalBalance();
            showTransactions();
        }
    })
}
balanceShow();

// Showing Transactions details
let showTransactions=()=>{
    let textSpan = document.createElement("span");
    let amountSpan = document.createElement("span");
    textSpan.innerHTML = inputText.value;
    amountSpan.innerHTML = inputAmount.value;
    addBox.appendChild(textSpan);
    addBox.appendChild(amountSpan);
}