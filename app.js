// Open and Close Form

const modal = document.getElementById('modalDisplay'); 
const addCarBtn = document.getElementById('addCar'); 
const closeForm = document.getElementsByClassName('closeModal')[0]; 

addCarBtn.onclick = function () {
    modal.style.display = 'block'; 
}

closeForm.onclick = function () {
    modal.style.display = 'none';
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

function addToStorage() {
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
        
        // Creates cell while adding a delete button
        delButton = document.createElement('button');
        delButton.textContent = "Delete";
        delButton.addEventListener('click', deleteCar);
        delButton.setAttribute('car-id', Car['id']);
        delButton.classList.add('del-button');
        cell.appendChild(delButton)
        
        newRow.append(cell);

        carTable.appendChild(newRow);
    })
}

function deleteCar() {
    let id = parseInt(this.getAttribute('car-id'))
    let index = carStorage.find(car => car.id === id)
    carStorage.splice(index, 1)
    displayCars(); 
    
}

let myCar = new Car("Honda", 'Civic', '2022', '6MON306', '1/22/22');
carStorage.push(myCar); 
displayCars(); 

