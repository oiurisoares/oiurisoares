import { useRef } from 'react';
import banner from '../assets/img/banner.png';
import SocialMediaLinks from '../components/SocialMediaLinks';
import useScrollReveal from '../hooks/ScrollReveal';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    const loadingRef = useRef<HTMLDivElement>(null);
    useScrollReveal([loadingRef]);

    return (
        <>
            <main className='landing-page'>
                <section className='landing-page__hero no-select'>
                    <img
                        alt='background'
                        className='hero-background blur-load'
                        loading='lazy'
                        onLoad={(event) => {
                            if (event.target instanceof HTMLImageElement) {
                                event.target.classList.remove('blur');
                            }
                        }}
                        src={banner} />

                    <div className="hero-overlay"></div>

                    <div className='hero-content fade-in'>
                        <h2 className='hero-subtitle'>PORTFOLIO</h2>
                        <h1 className='hero-title'>Iuri Soares</h1>
                        <h2 className='hero-description'>FULL-STACK DEVELOPER</h2>
                    </div>

                    <button className="hero-button fade-in" type='button'>CONHECER</button>

                    <footer className="hero-footer" ref={loadingRef}>
                        <SocialMediaLinks />
                    </footer>
                </section>
            </main>
        </>
    );
}

export default LandingPage;