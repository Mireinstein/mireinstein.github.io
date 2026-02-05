/**
 * @copyright 2025 Aime Cesaire Mugishawayo
 * @license Apache-2.0
 */

// Node modules
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger)

// Components
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from './components/Footer'
import Courses from './components/Courses'
import Freelance from './components/Freelance'

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

// Main page — all sections
const MainPage = ({ theme }) => (
    <>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects theme={theme} />
        <Courses />
        <Contact theme={theme} />
    </>
);

const App = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const location = useLocation();

    var tempTheme = "";
    if (savedTheme) {
        tempTheme = savedTheme;
    } else {
        tempTheme = prefersDark ? 'dark' : 'light';
    }

    const [theme, setTheme] = useState(tempTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    useEffect(() => {
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useGSAP(() => {
        const elements = gsap.utils.toArray(".reveal-up");
        elements.forEach(element => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "-200 bottom",
                    end: "bottom 80%",
                    scrub: true
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            });
        });
    }, { dependencies: [location.pathname] });

    return (
        <ReactLenis root>
            <ScrollToTop />
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Routes>
                    <Route path="/" element={<MainPage theme={theme} />} />
                    <Route path="/freelance" element={<Freelance />} />
                </Routes>
            </main>
            <Footer />
        </ReactLenis>
    );
};

export default App;
