function $query(selector) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(selector);

    // Return an object with methods
    return {
        // Method: click
        click: function (callback) {
            // Attach a click event listener to each selected element
            for (let i = 0; i < elements.length; i++) {
                elements[i].addEventListener("click", callback);
            }
            // Enable method chaining by returning the object
            return this;
        },
        // Method: hide
        hide: function () {
            // Set the display style of each selected element to 'none'
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
            // Enable method chaining by returning the object
            return this;
        },
        // Method: show
        show: function () {
            // Set the display style of each selected element to 'block'
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
            // Enable method chaining by returning the object
            return this;
        },
    };
}
