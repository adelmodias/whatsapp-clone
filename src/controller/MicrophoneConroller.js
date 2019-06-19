export class MicrophoneController {
  constructor() {
    navigator.mediaDevices
      .getUserMedia({
        audio: true
      })
      .then(stream => {
        this._stream = stream;

        let audio = new Audio();
        audio.srcObject = stream;
        // audio.play();
      })
      .catch(error => {
        console.log(error);
      });
  }

  stop() {
    this._stream.getTracks().forEach(track => {
      track.stop();
    });
  }
}
