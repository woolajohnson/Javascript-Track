let chosenColor = "#b6d6a8";

function chooseColor(color) {
    const colorMap = {
        green: "#b6d6a8",
        blue: "#9fc4f7",
        purple: "#b4a6d5",
    };

    chosenColor = colorMap[color];

    // Remove border from all color boxes
    document.getElementById("green").style.border = "none";
    document.getElementById("blue").style.border = "none";
    document.getElementById("purple").style.border = "none";

    // Add border to the chosen color box
    document.getElementById(color).style.border = "2px solid #000";
}

function resetScreen() {
    // Clear all circles on the screen
    const circles = document.getElementsByClassName("shrink-circle");
    while (circles.length > 0) {
        document.body.removeChild(circles[0]);
    }

    // Remove border from all color boxes
    document.getElementById("green").style.border = "none";
    document.getElementById("blue").style.border = "none";
    document.getElementById("purple").style.border = "none";

    // Reset chosen color to green
    chosenColor = "#b6d6a8";

    // Add border to the green color box
    document.getElementById("green").style.border = "2px solid #000";
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("box")) {
        // Stop the event from propagating to the document click event
        event.stopPropagation();
        return;
    }
    const randomRadius = Math.floor(Math.random() * 191) + 10;
    createCircle(event.clientX, event.clientY, randomRadius, chosenColor);
});

function createCircle(x, y, radius, backgroundColor) {
    const circle = document.createElement("div");
    circle.className = "shrink-circle";
    circle.style.position = "absolute";
    circle.style.top = `${y - radius}px`;
    circle.style.left = `${x - radius}px`;
    circle.style.width = `${2 * radius}px`;
    circle.style.height = `${2 * radius}px`;
    circle.style.borderRadius = `${radius}px`;
    circle.style.backgroundColor = backgroundColor;

    document.body.appendChild(circle);

    // Set up the transition for the circle
    circle.style.transition = "width 5s, height 5s, opacity 5s";

    // Trigger the transition after a short delay
    setTimeout(() => {
        circle.style.width = "0";
        circle.style.height = "0";
        circle.style.opacity = "0";
    }, 10);

    // Remove the circle from the document after the animation duration
    const animationDuration = 1000;
    setTimeout(() => {
        document.body.removeChild(circle);
    }, animationDuration);
}
