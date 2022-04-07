import GlobalStyles from './globalStyles';
import Hero from './components/Hero';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Contact Section */}
        <Contact />
      </main>
    </>
  );
}
