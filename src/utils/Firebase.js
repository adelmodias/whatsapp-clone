const firebase = require("firebase");
require("firebase/firestore");

export class Firebase {
  constructor() {
    this._config = {
      apiKey: "AIzaSyD4LeWuVBKgCO8CR4m0ggyamJ8S3W_Z4ro",
      authDomain: "whatsapp-clone-3d8ab.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-3d8ab.firebaseio.com",
      projectId: "whatsapp-clone-3d8ab",
      storageBucket: "",
      messagingSenderId: "688701182016",
      appId: "1:688701182016:web:7036a9690b64540d"
    };
    this.init();
  }

  init() {
    if (!this._initalized) {
      firebase.initializeApp(this._config);

      // Agora o timestampsInSnapshots é inicializado como true por padrão
      //   firebase.firestore().settings({
      //     timestampsInSnapshots: true
      //   });

      this._initalized = true;
    }
  }

  static db() {
    return firebase.firestore();
  }

  static hd() {
    return firebase.storage();
  }
}
