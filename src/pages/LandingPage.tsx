import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import banner from '../assets/img/banner.png';
import i18n from '../config/i18n';
import SocialMediaLinks from '../components/SocialMediaLinks';
import useScrollReveal from '../hooks/ScrollReveal';
import './LandingPage.css';

import Icon from '../assets/img/icon.png';

const LandingPage: React.FC = () => {
    const [language] = useState<string>();
    const { t } = useTranslation();

    useEffect(() => {
        i18n.loadNamespaces("landing-page").catch((error: Error) => {
            console.error(error);
        });
    }, [language]);

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const loadingRef = useRef<HTMLDivElement>(null);
    useScrollReveal([loadingRef]);

    const scrollToRef = (ref: React.RefObject<HTMLElement | null>, offset?: number) => {
        if (ref.current) {
            const position = ref.current.getBoundingClientRect().top + window.scrollY;
            offset = offset || 0;
            window.scrollTo({
                behavior: 'smooth',
                top: position - (window.innerHeight * (offset / 100)),
            });
        }
    };

    const aboutSectionTarget = useRef<HTMLElement | null>(null);

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
                        <h2 className='subtitle'>PORTFOLIO</h2>
                        <h1 className='title'>Iuri Soares</h1>
                        <h2 className='hero-description'>FULL-STACK DEVELOPER</h2>
                    </div>

                    <button
                        className="hero-button fade-in"
                        onClick={() => scrollToRef(aboutSectionTarget)}
                        type='button'>
                        {t('know-more')}
                    </button>

                    <footer className="hero-footer fade-in" ref={loadingRef}>
                        <SocialMediaLinks />
                    </footer>
                </section>

                <section className='landing-page__about no-select' ref={aboutSectionTarget}>
                    <div className='about-content' ref={loadingRef}>
                        <h2 className='subtitle'>{t('about')}</h2>
                        <h1 className='title title-medium color-black'>{t('who-am-i')}</h1>

                        <div className='about' ref={loadingRef}>
                            <img alt='icon' className='about-icon' src={Icon} />

                            <p>{t('about-me')}</p>
                        </div>

                        <div className='tools' ref={loadingRef}>
                            <h2 className='subtitle'>{t('tools')}</h2>
                            <br />
                            <p>
                                <a href="https://skillicons.dev" title="Skillicons">
                                    <img
                                        alt="Tool icons"
                                        src={`${import.meta.env.VITE_SKILLICONS}${isMobile ? '&perline=6' : ''}`}
                                        width="100%"
                                    />
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default LandingPage;