import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyJobsta from './components/WhyJobsta';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import JobseekerPage from './pages/JobseekerPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <HowItWorks />
              <WhyJobsta />
              <CTASection />
              <Footer />
            </>
          }
        />

        {/* Jobseeker Signup Page */}
        <Route path="/signup" element={<JobseekerPage />} />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;