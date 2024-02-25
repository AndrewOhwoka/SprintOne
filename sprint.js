// The JavaScript, triggered by the DOMContentLoaded event, dynamically generates menu items using the provided data array. This dynamic generation enhances interactivity, streamlining menu management without requiring direct HTML modifications.
// Wait for the DOM content to be fully loaded before executing JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    // Define an array of menu items with their names and descriptions
    const menuItemsData = [
        { name: "Chicken Parm Bites", description: "Deep-fried pizza dough tossed in garlic and Parmesan Romano. The perfect vessel for Mario's signature tomato sauce." },
        { name: "Mozzarella Sticks", description: "A stack of deep-fried and delicious batons of cheesy goodness served with your choice of Mario's Signature Tomato or spicy Arrabbiata sauce." },
        { name: "Shrimp Scampi", description: "Seven sautéed jumbo shrimp in a lemon, garlic, butter and wine sauce. Garnished with bruschetta and accompanied by a stack of garlic crostini for dipping." },
        { name: "Budda Boomers", description: "Deep-fried pizza dough tossed in garlic and Parmesan Romano. The perfect vessel for Mario's signature tomato sauce." },
        { name: "Calamari Fritti", description: "Strips of lightly seasoned fried calamari served with Mario's Signature Tomato and Aioli sauce." },
        { name: "Meatballs with a Twist", description: "Four delizioso meatballs baked in Mario's Signature Tomato Sauce, topped with melty provolone and served with a garlic twist." },
        { name: "Cheesy Spinach Dip", description: "Oven-baked spinach dip now with even more cheese, topped with house-made tomato basil bruschetta and served with a garlic twist for dipping." },
        { name: "Garlic Fingers with Cheese", description: "Pizza dough brushed with garlic and baked with cheesy pizza mozzarella. Served with Donair sauce." },
        { name: "Calamari al Diavolo", description: "Crisp strips of calamari, drizzled with tomato broth and topped with onion, garlic, red and green peppers and a hot cherry bomb. BOOM!" }
    ];

    // Define a function to create menu items dynamically
    function createMenuItems() {
        // Get the container where menu items will be added
        const container = document.getElementById("menuItems");

        // Iterate over each menu item data in the array
        menuItemsData.forEach(item => {
            // Create a div element for the menu item
            const menuItem = document.createElement("div");
            menuItem.classList.add("rectangles");

            // Create an h2 element for the item name
            const itemName = document.createElement("h2");
            itemName.classList.add("bold-text");
            itemName.textContent = item.name;

            // Create a p element for the item description
            const itemDescription = document.createElement("p");
            itemDescription.textContent = item.description;

            // Append the item name and description to the menu item div
            menuItem.appendChild(itemName);
            menuItem.appendChild(itemDescription);
            
            // Append the menu item to the container
            container.appendChild(menuItem);
        });
    }

    // Call the function to create menu items
    createMenuItems();
});
