const victorySound = new Audio('../sounds/pong-02.wav');

export default class Paddle {
    constructor(height, x, control, score) {
        this.width = 5;
        this.height = 35;
        this.x = x;
        this.y = (height / 2) - (this.height / 2);
        this.speed = 10;
        this.maxHeight = height;
        // this.maxWidth = width;
        this.score = score;


        // this.y = Math.max(Math.min(this.y, height - this.height), 0);


        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case control.up:
                    this.y = Math.max(
                        0,
                        this.y - this.speed
                    );
                    break;
                case control.down:
                    this.y = Math.min(
                        this.maxHeight - this.height,
                        this.y + this.speed
                    );
                    break;
            }
        });
    }
    addScore(player1, player2) {
        this.score.score++;
        victorySound.play();
    }

    render(ctx) {
        ctx.fillStyle = 'green';
        ctx.fillRect(
            this.x, this.y,
            this.width, this.height
        );

    }
}
