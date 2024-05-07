const botonCamera = document.querySelector("[data-video-boton]");
const video = document.querySelector("[data-video]");
const campoCamera = document.querySelector("[data-camera]");

const foto = document.querySelector("[data-tomar-foto]");
const mensaje = document.querySelector("[data-mensaje]");
const canvas = document.querySelector("[data-video-canvas]");
const btnEnviar = document.querySelector("[data-enviar]");

let imgUrl = ""

botonCamera.addEventListener("click", async () => {
  const iniciarVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  botonCamera.style.display = "none";
  campoCamera.style.display = "block";
  video.srcObject = iniciarVideo;
});

foto.addEventListener("click", () => {
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width,canvas.height);
    imgUrl = canvas.toDataURL("image/jpeg");
    campoCamera.style.display = "none";
    mensaje.style.display = "block";
});

btnEnviar.addEventListener("click", () => {
    const recibirDatos = localStorage.getItem("registro");
    const convertirDatos = JSON.parse(recibirDatos);

    convertirDatos.img_url = imgUrl;
    localStorage.setItem("registro", JSON.stringify(convertirDatos))
    window.location.href = "./abrir-cuenta-form-3.html";
})