import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFirebaseConfig } from "./config/firebaseConfig";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  const config = getFirebaseConfig();
  const app = initializeApp(config);
  getFirestore(app);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
