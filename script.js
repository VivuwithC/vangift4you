const canvas = document.getElementById("galaxyCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 300;

// Hàm tạo ngôi sao ngẫu nhiên
function createStar() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.5
    };
}

// Tạo danh sách sao
for (let i = 0; i < numStars; i++) {
    stars.push(createStar());
}

// Vẽ sao lên canvas
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
    });
}

// Cập nhật vị trí và độ sáng sao
function updateStars() {
    stars.forEach(star => {
        star.opacity += (Math.random() - 0.5) * 0.05;
        if (star.opacity > 1) star.opacity = 1;
        if (star.opacity < 0.1) star.opacity = 0.1;
    });
}

// Animation loop
function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
}

// Đổi kích thước canvas khi resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Chạy hiệu ứng
animate();
