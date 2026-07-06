class Expense{

    constructor(id,description,category,amount,date){

        this.id = id;
        this.description = description;
        this.category = category;
        this.amount = amount;
        this.date = date;

    }

}

class ManageExpense{

     Expenses = []

}
















function render() {
    // 1. Filter Logic
    let filterCategoryInput = document.querySelector("#filterCategory");
    let filterValue = filterCategoryInput.value;
    
    let displayData = array;
    
    // Agar filter "all" ya khali hai, toh pura array dikhao, warna filter karo
    if (filterValue && filterValue !== "") {
        displayData = array.filter(item => item.category === filterValue);
    }

    // 2. HTML Update (Main Logic)
    const listElement = document.querySelector("#transactionsList");
    const totalElement = document.querySelector("#totalAmount");
    
    if (!listElement) return;

    // Purana content clear karo
    listElement.innerHTML = "";

    // Agar koi data nahi hai
    if (displayData.length === 0) {
        listElement.innerHTML = `
            <div class="p-6 text-center text-gray-500">
                No transactions found.
            </div>
        `;
        
        // Total ko 0 set karo
        if(totalElement) totalElement.textContent = "0";
        return;
    }

    // Total Calculate karo (Filtered data ka)
    let currentTotal = displayData.reduce((acc, cur) => acc + cur.amount, 0);
    if(totalElement) totalElement.textContent = currentTotal.toLocaleString(); // Comma add karo (e.g., 1,000)

    // Har item ke liye HTML banayein (Tailwind Classes ke saath)
    displayData.forEach(item => {
        const li = document.createElement("div");
        li.className = "flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 hover:bg-gray-50 transition border-b border-gray-100 last:border-0";
        
        // Content
        li.innerHTML = `
            <div class="flex items-center mb-2 sm:mb-0">
                <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg">
                    ${item.selected === 'Food' ? '🍔' : 
                      item.selected === 'Transport' ? '🚗' : 
                      item.selected === 'Entertainment' ? '🎬' : 
                      item.selected === 'Utilities' ? '💡' : '📦'}
                </div>
                <div>
                    <p class="font-medium text-gray-800">${item.description}</p>
                    <p class="text-sm text-gray-500">${item.selected}</p>
                </div>
            </div>
            
            <div class="flex items-center justify-between w-full sm:w-auto mt-2 sm:mt-0">
                <div class="text-right">
                    <p class="font-bold text-gray-900">₹${item.amount}</p>
                    <p class="text-xs text-gray-500">${item.date}</p>
                </div>
                <button onclick="deleteExpense(${item.id})" class="text-red-500 hover:text-red-700 text-sm font-semibold ml-4">
                    Delete
                </button>
            </div>
        `;

        listElement.appendChild(li);
    });
}

// Delete Function (Naya Function)
function deleteExpense(id) {
    // Array se wo item hatao
    array = array.filter(item => item.id !== id);
    
    // UI update karo
    render();
}





















displayData.forEach((item) => {
        let li = document.createElement("div")
        li.innerHTML = `
            <div class="flex justify-between m-2 p-2 bg-sky-100">
                
                <p>${item.date}</p>
                <p>${item.description}</p>
                <p>${item.selected}</p>
                <p>${item.amount}</p>
                <Button class="text-white py-1 px-2 bg-red-400 rounded-md">Delete</Button>
            </div>

        `
        // return;
        list.appendChild(li)
    })



    border border-indigo-200
    bg-blue-100 



      // <div class="flex justify-between m-2 p-2  ">
            //     <div class="flex gap-8 max-w-md">
            //     <p>${item.date}</p>
            //     <p>${item.description}</p>
            //     <p>${item.selected}</p>
            //     <p>${item.amount}</p>
            //     </div>
            //     <Button  class=" deletebtn text-white bg-red-500 py-1 px-2 rounded-md">Delete</Button>
            // </div>


            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 gap-3 border-b">
    
                <div class="grid grid-cols-2 sm:flex sm:gap-6 text-sm">
                    <p> ${item.date}</p>
                    <p> ${item.description}</p>
                    <p> ${item.selected}</p>
                    <p>${item.amount}</p>
                </div>

                <button class="deletebtn bg-red-500 text-white px-3 py-2 rounded-md w-full sm:w-auto">
                    Delete
                </button>

            </div>



            <div class="flex justify-between items-center flex-wrap gap-2 p-2">

                <div class="flex flex-wrap gap-2 sm:gap-4 md:gap-8 text-sm">

                    <p>${item.date}</p>

                    <p class="truncate max-w-[120px] sm:max-w-[200px]">
                        ${item.description}
                    </p>

                    <p>${item.selected}</p>

                    <p>₹${item.amount}</p>

                </div>

                <button class="deletebtn text-white bg-red-500 py-1 px-2 rounded-md shrink-0">
                    Delete
                </button>

            </div>


            <div class="flex justify-between items-center p-3 sm:p-4">

                <div class="flex items-center gap-3 sm:gap-6 text-sm">

                    <p class="text-gray-500 text-xs sm:text-sm">
                        ${item.date}
                    </p>

                    <p class="font-medium  truncate max-w-[90px] sm:max-w-[150px]">
                        ${item.description}
                    </p>

                    <p class="text-gray-600 truncate max-w-[90px] sm:max-w-[150px]">
                        ${item.selected}
                    </p>

                    <p class="font-bold text-blue-600">
                        ₹${item.amount}
                    </p>

                </div>

                <button class="deletebtn text-white bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md text-sm shrink-0">
                    Delete
                </button>

            </div>