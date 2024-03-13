let chosenColor = "green";
let chosenShape = "circle";

function chooseColor(color) {
    chosenColor = color;
    updateShapeColor(chosenColor);
    updateChoices(chosenShape);
}

function chooseShape(shape) {
    chosenShape = shape;
    updateChoices(chosenShape);
}

function updateShapeColor(chosenColor) {
    const shapeColor = ["green", "blue", "purple"];
    for (let i = 0; i < shapeColor.length; i++) {
        if (chosenColor === shapeColor[i]) {
            document.getElementById(chosenColor).style.border =
                "2px solid #000";
        } else {
            document.getElementById(shapeColor[i]).style.border = "none";
        }
    }
}

function updateChoices(chosenShape) {
    const shapes = ["circle", "square", "star"];
    for (let i = 0; i < shapes.length; i++) {
        if (chosenShape === shapes[i]) {
            document.getElementById(shapes[i]).style.backgroundColor =
                chosenColor;
        } else {
            document.getElementById(shapes[i]).style.backgroundColor = "#fff";
        }
    }
}
document.querySelector(".box").addEventListener("click", function () {
    chooseColor(chosenColor);
    chooseShape(chosenShape);
});

function resetScreen() {
    // Remove border from all color boxes
    document.getElementById("green").style.border = "2px solid #000";
    document.getElementById("blue").style.border = "none";
    document.getElementById("purple").style.border = "none";

    // Reset chosen color and shape to defaults
    chosenColor = "green";
    chosenShape = "circle";
    chooseShape(chosenShape);
}

document.addEventListener("click", function (event) {
    if (
        event.target.classList.contains("box") ||
        event.target.classList.contains("shape")
    ) {
        // Stop the event from propagating to the document click event
        event.stopPropagation();
        return;
    }
    drawSelectedShape(event.clientX, event.clientY);
});

function drawSelectedShape(x, y) {
    const shape = document.createElement("div");
    shape.className = "shape";
    shape.style.position = "absolute";
    shape.style.top = `${y}px`;
    shape.style.left = `${x}px`;
    shape.style.backgroundColor = chosenColor;

    if (chosenShape === "circle") {
        shape.style.width = shape.style.height = `${getRandomSize()}px`;
        shape.style.borderRadius = "50%";
    } else if (chosenShape === "square") {
        shape.style.width = shape.style.height = `${getRandomSize()}px`;
    } else if (chosenShape === "star") {
        shape.style.clipPath = `polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
        )`;
        shape.style.width = shape.style.height = `${getRandomSize()}px`;
    }

    document.body.appendChild(shape);

    // Set up the transition for the shape
    shape.style.transition = "width 5s, height 5s, opacity 5s";

    // Trigger the transition after a short delay
    setTimeout(() => {
        shape.style.width = "0";
        shape.style.height = "0";
        shape.style.opacity = "0";
    }, 10);

    // Remove the shape from the document after the animation duration
    const animationDuration = 5000;
    setTimeout(() => {
        document.body.removeChild(shape);
    }, animationDuration);
}

function getRandomSize() {
    return Math.floor(Math.random() * 100) + 10;
}
