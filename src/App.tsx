import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/theme-provider";

import { Home } from "./pages/home";
import  ContactForm  from "./pages/contact";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import  Services  from "./pages/services";
import { Portfolio } from "./pages/portfolio";
import About from "./pages/about";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacto" element={<ContactForm />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/portafolio" element={<Portfolio />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
