import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Nav from './sections/Nav';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Nav>
          <main>
            <div className="App"></div>
          </main>
        </Nav>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
