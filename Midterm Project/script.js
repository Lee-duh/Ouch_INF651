"use strict";

/*
  JavaScript Midterm
  Mini Expense Tracker

  Complete the application using the requirements
  provided in the exam instructions.
*/

// ------------------------------------
// 1. SELECT DOM ELEMENTS
// ------------------------------------

//Select the HTML Elements
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");

const addExpenseButton = document.getElementById("add-expense");
const resetButton = document.getElementById("reset");

const expenseList = document.getElementById("expense-list");
const expenseCount = document.getElementById("expense-count");
const totalDisplay = document.getElementById("total");
const budgetStatus = document.getElementById("budget-status");
const message = document.getElementById("message");


// ------------------------------------
// 2. APPLICATION DATA
// ------------------------------------

// Create an empty array for expenses.
const expenses = [];

// Create a variable or constant for the budget.
const budget = 500;

// ------------------------------------
// 3. FUNCTIONS
// ------------------------------------

// Create a function for adding an expense.
function addExpense() {
    // Read the input values.
    const description = descriptionInput.value.trim();
    const amountText = amountInput.value.trim();
    const amount = Number(amountText);
    const category = categorySelect.value;

    // Clear the previous message.
    message.textContent = "";
    message.className = "message";

    // Validate the description.
    if (description === "") {
        showMessage("Please enter an expense description.", "error");
        return;
    }

    // Validate that the amount is not empty.
    if (amountText === "") {
        showMessage("Please enter an expense amount.", "error");
        return;
    }

    // Validate the amount.
    if (!Number.isFinite(amount) || amount <= 0) {
        showMessage(
            "Please enter a valid amount greater than 0.",
            "error"
        );
        return;
    }

    // Create an expense object.
    const expense = {
        description: description,
        amount: amount,
        category: category
    };

    // Add the expense object to the array.
    expenses.push(expense);

    // Update the expense list, total, and budget status.
    displayExpenses();
    updateTotal();
    updateBudgetStatus();

    // Show a success message.
    showMessage("Expense added successfully!", "success");

    // Clear the form for the next expense.
    descriptionInput.value = "";
    amountInput.value = "";
    categorySelect.selectedIndex = 0;
}

// Create a function for displaying expenses.
function displayExpenses() {
    // Clear the existing list before displaying it again.
    expenseList.innerHTML = "";

    // Display the empty message if there are no expenses.
    if (expenses.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "No expenses have been added yet.";

        expenseList.appendChild(emptyMessage);
    } else {
        // Loop through the expenses array.
        for (let i = 0; i < expenses.length; i++) {
            const expense = expenses[i];

            // Create a container for each expense.
            const expenseItem = document.createElement("div");
            expenseItem.className = "expense-item";

            // Create the description element.
            const descriptionElement = document.createElement("p");
            descriptionElement.className = "expense-description";
            descriptionElement.textContent = expense.description;

            // Create the category element.
            const categoryElement = document.createElement("p");
            categoryElement.className = "expense-category";
            categoryElement.textContent = expense.category;

            // Create the amount element.
            const amountElement = document.createElement("p");
            amountElement.className = "expense-amount";
            amountElement.textContent = "$" + expense.amount.toFixed(2);

            // Add the elements to the expense container.
            expenseItem.appendChild(descriptionElement);
            expenseItem.appendChild(categoryElement);
            expenseItem.appendChild(amountElement);

            // Add the expense container to the list.
            expenseList.appendChild(expenseItem);
        }
    }

    // Update the expense count.
    expenseCount.textContent = expenses.length + " Expenses";
}

// Create a function for calculating the total.
function updateTotal() {
    // Start the total at zero.
    let total = 0;

    // Add each expense amount to the total.
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    // Round the total to two decimal places.
    total = Math.round((total + Number.EPSILON) * 100) / 100;

    // Display the total as currency.
    totalDisplay.textContent = "$" + total.toFixed(2);

    // Return the calculated total.
    return total;
}

// Create a function for updating the budget status.
function updateBudgetStatus() {
    const total = updateTotal();

    if (total <= budget) {
        budgetStatus.textContent = "You are under budget.";
        budgetStatus.classList.remove("over-budget");
        budgetStatus.classList.add("under-budget");
    } else {
        budgetStatus.textContent = "You are over budget.";
        budgetStatus.classList.remove("under-budget");
        budgetStatus.classList.add("over-budget");
    }
}

// Create a function for displaying a success or error message.
function showMessage(text, type) {
    message.textContent = text;
    message.className = "message " + type;
}

// Create a function for resetting the application.
function resetApplication() {
    // Remove all expenses from the array.
    expenses.length = 0;

    // Clear the form.
    descriptionInput.value = "";
    amountInput.value = "";
    categorySelect.selectedIndex = 0;

    // Clear success and error messages.
    message.textContent = "";
    message.className = "message";

    // Restore the empty expense list and count.
    displayExpenses();

    // Reset the total.
    totalDisplay.textContent = "$0.00";
        
    // Clear the budget status message
    budgetStatus.textContent = "";
    budgetStatus.classList.remove("over-budget", "under-budget");
}

// ------------------------------------
// 4. EVENT LISTENERS
// ------------------------------------

// Add an event listener to the Add Expense button.
addExpenseButton.addEventListener("click", addExpense);

// Add an event listener to the Reset button.
resetButton.addEventListener("click", resetApplication);

// ------------------------------------
// 5. INITIALIZE THE APPLICATION
// ------------------------------------

// Display the initial empty list and total.
displayExpenses();
updateTotal();
updateBudgetStatus();
