import "./collections.scss";

const videoRef = null;

const getVideo = () => {
  navigator.mediaDevices
    .getUserMedia({ video: { width: 300 } })
    .then((stream) => {
      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error("error:", err);
    });
};

const Scanner = () => (
  <div class="page">
    <video ref={videoRef}></video>
  </div>
);
export default Scanner;
