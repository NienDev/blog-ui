import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCjOGq-64SRh-KDbhFmCCTt4GIS7rVBW-M",
  authDomain: "blog-app-13063.firebaseapp.com",
  databaseURL: "https://blog-app-13063-default-rtdb.firebaseio.com",
  projectId: "blog-app-13063",
  storageBucket: "blog-app-13063.appspot.com",
  messagingSenderId: "271042261403",
  appId: "1:271042261403:web:26cf6b04039913e266313e",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
