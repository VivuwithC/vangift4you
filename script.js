function showCard() {
    var name = document.getElementById("name-input").value;
    if (name.trim() === "") {
        alert("Vui lòng nhập tên người nhận!");
        return;
    }

    document.getElementById("welcome").style.display = "none";
    document.getElementById("card").style.display = "block";

    // Lời chúc ngẫu nhiên
    var loiChuc = [
        "Chúc " + name + " luôn xinh đẹp, hạnh phúc và thành công!",
        name + " ơi, chúc bạn một ngày 8/3 tràn ngập yêu thương! 💐",
        "Gửi đến " + name + " lời chúc tốt đẹp nhất trong ngày đặc biệt này!",
        "Mong rằng " + name + " luôn vui vẻ, mạnh khỏe và hạnh phúc!"
    ];
    document.getElementById("greeting").innerHTML = loiChuc[Math.floor(Math.random() * loiChuc.length)];
}

// Reload trang để gửi lời chúc mới
function reloadPage() {
    location.reload();
}
