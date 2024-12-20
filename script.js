// Initialize blood types and their quantities
const bloodTypes = {
    "A+": 10,
    "A-": 5,
    "B+": 8,
    "B-": 3,
    "O+": 12,
    "O-": 6,
    "AB+": 4,
    "AB-": 2
};

// Function to show the selected page
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none'; // Hide all pages
    });
    document.getElementById(pageId).style.display = 'block'; // Show the selected page
}

// Donor registration form submission
document.getElementById('donorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const bloodType = event.target[2].value;

    // Update blood type quantity
    if (bloodTypes[bloodType] !== undefined) {
        bloodTypes[bloodType]++;
    }

    alert(`Thank you for registering, ${name}! Your blood type ${bloodType} has been noted.`);
    event.target.reset();
    updateBloodTypes();
});

// Function to update the blood types display
function updateBloodTypes() {
    const bloodTypesList = document.getElementById('bloodTypes');
    bloodTypesList.innerHTML = '';
    for (const [type, quantity] of Object.entries(bloodTypes)) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${type} <span class="quantity">${quantity}</span>`;
        bloodTypesList.appendChild(listItem);
    }
}

// Initial call to display the home page
showPage('home');