import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFirebaseConfig } from "./config/firebaseConfig";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

function App() {
  const config = getFirebaseConfig();
  const app = initializeApp(config);
  getFirestore(app);

  useEffect(() => {
    useGLTF.preload("/models/Node.glb");
    useGLTF.preload("/models/React.glb");
    useGLTF.preload("/models/Redux.glb");
    useGLTF.preload("/models/Three.glb");
  }, []);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
