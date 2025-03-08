Dưới 

// Tạo bong bóng bay
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    document.getElementById("balloon-container").appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 5000);
}

setInterval(createBalloon, 300);

// Hiệu ứng hộp quà xuất hiện
setTimeout(() => {
    document.getElementById("gift-box").classList.remove("hidden");
}, 5000);

// Khi bấm vào hộp quà
document.getElementById("gift-box").addEventListener("click", function () {
    document.getElementById("gift-box").classList.add("hidden");
    document.getElementById("cat-box").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("cat-box").classList.add("hidden");
        document.getElementById("greeting").classList.remove("hidden");

        // Hiển thị pháo hoa
        startFireworks();
    }, 3000);
});

// Pháo hoa
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.particles = [];

        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: x,
                y: y,
                speed: Math.random() * 5 + 2,
                angle: Math.random() * 2 * Math.PI,
                alpha: 1
            });
        }
    }

    update() {
        this.particles.forEach(p => {
            p.x += Math.cos(p.angle) * p.speed;
            p.y += Math.sin(p.angle) * p.speed;
            p.alpha -= 0.02;
        });
    }

    draw() {
        this.particles.forEach(p => {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fill();
        });
    }
}

let fireworks = [];

function startFireworks() {
    setInterval(() => {
        fireworks.push(new Firework(Math.random() * canvas.width, Math.random() * canvas.height / 2, `hsl(${Math.random() * 360}, 100%, 60%)`));
    }, 500);
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach(f => {
        f.update();
        f.draw();
    });
    requestAnimationFrame(animateFire

    
