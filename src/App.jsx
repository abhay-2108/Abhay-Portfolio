import React from 'react';
import { useInView } from 'react-intersection-observer';
import './styles/fade.css';
import Backgroundeffect from './components/backgroundeffect';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import OpenSource from './components/OpenSource';
import Projects from './components/project';
import Skills from './components/skills';
import Certifications from './components/certifications';
import Contact from './components/contact';
import Footer from './components/footer';
import Chatbot from './components/chatbot';
import './styles/GlobalStyles.css';

const FadeInSection = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.1, 
        triggerOnce: true, 
    });

    return (
        <div
            ref={ref}
            className={`fade-in-section ${inView ? 'is-visible' : ''}`}
        >
            {children}
        </div>
    );
};

const App = () => {
    return (
        <div className="min-h-screen bg-[#070709] text-slate-100 selection:bg-violet-500/30 selection:text-violet-200">
            <Backgroundeffect />
            <Header />
            
            <FadeInSection>
                <Banner />
            </FadeInSection>

            <FadeInSection>
                <About />
            </FadeInSection>

            <FadeInSection>
                <OpenSource />
            </FadeInSection>

            <FadeInSection>
                <Projects />
            </FadeInSection>

            <FadeInSection>
                <Skills />
            </FadeInSection>

            <FadeInSection>
                <Certifications />
            </FadeInSection>

            <FadeInSection>
                <Contact />
            </FadeInSection>

            <Footer />

            {/* Interactive Portfolio Copilot */}
            <Chatbot />
        </div>
    );
};

export default App;
