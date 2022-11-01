import './collections.scss';

const videoRef = null;

const _getVideo = () => {
  navigator.mediaDevices
    .getUserMedia({ video: { width: 300 } })
    .then(stream => {
      const video = videoRef.current;
      video.srcObject = stream;
      video.play();
    })
    .catch(err => {
      console.error('error:', err);
    });
};

const Scanner = () => (
  <div className="page">
    <video ref={videoRef}></video>
  </div>
);
export default Scanner;
