body {
    margin: 0;
    overflow: hidden;
    background-color: #ffccff;
    text-align: center;
    font-family: Arial, sans-serif;
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
    width: 100px;
    height: 100px;
    cursor: pointer;
}

#lid {
    width: 100px;
    height: 20px;
    background-color: red;
    position: absolute;
    top: -20px;
    left: 0;
}

#box {
    width: 100px;
    height: 100px;
    background-color: gold;
    position: absolute;
}

/* Lời chúc */
#greeting {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    font-weight: bold;
    color: #ff0080;
    animation: glow 1s infinite alternate;
}

@keyframes glow {
    from { text-shadow: 0 0 10px pink; }
    to { text-shadow: 0 0 20px red; }
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
