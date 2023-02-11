import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

function FirebaseConfig() {
  let app = null;
  if (app === null) {
    app = initializeApp({
      apiKey: "AIzaSyAuKuGpSebaC1K8e8v9CBAz-NPTj1ECvA0",
      authDomain: "redberry-resume-maker.firebaseapp.com",
      projectId: "redberry-resume-maker",
      storageBucket: "redberry-resume-maker.appspot.com",
      messagingSenderId: "111384610633",
      appId: "1:111384610633:web:792c6b69d10e2631757c98",
      measurementId: "G-BEQNLENT9E",
    });
  }

  const storage = getStorage(app);
  const storageRef = ref(storage, "userProfileImage");
  return storageRef;
}

export default FirebaseConfig;
