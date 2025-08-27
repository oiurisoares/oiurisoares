import { scrollToRef } from '../hooks/ScrollToReference';
import { useIsMobileScreen } from '../hooks/IsMobileScreen';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { IoInformationCircleOutline } from 'react-icons/io5';
import banner from '../assets/img/banner.png';
import Icon from '../assets/img/icon.png';
import Loading from '../components/Loading';
import SocialMediaLinks from '../components/SocialMediaLinks';
import useScrollReveal from '../hooks/ScrollReveal';
import './LandingPage.css';
import Tooltip from '../components/Tooltip';

const LandingPage: React.FC = () => {
    const { t, ready } = useTranslation('landing-page');

    const isMobile = useIsMobileScreen();
    const loadingRef = useRef<HTMLDivElement>(null);
    useScrollReveal([loadingRef]);

    const aboutSectionTarget = useRef<HTMLElement | null>(null);
    const heroSectionTarget = useRef<HTMLElement | null>(null);

    if (!ready) return <Loading />;

    return (
        <>
            <main className='landing-page'>
                <section
                    className='landing-page__hero no-select' ref={heroSectionTarget}>
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

                    <div className='hero-overlay'></div>

                    <div className='hero-content fade-in'>
                        <h2 className='subtitle'>{t('subtitle')}</h2>
                        <h1 className='title'>{t('title')}</h1>
                        <h2 className='hero-description'>{t('hero-description')}</h2>

                        <button
                            aria-label='Know more about me'
                            className='hero-button'
                            onClick={() => scrollToRef(aboutSectionTarget)}
                            type='button'>
                            {t('know-more')}
                        </button>
                    </div>

                    <footer
                        className='hero-footer fade-in'
                        ref={loadingRef}>
                        <SocialMediaLinks />
                    </footer>
                </section>

                <section
                    className='landing-page__about no-select' ref={aboutSectionTarget}>
                    <div className='about-content' ref={loadingRef}>
                        <h2 className='subtitle'>{t("about")}</h2>
                        <h1 className='title title-medium color-black'>{t("who-am-i")}</h1>

                        <div className='about' ref={loadingRef}>
                            <img
                                alt='icon'
                                className='about-icon'
                                src={Icon} />
                            <p>{t("about-me")}</p>
                        </div>

                        <div className='tools' ref={loadingRef}>
                            <h2 className='subtitle'>
                                {t("tools")}
                                <Tooltip content={t("about-me")} >
                                    <IoInformationCircleOutline />
                                </Tooltip>
                            </h2>
                            <br />
                            <p>
                                <a title="Skillicons">
                                    <img
                                        alt="Tool icons"
                                        src={`${import.meta.env.VITE_SKILLICONS}${isMobile ? '&perline=6' : ''}`}
                                        width="100%" />
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