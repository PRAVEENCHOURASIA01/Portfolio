/**
 * APP.JSX - Main Application Component
 *
 * This is the main component that assembles all sections of the portfolio.
 *
 * WHAT YOU CAN EDIT:
 * - Section order: Rearrange the component order below
 * - Add new sections: Import and add new components
 * - Remove sections: Comment out components you don't need
 *
 * The components are rendered in this order:
 * 1. Navbar (sticky at top)
 * 2. Hero (landing section)
 * 3. About
 * 4. Skills
 * 5. Projects
 * 6. Contact
 * 7. Footer
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Navigation bar - stays at the top */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;