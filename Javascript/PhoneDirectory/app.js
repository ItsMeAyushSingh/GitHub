document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const mobileInput = document.getElementById("mobile");
    const emailInput = document.getElementById("email");
    const submitButton = document.getElementById("submit");
    const errorDiv = document.getElementById("error");
    const tableBody = document.querySelector("#summaryTable tbody");
    const nameColumn = document.getElementById("nameColumn");

    let contacts = [
        { name: "Admin", mobile: "9999999999", email: "admin@xyzcompany.com" } // Make "Admin" part of contacts
    ];
    let sortOrder = true; // Default sorting order

    // Make Name column look clickable
    nameColumn.style.cursor = "pointer";

    // Function to validate name
    function validateName(name) {
        return /^[A-Za-z\s]{1,20}$/.test(name.trim());
    }

    // Function to validate mobile
    function validateMobile(mobile) {
        return /^[0-9]{10}$/.test(mobile.trim());
    }

    // Function to validate email
    function validateEmail(email) {
        return (
            email.length < 40 &&
            /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(email.trim())
        );
    }

    // Function to display the error message
    function showError() {
        errorDiv.style.display = "block";
    }

    // Function to hide the error message
    function hideError() {
        errorDiv.style.display = "none";
    }

    // Function to render the table with contacts
    function renderTable() {
        tableBody.innerHTML = ""; // Clear previous rows

        contacts.forEach((contact) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${contact.name}</td>
                <td>${contact.mobile}</td>
                <td>${contact.email}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Function to handle adding a contact
    function addContact() {
        const name = nameInput.value.trim();
        const mobile = mobileInput.value.trim();
        const email = emailInput.value.trim();

        // Validation checks
        if (!validateName(name) || !validateMobile(mobile) || !validateEmail(email)) {
            showError();
            return;
        }

        // Hide error if input is valid
        hideError();

        // Add the new contact to the list
        contacts.push({ name, mobile, email });

        // Reset input fields
        nameInput.value = "";
        mobileInput.value = "";
        emailInput.value = "";

        // Re-render the table
        renderTable();
    }

    // Function to sort contacts by name (including "Admin")
    function sortContacts() {
        contacts.sort((a, b) => {
            if (sortOrder) {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

        // Toggle sorting order
        sortOrder = !sortOrder;

        // Re-render the table after sorting
        renderTable();
    }

    // Attach event listeners
    submitButton.addEventListener("click", addContact);
    nameColumn.addEventListener("click", function () {
        sortContacts();
    });

    // Hide error message on page load
    hideError();

    // Initial table render
    renderTable();
});
