const superHero = document.getElementById("inputName")
const alias = document.getElementById("inputAlias")
const city = document.getElementById("inputCity")
const universe = document.getElementById("inputUniverse")
const favorite = document.getElementById("checkFav") 
const tableBody = document.getElementById("heroTable")
let favBadge = ""



function addToTable(event) {
    event.preventDefault()
    
    if (favorite.checked == true) {
        favBadge = '<span class="badge rounded-pill text-bg-success">Favorite</span>'
    }
    

    const newRow = document.createElement("tr")
    newRow.innerHTML =`
    <td>${superHero.value}</td>
    <td>${alias.value}</td>
    <td>${city.value}</td>
    <td>${universe.value}</td>
    <td>${favBadge}</td>
    <td><button class="btn btn-danger">Delete</button></td>
    `
    
    newRow.querySelector("button").addEventListener("click", function(){
        newRow.remove()
    })
   
    
   

    tableBody.appendChild(newRow)
   

    superHero.value = ""
    alias.value = ""
    city.value = ""
    universe.value = ""
    favorite.checked = ""
    favBadge = ""
    
}
