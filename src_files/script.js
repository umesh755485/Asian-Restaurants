// Show Food Items when Order Online is clicked
function showFoodItems() {
    document.getElementById('foodItems').style.display = 'block';
    document.getElementById('diningList').style.display = 'none';  // Hide Dining list
}

// Show Dining List when Dining is clicked
function showDiningList() {
    document.getElementById('diningList').style.display = 'block';
    document.getElementById('foodItems').style.display = 'none';  // Hide Food items
}

// Handle Order Now for food items
function orderNow(item) {
    alert('You have ordered ' + item + ' for home delivery.');
}

// Handle Book Now for restaurants
function bookNow(restaurant) {
    alert('You have booked a table at ' + restaurant);
}
