// // Initial welcome alert
// alert("Welcome to JavaScript");

// document.getElementById('orderForm').addEventListener('input', () => {
//     clearTimeout(window.formSubmitTimeout); // Clear the previous timer
//     window.formSubmitTimeout = setTimeout(() => {
//         alert('Please click submit to complete your order.');
//     }, 10000); // Set a new timer
// });

// document.getElementById('submit-btn').addEventListener('click', (e) => {
//     e.preventDefault(); // Prevent form submission for demonstration
//     clearTimeout(window.formSubmitTimeout); // Clear the timer as submit is clicked

//     // Assuming you have classes 'item-checkbox' and 'quantity-input' correctly set in your HTML,
//     // if not, you should add them or adjust the querySelector to match your HTML structure.
//     const checkboxes = document.querySelectorAll('.item-checkbox');
//     let allValid = true;
//     checkboxes.forEach((checkbox, index) => {
//         // Adjust the selector if your quantity inputs are not directly related to checkboxes
//         const quantityInput = document.querySelectorAll('.quantity-input')[index];
//         if (checkbox.checked && !quantityInput.value) {
//             alert(`Quantity for ${checkbox.nextSibling.textContent.trim()} is required.`);
//             allValid = false;
//         }
//     });

//     // Validate name, address, and card
//     ['name', 'address', 'card'].forEach(field => {
//         if (!document.getElementById(field).value) {
//             alert(`${field.charAt(0).toUpperCase() + field.slice(1)} is required.`);
//             allValid = false;
//         }
//     });

//     if (allValid) {
//         // Form is valid, proceed with submission logic
//         console.log('Form submitted'); // Here, replace with actual submission logic or remove e.preventDefault() above to allow form submission
//     }
// });
//------------------------------------------------------------------------------


// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('orderForm');
//     const submitButton = document.getElementById('submit-btn');
//     const checkboxes = document.querySelectorAll('.item-checkbox');
//     //const checkboxes = document.querySelectorAll('.checkbox');
//     const quantities = document.querySelectorAll('.quantity-input');
//     // const quantities = document.querySelectorAll('.quantity');
//     const name = document.getElementById('name');
//     const address = document.getElementById('address');
//     const card = document.getElementById('card');

//     submitButton.addEventListener('click', function(event) {
//         let itemSelected = false;
//         let quantityFilled = true;

//         // Check if at least one checkbox is checked and its corresponding quantity is filled
//         checkboxes.forEach((checkbox, index) => {
//             if (checkbox.checked) {
//                 itemSelected = true;
//                 const quantity = quantities[index].value;
//                 if (!quantity || quantity === '0') {
//                     quantityFilled = false;
//                 }
//             }
//         });

//         // Check if Name, Address, and Card fields are filled
//         const personalInfoFilled = name.value.trim() && address.value.trim() && card.value.trim();

//         if (!itemSelected || !quantityFilled || !personalInfoFilled) {
//             event.preventDefault(); // Prevent form submission
            alert('Please select at least one item and fill in the quantity, name, address, and card information before submitting.');
//         }
//         // If all conditions are met, the form will be submitted.
//     });
// });

// -------------------------------------------
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('orderForm'); // Ensure your form has this ID
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form submission to validate first
//         let validSubmission = true;
//         const itemContainers = document.querySelectorAll('.otherContainer'); // Assuming each item + quantity pair is wrapped in a container with this class

//         // Iterate over each item container to check if checkboxes are selected and quantities are filled
//         itemContainers.forEach(container => {
            
//             const checkbox = container.querySelector('input[type="checkbox"]');
//             const quantityInput = container.querySelector('input[type="number"]');

//             if (checkbox.checked && (!quantityInput.value || quantityInput.value === '0')) {
//                 alert('Each selected item must have a quantity specified.');
//                 validSubmission = false;
//             }
//         });

//         // Check if Name, Address, and Card fields are filled
//         const name = document.getElementById('name');
//         const address = document.getElementById('address');
//         const card = document.getElementById('card');
//         if (!name.value.trim() || !address.value.trim() || !card.value.trim()) {
//             alert('Name, address, and card information must be filled out.');
//             validSubmission = false;
//         }

//         // If all validations pass, manually submit the form
//         if (validSubmission) {
//             form.submit();
//         }
//     });
// });
// -------------------the last one----------------
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('orderForm'); // Ensure your form has this ID
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form submission to validate first
//         let validSubmission = true;

//         // Select both .bigGrayContainer and .otherContainer classes
//         const itemContainers = document.querySelectorAll('.bigGrayContainer, .otherContainer');

//         // Iterate over each item container to check if checkboxes are selected and quantities are filled
//         itemContainers.forEach(container => {
//             const checkbox = container.querySelector('input[type="checkbox"]');
            
//             const quantityInput = container.querySelector('input[type="number"]');

//             if (checkbox.checked && (!quantityInput.value || quantityInput.value === '0')) {
//                 alert('Each selected item must have a quantity specified.');
//                 validSubmission = false;
//             }
//         });

//         // Check if Name, Address, and Card fields are filled
//         const name = document.getElementById('name');
//         const address = document.getElementById('address');
//         const card = document.getElementById('card');
//         if (!name.value.trim() || !address.value.trim() || !card.value.trim()) {
//             alert('Name, address, and card information must be filled out.');
//             validSubmission = false;
//         }

//         // If all validations pass, manually submit the form
//         if (validSubmission) {
//             form.submit();
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm'); // Ensure your form has this ID
    form.addEventListener('submit', function(event) {
        // Prevent form submission to validate first
        event.preventDefault();
        let validSubmission = true;

        // Select all containers with class .otherContainer (since .bigGrayContainer is not mentioned in your HTML provided)
        const itemContainers = document.querySelectorAll('.otherContainer');

        // Iterate over each item container to check if checkboxes are selected and quantities are filled
        itemContainers.forEach(container => {
            const checkbox = container.querySelector('input[type="checkbox"]');
            const quantity = container.querySelector('input[type="number"]');

            if (checkbox.checked && (!quantity.value || parseInt(quantity.value, 10) === 0)) {
                alert('Each selected item must have a corresponding non-zero quantity specified.');
                validSubmission = false;
            }
        });

        // Check if Name, Address, and Card fields are filled
        const name = document.getElementById('name');
        const address = document.getElementById('address');
        const card = document.getElementById('card');
        if (!name.value.trim() || !address.value.trim() || !card.value.trim()) {
            alert('Name, address, and card information must be filled out.');
            validSubmission = false;
        }

        // If all validations pass, manually submit the form
        if (validSubmission) {
            form.submit();
        }
    });
});

// --------------------------
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from being submitted before validation
        let validSubmission = true;

        // Select all containers that could contain item and quantity pairs
        const itemContainers = document.querySelectorAll('.otherContainer');

        // Iterate over each item container to check if checkboxes are selected and quantities are filled
        itemContainers.forEach(container => {
            const checkbox = container.querySelector('input[type="checkbox"]');
            const quantityInput = container.querySelector('input[type="number"]');

            if (checkbox && checkbox.checked) {
                if (!quantityInput.value || parseInt(quantityInput.value, 10) === 0) {
                    // Assuming the label immediately follows the checkbox in the markup
                    const itemName = checkbox.nextElementSibling.textContent.trim();
                    alert(`Quantity for ${itemName} is required.`);
                    validSubmission = false;
                }
            }
        });

        if (!validSubmission) {
            return; // Stop the function if validation failed
        }

        // Additional validations here (e.g., for name, address, card)
        // ...

        if (validSubmission) {
            form.submit(); // Submit the form if all validations pass
        }
    });
});
