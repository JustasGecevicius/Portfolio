import { Firestore } from 'firebase/firestore/lite';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { Projects } from './pages/Projects';

export interface AllRoutesType {
  db: Firestore;
}

export default function AllRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/Portfolio-Website' element={<Home />} />
      <Route path='/Portfolio-Website/Projects' element={<Projects />} />
    </Routes>
  );
}
