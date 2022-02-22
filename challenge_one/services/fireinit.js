
// This is `services/fireinit.js`

import { initializeApp,  } from "firebase/app"
import *  as Auth from "firebase/auth"

const config = {
    apiKey: "AIzaSyCORIo2iWNvvk011o_2TtkSLSU8qie1pRE",
    authDomain: "challengeone-57616.firebaseapp.com",
    projectId: "challengeone-57616",
    storageBucket: "challengeone-57616.appspot.com",
    messagingSenderId: "638283081037",
    appId: "1:638283081037:web:d1db116e5259630292c304",
    measurementId: "G-LNRFDQ47DC"
}

initializeApp(config)

export const fireAuth = Auth;
export default { fireAuth }