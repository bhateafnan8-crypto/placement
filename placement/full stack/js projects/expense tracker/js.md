  let  addbtn = document.querySelector("#add_btn")
  let  desc = document.querySelector("#desc")
  let  select = document.querySelector("#select")
  let  opt = document.querySelector("#opt")
  let  amount = document.querySelector("#amount")
  let  date = document.querySelector("#date")

 const opt1 = select.value;
 const opt_text = select.options[select.selectedIndex].text;
 function getData(e){
     e.preventDefault()
     console.log(desc.value,opt_text,opt1,amount.value,date.value)
 }
addbtn.addEventListener("click",getData)




 1. Select elements (Ensure IDs match the HTML exactly)
 const addBtn = document.querySelector("#add_btn");
 const descInput = document.querySelector("#description");
 const categorySelect = document.querySelector("#category");
 const amountInput = document.querySelector("#amount");
 const dateInput = document.querySelector("#date");

 function getData(e) {
     e.preventDefault(); // Stop page reload

     // 2. Get values INSIDE the function (so they are current)
     const description = descInput.value;
     const amount = amountInput.value;
     const date = dateInput.value;
    
     // Get Select Value and Text
     const categoryValue = categorySelect.value;
     const categoryText = categorySelect.options[categorySelect.selectedIndex].text;

     // 3. Validate (Optional but recommended)
     if (!description || !amount || !date || !categoryValue) {
         alert("Please fill all fields");
         return;
     }

     // 4. Log Data
     console.log({
         description,
         amount,
         category: categoryValue,
         categoryLabel: categoryText,
         date
     });

     // 5. Clear Form (Optional)
     descInput.value = '';
     amountInput.value = '';
     dateInput.value = '';
     categorySelect.selectedIndex = 0;
 }

// // // // // 6. Attach Event Listener
// // // // addBtn.addEventListener("click", getData);   




// // // class ExpenseTracker {
// // //   constructor() {
// // //     // 1. Select DOM Elements
// // //     this.addBtn = document.querySelector("#add_btn");
// // //     this.descInput = document.querySelector("#description");
// // //     this.categorySelect = document.querySelector("#category");
// // //     this.amountInput = document.querySelector("#amount");
// // //     this.dateInput = document.querySelector("#date");
    
// // //     // Target the list container and total display
// // //     this.listContainer = document.querySelector("#transactionsList");
// // //     this.totalEl = document.querySelector("#totalAmount");
    
// // //     this.expenses = [];

// // //     // 2. Attach Event Listener
// // //     this.addBtn.addEventListener("click", (e) => this.handleAddExpense(e));
// // //   }

// // //   handleAddExpense(e) {
// // //     e.preventDefault();

// // //     // 3. Gather Data
// // //     const expense = {
// // //       id: Date.now(),
// // //       description: this.descInput.value,
// // //       amount: parseFloat(this.amountInput.value),
// // //       category: this.categorySelect.value,
// // //       categoryLabel: this.categorySelect.options[this.categorySelect.selectedIndex].text,
// // //       date: this.dateInput.value
// // //     };

// // //     // Validation
// // //     if (!expense.description || !expense.amount || !expense.date) {
// // //       alert("Please fill all fields");
// // //       return;
// // //     }

// // //     // Add to array
// // //     this.expenses.push(expense);

// // //     // 4. Render & Update
// // //     this.renderExpenses();
// // //     this.updateTotal();
// // //     this.clearForm();
// // //   }

// // //   // 5. Render List Using Your Tailwind Classes
// // //   renderExpenses() {
// // //     this.listContainer.innerHTML = ""; // Clear current list

// // //     if (this.expenses.length === 0) {
// // //       // Your original "No transactions" message with your classes
// // //       this.listContainer.innerHTML = `<p class="p-6 text-gray-500 text-center">No transactions yet</p>`;
// // //       return;
// // //     }

// // //     this.expenses.forEach((item) => {
// // //       const row = document.createElement("div");
      
// // //       // APPLYING YOUR EXACT TAILWIND CLASSES FOR THE ROW
// // //       row.className = "p-6 flex items-center justify-between hover:bg-gray-50 transition border-b border-gray-200";

// // //       row.innerHTML = `
// // //         <div class="flex items-center gap-4">
// // //           <!-- Icon/Category Badge -->
// // //           <div class="bg-blue-100 text-blue-600 p-2 rounded-lg text-sm font-bold">
// // //             ${item.categoryLabel.split(' ')[0]}
// // //           </div>
          
// // //           <!-- Text Details -->
// // //           <div>
// // //             <p class="font-semibold text-gray-800">${item.description}</p>
// // //             <p class="text-sm text-gray-500">${item.date} • ${item.categoryLabel}</p>
// // //           </div>
// // //         </div>

// // //         <!-- Amount & Delete -->
// // //         <div class="text-right">
// // //           <p class="font-bold text-gray-900">₹${item.amount.toFixed(2)}</p>
// // //           <button onclick="tracker.deleteExpense(${item.id})" class="text-sm text-red-500 hover:text-red-700 font-medium mt-1">
// // //             Delete
// // //           </button>
// // //         </div>
// // //       `;
      
// // //       this.listContainer.appendChild(row);
// // //     });
// // //   }

// // //   // 6. Update Total Amount
// // //   updateTotal() {
// // //     const total = this.expenses.reduce((sum, item) => sum + item.amount, 0);
// // //     this.totalEl.textContent = total.toFixed(2);
// // //   }

// // //   // 7. Delete Item
// // //   deleteExpense(id) {
// // //     this.expenses = this.expenses.filter(item => item.id !== id);
// // //     this.renderExpenses();
// // //     this.updateTotal();
// // //   }

// // //   // 8. Clear Inputs
// // //   clearForm() {
// // //     this.descInput.value = '';
// // //     this.amountInput.value = '';
// // //     this.dateInput.value = '';
// // //     this.categorySelect.selectedIndex = 0;
// // //     this.descInput.focus();
// // //   }
// // // }

// // // // Initialize Class
// // // let tracker;
// // // document.addEventListener('DOMContentLoaded', () => {
// // //   tracker = new ExpenseTracker();
// // // });   



// // class ExpenseTracker {
// //   constructor() {
// //     // 1. Select DOM Elements
// //     this.addBtn = document.querySelector("#add_btn");
// //     this.descInput = document.querySelector("#description");
// //     this.categorySelect = document.querySelector("#category");
// //     this.amountInput = document.querySelector("#amount");
// //     this.dateInput = document.querySelector("#date");
// //     this.listContainer = document.querySelector("#transactionsList");
// //     this.totalEl = document.querySelector("#totalAmount");
    
// //     this.expenses = [];
// //     this.chartInstance = null; // Store chart instance

// //     // 2. Attach Event Listener
// //     this.addBtn.addEventListener("click", (e) => this.handleAddExpense(e));
    
// //     // 3. Initialize Chart on Load
// //     this.initChart();
// //   }

// //   handleAddExpense(e) {
// //     e.preventDefault();

// //     const expense = {
// //       id: Date.now(),
// //       description: this.descInput.value,
// //       amount: parseFloat(this.amountInput.value),
// //       category: this.categorySelect.value,
// //       categoryLabel: this.categorySelect.options[this.categorySelect.selectedIndex].text,
// //       date: this.dateInput.value
// //     };

// //     if (!expense.description || !expense.amount || !expense.date) {
// //       alert("Please fill all fields");
// //       return;
// //     }

// //     this.expenses.push(expense);
// //     this.renderExpenses();
// //     this.updateTotal();
// //     this.updateChart(); // <--- Update Chart
// //     this.clearForm();
// //   }

// //   deleteExpense(id) {
// //     this.expenses = this.expenses.filter(item => item.id !== id);
// //     this.renderExpenses();
// //     this.updateTotal();
// //     this.updateChart(); // <--- Update Chart on Delete
// //   }

// //   // 4. Render List (Same as before)
// //   renderExpenses() {
// //     this.listContainer.innerHTML = "";
// //     if (this.expenses.length === 0) {
// //       this.listContainer.innerHTML = `<p class="p-6 text-gray-500 text-center">No transactions yet</p>`;
// //       return;
// //     }

// //     this.expenses.forEach((item) => {
// //       const row = document.createElement("div");
// //       row.className = "p-6 flex items-center justify-between hover:bg-gray-50 transition border-b border-gray-200";
// //       row.innerHTML = `
// //         <div class="flex items-center gap-4">
// //           <div class="bg-blue-100 text-blue-600 p-2 rounded-lg text-sm font-bold">
// //             ${item.categoryLabel.split(' ')[0]}
// //           </div>
// //           <div>
// //             <p class="font-semibold text-gray-800">${item.description}</p>
// //             <p class="text-sm text-gray-500">${item.date} • ${item.categoryLabel}</p>
// //           </div>
// //         </div>
// //         <div class="text-right">
// //           <p class="font-bold text-gray-900">₹${item.amount.toFixed(2)}</p>
// //           <button onclick="tracker.deleteExpense(${item.id})" class="text-sm text-red-500 hover:text-red-700 font-medium mt-1">Delete</button>
// //         </div>
// //       `;
// //       this.listContainer.appendChild(row);
// //     });
// //   }

// //   updateTotal() {
// //     const total = this.expenses.reduce((sum, item) => sum + item.amount, 0);
// //     this.totalEl.textContent = total.toFixed(2);
// //   }

// //   clearForm() {
// //     this.descInput.value = '';
// //     this.amountInput.value = '';
// //     this.dateInput.value = '';
// //     this.categorySelect.selectedIndex = 0;
// //     this.descInput.focus();
// //   }

// //   // 5. Initialize Chart
// //   initChart() {
// //     const ctx = document.getElementById("expenseChart").getContext("2d");
    
// //     this.chartInstance = new Chart(ctx, {
// //       type: "doughnut", // You can change to 'bar' or 'pie'
// //       data: {
// //         labels: [],
// //         datasets: [{
// //           label: "Spending by Category",
// //           data: [],
// //           backgroundColor: [
// //             "#3b82f6", // Blue
// //             "#10b981", // Green
// //             "#f59e0b", // Yellow
// //             "#ef4444", // Red
// //             "#8b5cf6", // Purple
// //             "#ec4899"  // Pink
// //           ],
// //           borderWidth: 1
// //         }]
// //       },
// //       options: {
// //         responsive: true,
// //         plugins: {
// //           legend: { position: "bottom" }
// //         }
// //       }
// //     });
// //   }

// //   // 6. Update Chart Data
// //   updateChart() {
// //     // Aggregate data by category
// //     const categoryTotals = {};
    
// //     this.expenses.forEach(expense => {
// //       if (categoryTotals[expense.category]) {
// //         categoryTotals[expense.category] += expense.amount;
// //       } else {
// //         categoryTotals[expense.category] = expense.amount;
// //       }
// //     });

// //     // Prepare arrays for Chart.js
// //     const labels = Object.keys(categoryTotals).map(key => {
// //       // Find the original label with emoji (e.g., "🍔 Food")
// //       const fullLabel = this.expenses.find(e => e.category === key)?.categoryLabel || key;
// //       return fullLabel;
// //     });
// //     const data = Object.values(categoryTotals);

// //     // Update Chart Instance
// //     this.chartInstance.data.labels = labels;
// //     this.chartInstance.data.datasets[0].data = data;
// //     this.chartInstance.update();
// //   }
// // }

// // // Initialize
// // let tracker;
// // document.addEventListener('DOMContentLoaded', () => {
// //   tracker = new ExpenseTracker();
// // });   



// class ExpenseTracker {
//   constructor() {
//     // 1. Select DOM Elements
//     this.addBtn = document.querySelector("#add_btn");
//     this.descInput = document.querySelector("#description");
//     this.categorySelect = document.querySelector("#category");
//     this.amountInput = document.querySelector("#amount");
//     this.dateInput = document.querySelector("#date");
//     this.listContainer = document.querySelector("#transactionsList");
//     this.totalEl = document.querySelector("#totalAmount");
//     this.filterSelect = document.querySelector("#filterCategory"); // Filter Dropdown
    
//     this.expenses = [];
//     this.chartInstance = null;

//     // 2. Attach Event Listeners
//     this.addBtn.addEventListener("click", (e) => this.handleAddExpense(e));
//     this.filterSelect.addEventListener("change", () => this.handleFilterChange()); // Filter Listener
//   }

//   handleAddExpense(e) {
//     e.preventDefault();

//     const expense = {
//       id: Date.now(),
//       description: this.descInput.value,
//       amount: parseFloat(this.amountInput.value),
//       category: this.categorySelect.value,
//       categoryLabel: this.categorySelect.options[this.categorySelect.selectedIndex].text,
//       date: this.dateInput.value
//     };

//     if (!expense.description || !expense.amount || !expense.date) {
//       alert("Please fill all fields");
//       return;
//     }

//     this.expenses.push(expense);
//     this.handleFilterChange(); // Re-render with filter applied
//     this.clearForm();
//   }

//   // 3. Handle Filter Logic
//   handleFilterChange() {
//     const selectedCategory = this.filterSelect.value;

//     // Filter the array
//     const filteredData = selectedCategory 
//       ? this.expenses.filter(item => item.category === selectedCategory)
//       : this.expenses; // If empty, show all

//     // Update UI with filtered data
//     this.renderExpenses(filteredData);
//     this.updateTotal(filteredData);
//     this.updateChart(filteredData);
//   }

//   deleteExpense(id) {
//     this.expenses = this.expenses.filter(item => item.id !== id);
//     this.handleFilterChange(); // Re-apply current filter
//   }

//   // 4. Render List (Accepts data array)
//   renderExpenses(dataToRender) {
//     this.listContainer.innerHTML = "";

//     if (dataToRender.length === 0) {
//       this.listContainer.innerHTML = `<p class="p-6 text-gray-500 text-center">No transactions found</p>`;
//       return;
//     }

//     dataToRender.forEach((item) => {
//       const row = document.createElement("div");
//       row.className = "p-6 flex items-center justify-between hover:bg-gray-50 transition border-b border-gray-200";
//       row.innerHTML = `
//         <div class="flex items-center gap-4">
//           <div class="bg-blue-100 text-blue-600 p-2 rounded-lg text-sm font-bold">
//             ${item.categoryLabel.split(' ')[0]}
//           </div>
//           <div>
//             <p class="font-semibold text-gray-800">${item.description}</p>
//             <p class="text-sm text-gray-500">${item.date} • ${item.categoryLabel}</p>
//           </div>
//         </div>
//         <div class="text-right">
//           <p class="font-bold text-gray-900">₹${item.amount.toFixed(2)}</p>
//           <button onclick="tracker.deleteExpense(${item.id})" class="text-sm text-red-500 hover:text-red-700 font-medium mt-1">Delete</button>
//         </div>
//       `;
//       this.listContainer.appendChild(row);
//     });
//   }

//   // 5. Update Total (Accepts data array)
//   updateTotal(dataToSum) {
//     const total = dataToSum.reduce((sum, item) => sum + item.amount, 0);
//     this.totalEl.textContent = total.toFixed(2);
//   }

//   clearForm() {
//     this.descInput.value = '';
//     this.amountInput.value = '';
//     this.dateInput.value = '';
//     this.categorySelect.selectedIndex = 0;
//     this.descInput.focus();
//   }

//   // 6. Initialize Chart
//   initChart() {
//     const ctx = document.getElementById("expenseChart").getContext("2d");
//     this.chartInstance = new Chart(ctx, {
//       type: "doughnut",
//       data: { labels: [], datasets: [{ label: "Spending", data: [], backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"] }] },
//       options: { responsive: true, plugins: { legend: { position: "bottom" } } }
//     });
//   }

//   // 7. Update Chart (Accepts data array)
//   updateChart(dataToChart) {
//     const categoryTotals = {};
//     dataToChart.forEach(expense => {
//       categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
//     });

//     const labels = Object.keys(categoryTotals).map(key => {
//       return dataToChart.find(e => e.category === key)?.categoryLabel || key;
//     });
//     const data = Object.values(categoryTotals);

//     this.chartInstance.data.labels = labels;
//     this.chartInstance.data.datasets[0].data = data;
//     this.chartInstance.update();
//   }
// }

// // Initialize
// let tracker;
// document.addEventListener('DOMContentLoaded', () => {
//   tracker = new ExpenseTracker();
//   tracker.initChart(); // Start chart
//   tracker.handleFilterChange(); // Initial render
// });   



class ExpenseTracker {
  constructor() {
    // 1. Select DOM Elements
    this.addBtn = document.querySelector("#add_btn");
    this.descInput = document.querySelector("#description");
    this.categorySelect = document.querySelector("#category");
    this.amountInput = document.querySelector("#amount");
    this.dateInput = document.querySelector("#date");
    this.listContainer = document.querySelector("#transactionsList");
    this.totalEl = document.querySelector("#totalAmount");
    this.filterSelect = document.querySelector("#filterCategory");
    
    // 2. Load Data from LocalStorage on Init
    this.expenses = this.loadExpenses();
    this.chartInstance = null;

    // 3. Attach Event Listeners
    this.addBtn.addEventListener("click", (e) => this.handleAddExpense(e));
    this.filterSelect.addEventListener("change", () => this.handleFilterChange());
    
    // 4. Initialize UI
    this.initChart();
    this.handleFilterChange(); // Renders list, total, and chart based on loaded data
  }

  // --- LocalStorage Methods ---

  loadExpenses() {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];
  }

  saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }

  // --- Core Logic ---

  handleAddExpense(e) {
    e.preventDefault();

    const expense = {
      id: Date.now(),
      description: this.descInput.value,
      amount: parseFloat(this.amountInput.value),
      category: this.categorySelect.value,
      categoryLabel: this.categorySelect.options[this.categorySelect.selectedIndex].text,
      date: this.dateInput.value
    };

    if (!expense.description || !expense.amount || !expense.date) {
      alert("Please fill all fields");
      return;
    }

    this.expenses.push(expense);
    
    this.saveExpenses(); // <--- Save to LocalStorage
    this.handleFilterChange();
    this.clearForm();
  }

  deleteExpense(id) {
    this.expenses = this.expenses.filter(item => item.id !== id);
    
    this.saveExpenses(); // <--- Save to LocalStorage after delete
    this.handleFilterChange();
  }

  handleFilterChange() {
    const selectedCategory = this.filterSelect.value;
    const filteredData = selectedCategory 
      ? this.expenses.filter(item => item.category === selectedCategory)
      : this.expenses;

    this.renderExpenses(filteredData);
    this.updateTotal(filteredData);
    this.updateChart(filteredData);
  }

  // --- Render Methods ---

  renderExpenses(dataToRender) {
    this.listContainer.innerHTML = "";
    if (dataToRender.length === 0) {
      this.listContainer.innerHTML = `<p class="p-6 text-gray-500 text-center">No transactions found</p>`;
      return;
    }

    dataToRender.forEach((item) => {
      const row = document.createElement("div");
      row.className = "p-6 flex items-center justify-between hover:bg-gray-50 transition border-b border-gray-200";
      row.innerHTML = `
        <div class="flex items-center gap-4">
          <div class="bg-blue-100 text-blue-600 p-2 rounded-lg text-sm font-bold">
            ${item.categoryLabel.split(' ')[0]}
          </div>
          <div>
            <p class="font-semibold text-gray-800">${item.description}</p>
            <p class="text-sm text-gray-500">${item.date} • ${item.categoryLabel}</p>
          </div>
        </div>
        <div class="text-right">
          <p class="font-bold text-gray-900">₹${item.amount.toFixed(2)}</p>
          <button onclick="tracker.deleteExpense(${item.id})" class="text-sm text-red-500 hover:text-red-700 font-medium mt-1">Delete</button>
        </div>
      `;
      this.listContainer.appendChild(row);
    });
  }

  updateTotal(dataToSum) {
    const total = dataToSum.reduce((sum, item) => sum + item.amount, 0);
    this.totalEl.textContent = total.toFixed(2);
  }

  clearForm() {
    this.descInput.value = '';
    this.amountInput.value = '';
    this.dateInput.value = '';
    this.categorySelect.selectedIndex = 0;
    this.descInput.focus();
  }

  // --- Chart Methods ---

  initChart() {
    const ctx = document.getElementById("expenseChart").getContext("2d");
    this.chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: { labels: [], datasets: [{ label: "Spending", data: [], backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"] }] },
      options: { responsive: true, plugins: { legend: { position: "bottom" } } }
    });
  }

  updateChart(dataToChart) {
    const categoryTotals = {};
    dataToChart.forEach(expense => {
      categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
    });

    const labels = Object.keys(categoryTotals).map(key => {
      return dataToChart.find(e => e.category === key)?.categoryLabel || key;
    });
    const data = Object.values(categoryTotals);

    this.chartInstance.data.labels = labels;
    this.chartInstance.data.datasets[0].data = data;
    this.chartInstance.update();
  }
}

// Initialize
let tracker;
document.addEventListener('DOMContentLoaded', () => {
  tracker = new ExpenseTracker();
});   


//  try by mine

let description = document.querySelector("#description");
let amount = document.querySelector("#amount");
let category = document.querySelector("#category");
let date = document.querySelector("#date");
let addBtn = document.querySelector("#add_btn");



function expenses(e) {
    e.preventDefault();

    let descriptions = description.value;
    let dates = date.value;
    let amounts = amount.value;
    let categorySelect = category.value;
    let categories = category.options[category.selectedIndex].text;

    class Expense {
        constructor(amount, category, date, description, e) {
            this.amount = amount;
            this.category = category;
            this.date = date;
            this.description = description;
        }
    }

   

    const expense1 = new Expense(amounts, categories, dates, descriptions);
    console.log(expense1)

   let arr = [];
   arr[0] = descriptions;
   arr[1] = dates;
   arr[2] = amounts;
   arr[3] = categories;
   
   console.log(arr);
   let arr1 = []
   arr1[0] = amounts;

   arr1.reduce((acc,cur) =>{
    return acc + cur ;
   },0)

   console.log(arr1)



    description.value = "";
    date.value = "";
    amount.value = "";
    category.value = "";
    category.selectedIndex = 0;

}

addBtn.addEventListener("click", expenses)

// function display(item) {
//     let desc = item.description;
//     let date = item.date;
//     let amount = item.amount;
//     let category = item.category;
//     let selected = item.selected;

//     return `${desc} ${date} ${amount} ${category} ${selected}`
// }


  // if(!obj.date ||!obj.description || obj.amount || !obj.category || !obj.selected){

    //     alert("Please fill the derails");
    //     return;
    // }



        //      if (filterCategoryInput.value !== "all" && filterCategoryInput.value !== "") {
    //     displayData = array.filter((item) => item.category == filterCategoryInput.value)
    //     console.log(filter)
    //     return displayData;
    // }
    // else {
    //     console.log(filter)
    //     return displayData
    // }