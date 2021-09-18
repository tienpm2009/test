class Gun {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.radius = 30;
        this.gunHeight = this.radius / 2;
        this.gunWidth = this.radius * 2
    }

    drawGun() {
        ctx.beginPath();
        ctx.fillStyle = "#37fd00";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * (Math.PI / 180));
        ctx.beginPath();
        ctx.fillStyle = "#fd0000";
        ctx.fillRect(0, -this.gunHeight / 2, this.gunWidth, this.gunHeight)
        ctx.closePath();
        ctx.fill();
        ctx.restore();


        ctx.beginPath();
        ctx.fillStyle = "#ecfd01";
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2, true);
        ctx.fill();

    }

    lazeGun(targetX,targetY) {
        ctx.beginPath();
        ctx.moveTo(0, -this.gunHeight / 2);
        ctx.lineTo(targetX,targetY);
        ctx.lineWidth = this.gunHeight / 2;
        ctx.strokeStyle = "#0037fe"
        ctx.stroke();
    }


    rotateGun(targetX, targetY) {
        this.dx = this.x - targetX;
        this.dy = this.y - targetY;
        this.angle = Math.atan2(this.dy, this.dx) * (180 / Math.PI);
        if (this.dy > 0 && this.dx > 0) {
            this.angle += 180;
        } else if (this.dy < 0 && this.dx > 0) {
            this.angle -= 180;
        }
    }


}