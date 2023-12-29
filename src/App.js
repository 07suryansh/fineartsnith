import AddData from './components/AddData';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contributions from './components/Contributions';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/adddata" element={<AddData />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
