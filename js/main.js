/*jslint node:true*/
"use strict";

/*global alert*/


var companyTitle = "Disneyland Hotels";
document.getElementById("company").innerHTML = companyTitle;


var companySlogan = "Where the Magic Never Ends";
document.getElementById("slogan").innerHTML = companySlogan;




async function getHotelData() {
    try {
        const response = await fetch('./hotel.json')
        return await response.json() // Return the JSON object
    } catch (error) {
        console.error(error)

    }
} 



// store in a variable document.querySelectorAll("a")
// use that variable to loop over each element and add addEventListener to each one
// I suggest using forEach =>



let allInfo = document.querySelectorAll("a") 

allInfo.forEach(element => {

    
element.addEventListener('click', hotelInfo)
//document.querySelector("#disneylandgrandcaliforniahotelandspa").addEventListener('click', hotelInfo)
//document.querySelector("#disneylandparadisepierhotel").addEventListener('click', hotelInfo)

    
})


let hotelData = {}
getHotelData().then(data => hotelData = data)


function hotelInfo(event){
   let hotelChoice = hotelData.hotels.find(hotel => {
       return event.target.id === hotel.name.toLowerCase()
       
    }) 
    console.log(hotelChoice)

   
   document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`
   document.querySelector("#address").textContent = `${hotelChoice.address}`
   document.querySelector("#room").textContent = `${hotelChoice.rooms}`
   document.querySelector("#gym").textContent = `${hotelChoice.gym}`
   document.querySelector("#spaType").textContent = `${hotelChoice.spaType}`
   document.querySelector("#type").textContent = `${hotelChoice.roomType}`
   document.querySelector("#picture").innerText = `${hotelChoice.picture}`

   console.log(`${hotelChoice.picture}`)
   
}























