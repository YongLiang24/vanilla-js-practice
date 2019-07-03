
const navSupport = document.getElementById("supportNav")
const mainContent = document.getElementById("mainContent")
const addCard = document.getElementById("addCard")

const homePage = document.getElementById("homePage")
const homeDescription = document.createElement("P")

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
