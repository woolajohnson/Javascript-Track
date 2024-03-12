function Circles(count) {
    this.count = count;

    this.draw_circles = function (containerId) {
        // Get the container element
        var container = document.getElementById(containerId);

        // Generate and append circles to the container
        for (var i = 0; i < this.count; i++) {
            var circle = document.createElement("div");
            circle.className = "circle";
            container.appendChild(circle);

            // Set up initial styles
            var size = getRandomSize();
            circle.style.width = size + "px";
            circle.style.height = size + "px";
            circle.style.backgroundColor = getRandomColor();

            // Set random position within the container
            circle.style.position = "absolute";
            circle.style.top = getRandomPosition(container.clientHeight) + "px";
            circle.style.left = getRandomPosition(container.clientWidth) + "px";

            // Animate the circle
            animateCircle(circle);
        }
    };

    // Function to animate the circle
    function animateCircle(circle) {
        var maxSize = 100;
        var animationDuration = 5000;

        var start = null;
        function step(timestamp) {
            if (!start) start = timestamp;

            var progress = timestamp - start;
            var percentage = Math.min(progress / animationDuration, 1);

            // Update the circle size
            circle.style.width = percentage * maxSize + "px";
            circle.style.height = percentage * maxSize + "px";

            if (percentage < 1) {
                // Continue the animation
                requestAnimationFrame(step);
            } else {
                // Animation complete, remove the circle
                circle.parentNode.removeChild(circle);
            }
        }

        // Start the animation
        requestAnimationFrame(step);
    }

    // Function to generate a random color
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to generate a random size
    function getRandomSize() {
        return Math.floor(Math.random() * 100) + 30;
    }

    // Function to generate a random position
    function getRandomPosition(max) {
        return Math.floor(Math.random() * max);
    }
}
