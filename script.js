// variable for superhero name input
const superHero = document.getElementById("inputName")
//variable for alias input
const alias = document.getElementById("inputAlias")
//variable for city input
const city = document.getElementById("inputCity")
//variable for universe input
const universe = document.getElementById("inputUniverse")
//variable for check box input
const favorite = document.getElementById("checkFav") 
//variable for table 
const tableBody = document.getElementById("heroTable")
//variable to hold value of if favorite check box is on or off
let favBadge = ""


//function to add new data to the table
function addToTable(event) {
    event.preventDefault() //prevents page reloading when submit button is pressed
    //if statement to check if the favorite check box is selected or not - if it is, favBadge gets a favorite badge
    if (favorite.checked == true) {
        favBadge = '<span class="badge rounded-pill text-bg-success">Favorite</span>'
    }
    

    const newRow = document.createElement("tr") //create new row variable 
   //setting what the values of the new role will be
    newRow.innerHTML =`
    <td>${superHero.value}</td>
    <td>${alias.value}</td>
    <td>${city.value}</td>
    <td>${universe.value}</td>
    <td>${favBadge}</td>
    <td><button class="btn btn-danger">Delete</button></td>
    `
    //function to add ability to delete rows. Listens for click on any button in the row.
    newRow.querySelector("button").addEventListener("click", function(){
        newRow.remove()
    })
   // appends newRow to the table body
    tableBody.appendChild(newRow)
   
    // resets all the value of all variables and boxes back to empty.
    superHero.value = ""
    alias.value = ""
    city.value = ""
    universe.value = ""
    favorite.checked = ""
    favBadge = ""
    
}
