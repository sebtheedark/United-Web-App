// Open and Close Form
const modal = document.getElementById('modalDisplay'); 
// const addCarBtn = document.getElementById('addCar'); 
// const closeForm = document.getElementsByClassName('closeModal')[0]; 

// addCarBtn.onclick = function () {
//     modal.style.display = 'block'; 
// }

// closeForm.onclick = function () {
//     modal.style.display = 'none';
// }

function openForm() {
    let addCar = document.getElementById('addCar');
    modal.style.display = 'block';
    console.log('open')
}

function closeForm() {
    let addCar = document.getElementsByClassName('closeModal')[0];
    modal.style.display = 'none';
    console.log('close')

}

// Storing From Data Locally
let carStorage = []; 

function Car(make, model, year, license, vin, date) {
    this.make = make; 
    this.model = model; 
    this.year = year; 
    this.license = license; 
    this.vin = vin; 
    this.date = date; 
    this.id = carStorage.length
}

// Adds Car Data to Storage
function addToStorage(newCar) {
    carStorage.push(newCar)
    displayCars();
}

function displayCars() {
    let carTable = document.querySelector("tbody")
    carTable.innerHTML = "";

    carStorage.forEach(car => {
        let newRow = document.createElement('tr')
        
        for (prop in car) {
            if (!car.hasOwnProperty(prop) || prop === 'id') continue
            cell = document.createElement('td')
            newRow.append(cell)
        }

        
        cell = document.createElement('td');
        
        // // Creates cell while adding a delete button
        // delButton = document.createElement('button');
        // delButton.textContent = "Delete";
        // delButton.addEventListener('click', deleteCar);
        // delButton.setAttribute('car-id', Car['id']);
        // delButton.classList.add('del-button');
        // cell.appendChild(delButton)
        
        newRow.append(cell);

        carTable.appendChild(newRow);
    })
}
// Function to Delete Cars
// function deleteCar() {
//     let id = parseInt(this.getAttribute('car-id'))
//     let index = carStorage.find(car => car.id === id)
//     carStorage.splice(index, 1)
//     displayCars(); 
    
// }

function submitForm(e) {
    console.log(e);
    console.log("submit");
    let make = document.forms[0][1].value
    let model = document.forms[0][2].value
    let year = document.forms[0][3].value
    let license = document.forms[0][4].value
    let vin = document.forms[0][5].value
    let date = document.forms[0][6].value
    let newCar = new Car(make, model, year, license, vin, date)
    
    addToStorage(newCar);
    console.log('submitted')
}

let myCar = new Car("Honda", 'Civic', '2022', '6MON306');
carStorage.push(myCar); 
displayCars(); 

