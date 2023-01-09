class Transaction{
    constructor(){
        this.totalBalance = document.getElementById("total-balance");
        this.totalIncome = document.getElementById("total-income");
        this.totalExpense = document.getElementById("total-expenses");
        this.button = document.getElementById("button");
        this.addBox = document.getElementById("box-2");
        this.inputText = document.getElementById("input-text");
        this.inputAmount = document.getElementById("input-amount");
    }
    incomeShow(){
        this.totalIncome.innerHTML = `$${this.inputAmount.value}`;
    }
    expenseShow(){
        this.totalExpense.innerHTML = `$${this.inputAmount.value}`;
    }
    updateTotalBalance() {
        if (this.inputAmount.value >= 0) {
          let balanceZero = parseInt(this.totalBalance.innerHTML);
          if (isNaN(balanceZero)) {
            balanceZero = 0;
          }
          this.totalBalance.innerHTML = balanceZero + parseInt(this.inputAmount.value);
        } else if (this.inputAmount.value <= 0) {
          let balanceZero = parseInt(this.totalBalance.innerHTML);
          if (isNaN(balanceZero)) {
            balanceZero = 0;
          }
          this.totalBalance.innerHTML =
            balanceZero - Math.abs(parseInt(this.inputAmount.value));
        }
      }
    showTransactions(){
        let newText = document.createElement("span");
        let newAmount = document.createElement("span");
        newText.innerHTML = this.inputText.value;
        newAmount.innerHTML = this.inputAmount.value;
        this.addBox.appendChild(newText);
        this.addBox.appendChild(newAmount);
    }
    balanceShow(){
        this.button.addEventListener("click", () => {
            if(this.inputAmount.value > 0){
                this.incomeShow();
                this.updateTotalBalance();
                this.showTransactions();
            }else{
                this.expenseShow();
                this.updateTotalBalance();
                this.showTransactions();
            }
        });
    }
}

const transaction = new Transaction();
transaction.balanceShow();