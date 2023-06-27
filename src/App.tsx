import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { BrowserRouter } from 'react-router-dom';
import { getFirebaseConfig } from './config/firebaseConfig';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Projects } from './pages/Projects';
function App() {
  const config = getFirebaseConfig();
  const app = initializeApp(config);
  const db = getFirestore(app);

  return (
    <BrowserRouter>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path='/Portfolio-Website' element={<Home />} />
        <Route path='/Portfolio-Website/Projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
