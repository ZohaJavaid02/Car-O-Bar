// Dummy data for car listings
const carData = [
    { make: 'Toyota', model: 'Camry', year: 2022, price: 25000 },
    { make: 'Honda', model: 'Accord', year: 2021, price: 23000 },
    { make: 'Ford', model: 'Fusion', year: 2023, price: 27000 }
    // Add more car data as needed
];

function searchCars() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredCars = carData.filter(car => {
        return car.make.toLowerCase().includes(searchInput) ||
               car.model.toLowerCase().includes(searchInput) ||
               car.year.toString().includes(searchInput) ||
               car.price.toString().includes(searchInput);
    });

    displayCarListings(filteredCars);
}

function displayCarListings(cars) {
    const carListingsSection = document.getElementById('carListings');
    carListingsSection.innerHTML = '';

    if (cars.length === 0) {
        carListingsSection.innerHTML = '<p>No matching cars found.</p>';
    } else {
        cars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'carCard';
            carCard.innerHTML = `
                <h2>${car.make} ${car.model}</h2>
                <p>Year: ${car.year}</p>
                <p>Price: $${car.price}</p>
            `;
            carListingsSection.appendChild(carCard);
        });
    }
}
function login() {
    const loginPage = document.getElementById('loginPage');
    const mainPage = document.getElementById('mainPage');
    
    // Validate login (add proper validation logic in a real application)
    const username = document.getElementById('username').value;
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;

    if (username && id && password) {
        loginPage.style.display = 'none';
        mainPage.style.display = 'block';
    } else {
        alert('Invalid login details. Please try again.');
    }
}

function logout() {
    location.reload();
}

function closeAccount() {
    location.reload();
}