import { AdditiveBlending, BufferAttribute, BufferGeometry, CanvasTexture, Color, PerspectiveCamera, Points, RawShaderMaterial, Scene, WebGLRenderer } from "https://cdn.skypack.dev/three@0.136.0"
import { OrbitControls } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls"
import GUI from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/libs/lil-gui.module.min.js"
import { TWEEN } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/libs/tween.module.min.js"



console.clear()
// ------------------------ //
// SETUP

const count = 128 ** 2

const scene = new Scene()

const camera = new PerspectiveCamera(
  60, innerWidth / innerHeight, 0.1, 100
)
camera.position.set(0, 2, 3)

const renderer = new WebGLRenderer({ canvas })
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const orbit = new OrbitControls(camera, canvas)



// ------------------------ //
// STAR ALPHA TEXTURE

const ctx = document.createElement("canvas").getContext("2d")
ctx.canvas.width = ctx.canvas.height = 32

ctx.fillStyle = "#000"
ctx.fillRect(0, 0, 32, 32)

let grd = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
grd.addColorStop(0.0, "#fff")
grd.addColorStop(1.0, "#000")
ctx.fillStyle = grd
ctx.beginPath()
ctx.rect(15, 0, 2, 32)
ctx.fill()
ctx.beginPath()
ctx.rect(0, 15, 32, 2)
ctx.fill()
