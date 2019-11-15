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



let hotelData = {}
getHotelData().then(data => hotelData = data)



    //let newLI = document.createElement('li')
    //let newLink = document.createElement('a')
    //newLink.setAttribute('href', menuItem.getAttribute('href'))
    //newLink.textContent = menuItem.textContent
    //newLI.appendChild(newLink)
    //newList.append(newLI)
    //document.querySelector('#smallNavArea').append(newList)





// store in a variable document.querySelectorAll("a")
// use that variable to loop over each element and add addEventListener to each one
// I suggest using forEach =>
//document.querySelector("#resort").addEventListener('click', hotelInfo)


let allInfo = document.querySelectorAll("a") //.addEventListener('click', hotelInfo)

allInfo.forEach(menuItem => {
    document.querySelector("address").addEventListener('click', () => hotelInfo )
    document.querySelector("room").addEventListener('click', () => hotelInfo )
    document.querySelector("gym").addEventListener('click', () => hotelInfo )
    document.querySelector("spaType").addEventListener('click', () => hotelInfo )
    document.querySelector("type").addEventListener('click', () => hotelInfo )
    console.log(menuItem)
})



function hotelInfo(event){
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })

    console.log(hotelChoice)

    document.querySelector("#resort").textContent = `$(hotelChoice.name) Hotel`
    document.querySelector("#grand").textContent = `$(hotelChoice.name) Hotel`
    document.querySelector("#paradise").textContent = `$(hotelChoice.name) Hotel`


}























