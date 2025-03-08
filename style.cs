body {
    margin: 0;
    overflow: hidden;
    background-color: #ffccff;
    text-align: center;
}

/* Bong bóng bay */
#balloon-container {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.balloon {
    position: absolute;
    bottom: -50px;
    width: 40px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    animation: float 5s linear infinite;
}

@keyframes float {
    from { transform: translateY(100vh); opacity: 1; }
    to { transform: translateY(-100vh); opacity: 0; }
}

/* Hộp quà */
#gift-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#gift {
    width: 100px;
    cursor: pointer;
}

/* Con mèo và lời chúc */
#cat-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

#cat {
    width: 120px;
}

#message {
    font-size: 20px;
    font-weight: bold;
    color: #ff0080;
}

/* Chữ Chúc Mừng */
#greeting {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    font-weight: bold;
    color: #ff0080;
}

/* Ẩn phần tử */
.hidden {
    display: none;
}

/* Pháo hoa */
#fireworks {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
}
