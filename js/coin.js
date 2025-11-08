// Coin spawning and collecting logic

class Coin {
    constructor(size, color) {
        this.size = size;
        this.color = color;
        this.spawn();
    }

    spawn() {
        this.x = randInt(0, 800 - this.size);
        this.y = randInt(0, 400 - this.size);
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x + this.size/2, this.y + this.size/2, this.size/2, 0, Math.PI*2);
        ctx.fill();
    }

    getRect() {
        return { x: this.x, y: this.y, width: this.size, height: this.size };
    }
}
