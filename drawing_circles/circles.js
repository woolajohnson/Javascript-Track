document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("color");
    document.addEventListener("click", function (event) {
        const randomRadius = Math.floor(Math.random() * (200 - 10 + 1)) + 10;
        createCircle(event.clientX, event.clientY, randomRadius, "#CCE8CC");
    });
});

function createCircle(x, y, radius, backgroundColor) {
    const circle = document.createElement("div");
    circle.className = "shrink-circle";
    circle.style.position = "absolute";
    circle.style.top = y - radius + "px";
    circle.style.left = x - radius + "px";
    circle.style.width = 2 * radius + "px";
    circle.style.height = 2 * radius + "px";
    circle.style.borderRadius = radius + "px";
    circle.style.backgroundColor = backgroundColor;

    document.body.appendChild(circle);

    // Set up the transition for the circle
    circle.style.transition = "width 1s, height 1s, opacity 1s";

    // Trigger the transition after a short delay
    setTimeout(() => {
        circle.style.width = "0";
        circle.style.height = "0";
    }, 10);

    // Remove the circle from the document after the animation duration
    const animationDuration = 1000; // 1 second (adjust as needed)
    setTimeout(() => {
        document.body.removeChild(circle);
    }, animationDuration);
}
