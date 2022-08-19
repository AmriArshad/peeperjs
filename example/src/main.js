// Load video element and append to body
video.load()
document.body.appendChild(video)

// Load models and start video
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('assets/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('assets/models'),
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia({ video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

startPeeper()