const navSupport = document.getElementById("supportNav")
const mainContent = document.getElementById("mainContent")
const addCard = document.getElementById("addCard")
const payCard = document.getElementById("payCard")

const homePage = document.getElementById("homePage")
const homeDescription = document.createElement("P")

homeDescription.setAttribute("id", "homeText")

homePage.addEventListener("click", function(){
  mainContent.innerHTML =""
  homeDescription.innerText = "Exchange On-Demand allows you to pay foreign currencies on demand with a simple tap"

  mainContent.appendChild(homeDescription)
})

 const telSupport = document.createElement("P")
navSupport.addEventListener("click", function(){
  mainContent.innerHTML =""
  telSupport.innerHTML = "Call us at: 555-555-5545"
  mainContent.appendChild(telSupport)
})

   const cardInput = document.createElement("INPUT")
   cardInput.type="number"
   cardInput.placeholder ="Card Number"

    const cardButton = document.createElement("Button")
    cardButton.type="submit"
    cardButton.innerText ="Add Card"

  const cardForm = document.createElement("FORM")
  cardForm.method = "POST"
  cardForm.addEventListener("click", function(){
    event.preventDefault()

  })
addCard.addEventListener("click", function(){
  mainContent.innerHTML =""
  cardForm.appendChild(cardInput)
  cardForm.appendChild(cardButton)
  mainContent.appendChild(cardForm)
})

const cardSelect = document.createElement("SELECT")

const payButton = document.createElement
("BUTTON")

payButton.innerText = "Scan & Pay"


const selectCurrency = document.createElement("SELECT")

const currency1 = document.createElement("OPTION")
currency1.innerText ="US Dollars"

const currency2 = document.createElement("OPTION")
currency2.innerText ="Japanese Yen"

const currency3 = document.createElement("OPTION")
currency3.innerText ="Mexican Pesos"

payCard.addEventListener("click", function(){
  mainContent.innerHTML = ""

  selectCurrency.appendChild(currency1)
  selectCurrency.appendChild(currency2)
  selectCurrency.appendChild(currency3)
  mainContent.appendChild(selectCurrency)
  mainContent.appendChild(payButton)
})
