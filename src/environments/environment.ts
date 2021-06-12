import {authConfig} from '@app/core/configs/auth_config.dev';
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/',
  firebase: {
    apiKey: "AIzaSyBmzYUTSaIHopWvFIXKDWWec9gxx4NjR7E",
    authDomain: "dragle-devops.firebaseapp.com",
    projectId: "dragle-devops",
    storageBucket: "dragle-devops.appspot.com",
    messagingSenderId: "694524194653",
    appId: "1:694524194653:web:c91b5f3d9bad7ec3e402b4",
    measurementId: "G-2X3ZTZBBPH"
  },
  auth: {...authConfig, redirectUri: window.location.origin},
  dev: {
    serverUrl: authConfig.serverUrl,
  },
};
