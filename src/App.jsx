import './App.css';
import { Home } from './pages/home';
import { Events } from './pages/Events';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';



function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/events' element={<Events />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Layout>
      </Router>

    </>
  );
}

export default App;
