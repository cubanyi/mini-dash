// Utility functions for the game

// Generate a random integer between min and max (inclusive)
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Axis-Aligned Bounding Box (AABB) collision detection
function rectsOverlap(a, b) {
    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );
}
