// Player object and movement logic

class Player {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speed = 4;
        this.dx = 0;
        this.dy = 0;
    }

    move(keys) {
        this.dx = 0;
        this.dy = 0;
        if (keys['ArrowLeft'] || keys['a'])        this.dx = -this.speed;
        if (keys['ArrowRight'] || keys['d'])       this.dx = this.speed;
        if (keys['ArrowUp'] || keys['w'])          this.dy = -this.speed;
        if (keys['ArrowDown'] || keys['s'])        this.dy = this.speed;
        this.x += this.dx;
        this.y += this.dy;
        // Clamp to canvas boundaries
        this.x = Math.max(0, Math.min(this.x, 800 - this.size));
        this.y = Math.max(0, Math.min(this.y, 400 - this.size));
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    getRect() {
        return { x: this.x, y: this.y, width: this.size, height: this.size };
    }
}
