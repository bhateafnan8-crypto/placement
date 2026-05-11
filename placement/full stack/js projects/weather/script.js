let div = document.getElementById("div")
let inp = document.getElementById("inp")
let btn = document.getElementById("btn")
let lists = document.getElementById("lists")
let weatherDesc = document.getElementById("weatherDesc")
let humidity = document.getElementById("humidity")
let temp_C = document.getElementById("temp_C")
let contentSection = document.getElementById("content-section")
let error = document.getElementById("error")
let container = document.querySelector("#container")

async function getWeather(e) {
    try{
        e.preventDefault()
    if (!inp.value) {
        error.style.display = "block"
        container.style.display = "none"
        error.innerText = `Please enter your city name `
    }
    else {
        console.clear()
       weatherDesc.innerText = "";
        humidity.innerText = "";
        temp_C.innerText = "";
        let city = inp.value;
        let response = await fetch(`https://wttr.in/${city}?format=j1`)
        let data = await response.json()

        // let li = document.createElement("li")


        

        weatherDesc.innerText = data.current_condition[0].weatherDesc[0].value;
        humidity.innerText = data.current_condition[0].humidity;
        temp_C.innerText = data.current_condition[0].temp_C;
        error.style.display = "none"

        container.style.display = "grid";
        container.style.gap = "2rem";
        container.style.gridTemplateColumns = "repeat(auto-fill, minmax(50%, 1fr))";

        console.log(data)
        console.log(data.current_condition[0])

        inp.value = "";

        // lists.appendChild(li)
         

    }
    }
    catch(err){
        error.innerText= `City Not Found`
        error.style.display = "block"
        container.style.display = "none"
    }

}
// getWeather()

btn.addEventListener("click", getWeather)