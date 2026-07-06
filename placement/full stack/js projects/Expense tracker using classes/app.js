class Expenses {  //  declarartion of class (blueprint)
    constructor() { //aisi jagah jo ek baar chalta hai pehli baar jab banna hota hai kisi cheese ko yaha pe wo aata hai jo baar baar har jagah use ho jaise function me globally jo use karnahota hai 
        this.array = [] // array ko initialize kiya jo har jagah use hoga is liye yaha banaya
        this.myChart = null; // ye pehleinitial kia taake null ya undefied ke error se bache agar data naa ho to khaali dikhe pehle ka naa dikh jaaye (overrite naa ho matlab (deleted  ttask naa dikhe))
        this.descInput = document.getElementById("description") // yaha html se id liya taake usko target karke operation perform kar sake
        this.dateInput = document.getElementById("date")
        this.amountInput = document.getElementById("amount")
        this.catInput = document.getElementById("category")

        this.loadFromStorage() // yaha pe pehli baar jab open ho ya refresh ho to data aaye storage se
        this.render()  // yaha display hoga refresh ya open hone per pehli baar
        this.UpdateChart() // ye chart ke liye same pehli baar ya refresh pedikhega
    }

// *********** data method

// Add Expense method here we take inpuut create object and add to array or push ((logic of add expense to array using push from taking input  to push objet into array))

    addExpense() { // ye method hai jo ek kaam ko dikhata hai agar add waale me kuch error aaya to siirf ispe kaam hoga naam se pata chal jaayga ke ye waale part me change karna hai
        const date = this.dateInput.value // yaha values ko input se variables me set kar rahe haie
        const desc = this.descInput.value
        const amount = this.amountInput.value
        const catValue = this.catInput.value
        const catText = this.catInput.options[this.catInput.selectedIndex].text // yaha pe humko text show karna hai to usme set kiye hai jo index select hua uska text dikhana hai agar valye change bhi ho to text dikhega jo dikhna hai

        const newExpense = { // object literals  taake har ek ke liye uski saari info ek jagah aajaye baar baar har ek properties ke liye alag se array ya variable naa banana pade ek baar banao baar baar use karo 
            id: Date.now(), // ye unique id keliye taake isse hum seperate seperate tasks pe kuch kar sake (task === expense (jaha bhi ho yahi matlab hoga))
            date, desc, amount, catValue, catText 
        }

        this.array.push(newExpense) // ye array me push karne ke liye taake ek jagah saare taska aaajye properties ke saath aur operations perform ho hum jo bhi karte hai sab array me hoga // array melene ke wajah ke ek hi array me opertaions hoga jo har objects me chalega baar baar naya objects ke liye kuch karna naa pade
        this.dateInput.value = "" // yaha input ko khaali kar rahe jo form me hai taaki pehle ki value naa dikhe 
        this.descInput.value = ""
        this.amountInput.value = ""
        this.catInput.selectedIndex = 0 //  ye index ko by default me set kar rahee hai same wahi taake select waala na dike (jo ux ke liye accha nahi hota)

        this.saveToStorage() // yaha save kiya q k humko jo task add kiya hai wo refersh ke baad bhi dikhana hai to jab bhi kuch add hoga array me wo storage me bhi save hoga
        this.render() // isko dikhana bhi hai na to yaha jab bhi add hua display hua ui me
        this.UpdateChart() // add hone per chart ko bhi change karna dynamically to isse calculationn karke wo set karega
    }

// Delete Exepnse method here we take unique id and delete match id and show filtered id of mis-matched id  ((logic of delete from check unique id to display mismatch id using filtered and delete match id))

    deleteExpense(id) { // here we take parameter (id) because we want uinque id for delete expense of match id 
        this.array = this.array.filter((i) => i.id !== id)  // this is main things which will be reason or logic to delete of exepense from array // here we take array because we want to delete from array and filter it from array remove from display // here we want only mismatched expense and display that's why here we use filter logic in array because we want it in array if we don't do it will be not delete it will be show  (id !== id => this is logic which is display only mismatched expense)
        this.saveToStorage() // here also save to stoarge we want also delete from storage //it will come from storage if we don't do it and set to array and display in ui 
        this.render() // here is for display in ui 
        this.UpdateChart() // this is for update chart and remove deleted tasks 
    }

// *********** helper method    

// Filtered array method here we want to display only filtered tasks means i want show only food then it will not show any other tasks like enetertainment ((logic of display filtered category using filter ))

    getFilteredArray() { // here we filter from array and display what is match with filterd category (here id not needs becuase we want it by category means group of same category tasks we want to display)
        const filterVal = document.querySelector("#filterCategory").value //here we take value for perform operation 
        if (filterVal !== "") { // here we have to check selected index is zero or not for display tasks //if it will zero then show all because it is empty aur zero both are same
            return this.array.filter(item => item.catValue === filterVal) // this is main condition operation which whill be reason for filtered tasks display to user
        }
        return this.array // here we return array because after tasks main array will be return and set to default 
    }

// ***********  Ui methods

// render method here is main things to become reason to display tasks on ui ((logic of display tasks on ui ))

    render() {
        const list = document.querySelector("#transactionsList") // here we select the html id where we want to display tasks
        if (!list) return // if there is no data then return without any operations perform and get out from loop 
        list.innerHTML = "" // we  have to do empty place where data will be taken to display to prevent from overwrite both previous and new tasks added on ui 

        const displayData = this.getFilteredArray() // this is we called which help to show only display filtered task tha's why it's called helper method

        if (displayData.length === 0) { // here we have to something to make user something like happens means no data found no data here instead of blank ui 
            list.innerHTML = `<p class="p-6 text-gray-500 text-center">No transactions yet</p>`
            document.getElementById("totalAmount").textContent = "0" // here also 0 to set for thats user can understand there is no data we added to tasks 
            return // from get outside of loop we return it
        }

        this.renderExpense(displayData) // here we called renderExpense(which will be understandd in few seconds) here we set value because we want display it from this data array
        this.getTotal(displayData) // here we do for it for total amount display ((this will travel from this value to parameter of method))
    }

// renderExpense method here we create template of html which will be diplay in ui (means instead of show only text to display with styling) ((logic of create html template to display tasks  in ui ))

    renderExpense(expense) {  //  here use paramter to take that's value set while calling like(displayData) this value will be come to this paramter(exepnse) and opeation perform 
        const list = document.querySelector("#transactionsList") // here we want to show tasks that's why we take this using html id
        expense.forEach((item) => { // here we set loop for create template for each of value or an object exist in array to display that value we want to display comes to paramter(item) and use for show
            let rowDiv = document.createElement("div") // here wee create a div where we put the all value in styling and allign of tasks
            rowDiv.innerHTML = ` 
                <div class="flex justify-between items-center p-3">
                    <div class="flex items-center gap-2 text-sm min-w-0">
                        <p class="text-gray-500 text-xs">${item.date}</p>
                        <p class="font-medium">${item.desc}</p>
                        <p class="text-gray-600">${item.catText}</p>
                        <p class="font-bold text-blue-600">₹${item.amount}</p>
                    </div>
                    <button class="deletebtn text-white bg-red-500 px-3 py-2 rounded-md text-sm">Delete</button>
                </div>
            `// this is use for create template 
            list.appendChild(rowDiv) // here we append means add inside that div which create above to display in ui
            rowDiv.querySelector(".deletebtn").addEventListener("click", () => { // this event delegation means when clicked then it will trigger and perform operation by getting class of html  because lot of tasks added we put it to all ??? => use this because it will not create own this it will take existing class this (object we crate)
                this.deleteExpense(item.id) // here we set value or put value because it will be travel from this to paremeter(id) ?? item.id means that's item which is paramter of loop (item) it will get data from arraya and set 
            })
        })
    }

// ********* helper method 

// gettotal method here we calculate the total amount of all added expense dynamically and disply in ui to user ((logic of calculate total and display it in ui using reduce))

    getTotal(data) { // same take value from set (displayData) value to come inside this parameter(data) to perform calcuation on data
        const totalAmount = document.getElementById("totalAmount") // same to display on this html ui from id selection
        const total = data.reduce((acc, cur) => acc + parseFloat(cur.amount), 0) // this is logic we use to return final answer of calculation of all added exepnse's amount ?? parsefloat to converrt it into float value  from text  and set into total variable and it set to main variable where we select the html id if this get then in there ui set it display in string means from number to string or text conversion
        if (totalAmount) totalAmount.textContent = total.toLocaleString()
    }

// ******** ui methods 

//  perparechart method here we prepare data to display chart in ui by category and total amount ((logic of chart using ctegory and total -- labels and data))

    prepareChart() { // charts waala meko nahi aata hai samjha dena (jitna aata hai me bata duga sahi kardena)
        let categories = [...new Set(this.array.map((item) => item.catValue))]; // here we set the only cetegories value to display at labels in charts using map(it will return only single value in different array) ((... new for set the new value to copy using (...)) explain this in detail i didnt understand it i forgot) 
        let amounts = categories.map((cat) => { // this is for calculate total using map for only amount seelection
            let item = this.array.filter((item) => item.catValue === cat); // main logic of calculation and put it into item from get check matched categories

            return item.reduce((sum, item) => sum + item.amount, 0); // total calculation and return final value
            1
        });

        return { labels: categories, data: amounts }; // for label and data of charts
    }

    UpdateChart() {
        let chartData = this.prepareChart();

        if (chartData.labels.length === 0) { // check labels means categories is  not exist means tasks and if chart exist then remove it re create new and set then display dynamically
            if (this.myChart) {
                this.myChart.destroy(); // remove exisiting data chart and create new and display dynamically
                this.myChart = null; // this is for set to default condition means no data no display chart 
            }
            return; // for get out from loop
        }

        if (!this.myChart) { // if not exist charts then create it from scratch to display in ui
            let ctx = document.querySelector("#expenseChart").getContext("2d"); // for 2d view we set 2d context select and set into ctx varaible to create chart

            this.myChart = new Chart(ctx, {
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
                    responsive: true, // for mobile first design and responsive
                    maintainAspectRatio: false, // for set size by manual 
                    aspeaspectRatio: 1.5,
                    plugins: {
                        legend: { position: "bottom" }, // for alligment 
                    },
                    layout: {
                        padding: 10,
                    },
                },
            });
        } else {
            this.myChart.data.labels = chartData.labels; // set value to label and data 
            this.myChart.data.datasets[0].data = chartData.data;
            this.myChart.update();
        }
    }

// ******* stoarge method

// storage save method here we saave data to storage to prevent blank ui while refresh  ((logic of saing data to storage using local storage set item))

    saveToStorage() {
        localStorage.setItem("Expense", JSON.stringify(this.array)) // here we set the data in Expenese which should be same value of get item for getting values ?? stringify because localstorage stores only strings not arrays objects
    }

// storage load method here we get data from storage to display data in  ui   ((logic of loading data from storage using local storage get item))

    loadFromStorage() {
        const saved = localStorage.getItem("Expense") // for display convert it into object and get it from storage and display in ui
        if (saved) this.array = JSON.parse(saved)
    }
}

const app = new Expenses() // this is main object which will be create and happens for display ui means using above class (blueprint)  we create multiple object  to display in ui(( ye samjha dena meko itna acchese nahi samjha))

document.getElementById("expenseForm").addEventListener("submit", (e) => { // thiss is main things which will be heppens to perform all opertaions
    e.preventDefault() // prevent from refersh and submit
    app.addExpense() // app is object instead of this we use this because it is outside of classs ((this means this is of this objcet (means (this.name) => app.name)))
    app.UpdateChart()
})

document.getElementById("filterCategory").addEventListener("change", () => {
    app.render() // this is for diaply filtered data tasks in ui
    // this.UpdateChart()
})

/// this is used when we say it to this is task is that's object tasks // matlab ke ye wo object ka tasks hai class ka matlab ja bhi humko usko globally matlab us object se karna ho to this use kargee jab bhi sirf usi method ke liye karna ho to direct karege this nahi use hoga...
