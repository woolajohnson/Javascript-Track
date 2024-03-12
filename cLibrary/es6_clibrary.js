class Circles {
    constructor(count) {
        this.count = count;
    }

    draw_circles(containerId) {
        // Get the container element
        const container = document.getElementById(containerId);

        // Generate and append circles to the container
        for (let i = 0; i < this.count; i++) {
            const circle = document.createElement("div");
            circle.className = "circle";
            container.appendChild(circle);

            // Set up initial styles
            const size = this.getRandomSize();
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            circle.style.backgroundColor = this.getRandomColor();

            // Set random position within the container
            circle.style.position = "absolute";
            circle.style.top = `${this.getRandomPosition(
                container.clientHeight
            )}px`;
            circle.style.left = `${this.getRandomPosition(
                container.clientWidth
            )}px`;

            // Animate the circle
            this.animateCircle(circle);
        }
    }

    animateCircle(circle) {
        const maxSize = 100;
        const animationDuration = 5000;

        let start = null;

        const step = (timestamp) => {
            if (!start) start = timestamp;

            const progress = timestamp - start;
            const percentage = Math.min(progress / animationDuration, 1);

            // Update the circle size
            circle.style.width = `${percentage * maxSize}px`;
            circle.style.height = `${percentage * maxSize}px`;

            if (percentage < 1) {
                // Continue the animation
                requestAnimationFrame(step);
            } else {
                // Animation complete, remove the circle
                circle.parentNode.removeChild(circle);
            }
        };

        // Start the animation
        requestAnimationFrame(step);
    }

    getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    getRandomSize() {
        return Math.floor(Math.random() * 100) + 30;
    }

    getRandomPosition(max) {
        return Math.floor(Math.random() * max);
    }
}
