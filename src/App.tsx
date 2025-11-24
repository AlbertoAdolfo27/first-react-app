import { useState } from 'react';
import Home from './Home.tsx';
import About from './About.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';


function App() {
  const [page, setPage] = useState<"Home" | "About">("Home")

  return (
    <>
      <Header setPage={setPage} />
      {page === "Home" && <Home />}
      {page === "About" && <About />}
      <Footer />
    </>
  )
}

export default App
