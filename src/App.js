
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PhotoGallery from './pages/PhotoGallery';

function App() {
  return (
    < >
<header>
  <Navbar/>
</header>
<main>
<PhotoGallery/>
</main>
  <footer>
    <Footer/>
  </footer>
    </>
  );
}

export default App;
