let array = [];
let Savedata = localStorage.getItem("Expense");
if (Savedata) {
    array = JSON.parse(Savedata);
}
render();
let myChart = null;
UpdateChart();

function Expense(e) {
    e.preventDefault();
    let dateInput = document.querySelector("#date");
    let descriptionInput = document.querySelector("#description");
    let amountInput = document.querySelector("#amount");
    let categoryInput = document.querySelector("#category");

    let id = Date.now();
    let date = dateInput.value;
    let desc = descriptionInput.value;
    let amount = parseFloat(amountInput.value);
    let category = categoryInput.value;
    let selectedOption = categoryInput.options[categoryInput.selectedIndex].text;

    let obj = {
        id: id,
        date: date,
        description: desc,
        amount: amount,
        category: category,
        selected: selectedOption,
    };
    array.push(obj);

    localStorage.setItem("Expense", JSON.stringify(array));

    let totalamount = array
        .map((data) => {
            return data.amount;
        })
        .reduce((acc, cur) => {
            return acc + cur;
        }, 0);

    console.log("EXpense ke andar array call => ", array);
    console.log("Expense ke andar total call =>", totalamount);

    dateInput.value = "";
    descriptionInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";
    categoryInput.selectedIndex = 0;

    // console.log(displayArray)
    render();
    UpdateChart();
}

function render() {
    let filterCategoryInput = document.querySelector("#filterCategory");
    let filtercategory = filterCategoryInput.value;
    let filterselectedOption =
        filterCategoryInput.options[filterCategoryInput.selectedIndex].text;

    // let filter = array;

    let displayData = array;

    if (filterCategoryInput.value !== "all" && filterCategoryInput.value !== "") {
        displayData = array.filter(
            (item) => item.category == filterCategoryInput.value,
        );
        console.log("if me data displaydata ka =>", displayData);
    } else {
        console.log("else me data displaydata ka =>", displayData);
    }

    let list = document.querySelector("#transactionsList");

    list.innerHTML = "";

    let totalAmount = document.querySelector("#totalAmount");
    totalAmount.innerHTML = "";

    if (!list) return;

    if (displayData.length == 0) {
        list.innerHTML = `
            <p class="p-6 text-gray-500 text-center">No transactions yet</p>
         `;
        if (totalAmount) totalAmount.textContent = "0";

        return;
    }

    console.log("loop ke pehle me data displaydata ka =>", displayData);
    console.log("loop ke pehle  me data array ka =>", array);

    displayData.forEach((item) => {
        let rowDiv = document.createElement("div");
        rowDiv.innerHTML = `
            <div class="flex justify-between items-center p-3">

                <div class="flex items-center gap-2 text-sm min-w-0">

                    <p class="text-gray-500 text-xs whitespace-nowrap">
                        ${item.date}
                    </p>

                    <p class="font-medium max-w-[80px] truncate">
                        ${item.description}
                    </p>

                    <p class="text-gray-600 whitespace-nowrap">
                        ${item.selected}
                    </p>

                    <p class="font-bold text-blue-600 whitespace-nowrap">
                        ₹${item.amount}
                    </p>

                </div>

                <button class="deletebtn text-white bg-red-500 px-3 py-2 rounded-md text-sm shrink-0">
                    Delete
                </button>

            </div>
          

        `;
        list.appendChild(rowDiv);

        rowDiv.querySelector(".deletebtn").addEventListener("click", function () {
            console.log("delete clicked :", item.id);
            array = array.filter((i) => i.id !== item.id);
            localStorage.setItem("Expense", JSON.stringify(array));
            UpdateChart();
            console.log("event me data displaydata ka =>", displayData);
            console.log("event  me data array ka =>", array);
            render();
        });
        // return;
    });

    console.log("event ke baad  me data displaydata ka =>", displayData);
    console.log("event ke baad me data array ka =>", array);

    let totalamount = displayData
        .map((data) => {
            return data.amount;
        })
        .reduce((acc, cur) => {
            return acc + cur;
        }, 0);

    if (totalAmount) totalAmount.textContent = totalamount.toLocaleString();

    // dlt(displayData)
}

function prepareChart() {
    let categories = [...new Set(array.map((item) => item.category))];

    let amounts = categories.map((cat) => {
        let item = array.filter((item) => item.category === cat);

        return item.reduce((sum, item) => sum + item.amount, 0);
        console.log("ExpenseChange me categories ki value =>", categories);
        console.log("ExpenseChange me amount ki value =>", amount);
        console.log("ExpenseChange me item ki value =>", item);
    });

    return { labels: categories, data: amounts };
}

function UpdateChart() {
    let chartData = prepareChart();

    if (chartData.labels.length === 0) {
        if (myChart) {
            myChart.destroy();
            myChart = null;
        }
        return;
    }

    if (!myChart) {
        let ctx = document.querySelector("#expenseChart").getContext("2d");

        myChart = new Chart(ctx, {
            type: "doughnut", // Chart type: 'bar', 'pie', 'doughnut'
            data: {
                labels: chartData.labels, // Categories (Food, Rent)
                datasets: [
                    {
                        label: "Expenses by Category",
                        data: chartData.data, // Amounts (500, 200)
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.6)", // Red
                            "rgba(54, 162, 235, 0.6)", // Blue
                            "rgba(255, 206, 86, 0.6)", // Yellow
                            "rgba(75, 192, 192, 0.6)", // Green
                            "rgba(153, 102, 255, 0.6)", // Purple
                        ],
                        borderColor: "rgba(255, 255, 255, 1)",
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                aspeaspectRatio: 1.5,
                plugins: {
                    legend: { position: "bottom" },
                },
                layout: {
                    padding: 10,
                },
            },
        });
    } else {
        myChart.data.labels = chartData.labels;
        myChart.data.datasets[0].data = chartData.data;
        myChart.update();
    }
}

document.querySelector("#expenseForm").addEventListener("submit", Expense);
document.querySelector("#filterCategory").addEventListener("change", render);

render();
