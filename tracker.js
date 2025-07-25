
let table = document.getElementById("table")



document.getElementById("add-button").addEventListener("click", () => {

    let date = document.getElementsByClassName("dateinput")[0].value
    let amount = document.getElementsByClassName("amountinput")[0].value
    let transaction = document.getElementsByClassName("transactioninput")[0].value

    if (!date || !amount || transaction === "Transaction Type") {
        alert("Please fill all fields correctly.");
        return;
    }


    let row = document.createElement('tr')
    let amountcell = document.createElement('td')
    let transactiontypecell = document.createElement('td')
    let transactiondatecell = document.createElement('td')
    let bincell = document.createElement('td')
    let deletebutton = document.createElement('button')
    let binimage = document.createElement('img')
    binimage.src = 'images/recycle-bin.png'
    binimage.style.width = '25px'
    binimage.style.height = '25px'

    deletebutton.appendChild(binimage)
    deletebutton.classList.add("delete-button")

    amountcell.innerHTML = amount
    transactiontypecell.innerHTML = transaction
    transactiondatecell.innerHTML = date

    bincell.appendChild(deletebutton)


    row.appendChild(amountcell)
    row.appendChild(transactiontypecell)
    row.appendChild(transactiondatecell)
    row.appendChild(bincell)

    table.appendChild(row)

    let totalincome = document.getElementById("totalincome").innerText
    let expense = document.getElementById("expense").innerText
    let balance = document.getElementById("balance").innerText

    if (transaction === 'income') {
        if (parseInt(totalincome) == '0') {
            document.getElementById("totalincome").innerText = amount
           
        }
        else {
            document.getElementById("totalincome").innerText = parseInt(totalincome) + parseInt(amount)
           

        }

        if (parseInt(balance) == "0") {
            document.getElementById("balance").innerText = amount
         
        }
        else {
            document.getElementById("balance").innerText = parseInt(balance) + parseInt(amount)
        
        }
    }
    else if (transaction === 'expense') {
        if (parseInt(expense) == '0') {

            document.getElementById("expense").innerText = amount
           
        }
        else {
            document.getElementById("expense").innerText = parseInt(expense) + parseInt(amount)
           
        }
        if (parseInt(balance) == "0") {
            document.getElementById("balance").innerText = 0-amount
          
        }
        else {
           document. getElementById("balance").innerText = parseInt(balance) - parseInt(amount)
           
        }
    }




deletebutton.addEventListener("click", () => {

    let deletedAmount = parseInt(amountcell.innerText);
    let deletedType = transactiontypecell.innerText;


    let totalIncomeElement = document.getElementById("totalincome");
    let expenseElement = document.getElementById("expense");
    let balanceElement = document.getElementById("balance");

    let currentIncome = parseInt(totalIncomeElement.innerText);
    let currentExpense = parseInt(expenseElement.innerText);
    let currentBalance = parseInt(balanceElement.innerText);

    if (deletedType === 'income') {
        totalIncomeElement.innerText = currentIncome - deletedAmount;
        balanceElement.innerText = currentBalance - deletedAmount;
     
    } else if (deletedType === 'expense') {
        expenseElement.innerText = currentExpense - deletedAmount;
        balanceElement.innerText = currentBalance + deletedAmount;
       
    }


    row.remove();
  
});




// deletebutton.addEventListener("click", (e) => {
//   e.target.closest("tr").remove(); 
// });




})






