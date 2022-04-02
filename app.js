// Open and Close Form
const modal = document.getElementById('modalDisplay'); 
function openForm() {
    let addCar = document.getElementById('addCar');
    modal.style.display = 'block';
    console.log('open')
}

function closeForm() {
    let addCar = document.getElementsByClassName('closeModal')[0];
    modal.style.display = 'none';
    document.forms['addCar'].reset()
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

// Adds Car Data to Storage/Array above
function addToStorage(newCar) {
    carStorage.push(newCar)
    displayCars();
}

function displayCars() {
    let carTable = document.querySelector("tbody")
    carTable.innerHTML = "";

    carStorage.forEach(Car => {
        let newRow = document.createElement('tr')
        
        for (prop in Car) {
            if (!Car.hasOwnProperty(prop) || prop === 'id') continue
            cell = document.createElement('td')
            cell.textContent = Car[prop]
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
    let make = document.forms[0][0].value
    let model = document.forms[0][1].value
    let year = document.forms[0][2].value
    let license = document.forms[0][3].value
    let vin = document.forms[0][4].value
    let date = document.forms[0][5].value
    let newCar = new Car(make, model, year, license, vin, date)
    
    addToStorage(newCar);
    closeForm();
    console.log('submitted')
}

// let myCar = new Car("Honda", 'Civic', '2022', '6MON306');
// carStorage.push(myCar); 
// displayCars(); 

console.log(carStorage)
