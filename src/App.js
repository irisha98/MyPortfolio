
import About from './About';
import './App.css';

import CertificatesShow from './CertificatesShow'
import CursorGlow from './CursorGlow';
import Footer from './Footer';

import Projects from './Projects';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="container">
        <CursorGlow />
        <Sidebar />
      <main className="main-content">
        <About />
        <Projects />
        <CertificatesShow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
