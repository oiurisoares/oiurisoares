import React, { RefObject } from "react";
import { scrollToRef } from "../hooks/ScrollToReference";
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import Loading from "./Loading";

const FooterWrapper = styled.footer`
  -webkit-user-select: none;
  background: #0d0d0d;
  bottom: 0;
  color: #ccc;
  font-family: sans-serif;
  font-size: 14px;
  height: fit-content;
  padding: 40px 20px;
  position: relative;
  user-select: none;
  width: 100%;
  z-index: 1000;
  
  .footer-content {
    border-bottom: 1px solid #333;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin: 0 auto;
    max-width: 1200px;
    padding-bottom: 30px;
  }`;

const Column = styled.div`
  flex: 1 1 200px;
  min-width: 200px;

  h2, h3 {
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 8px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 6px;
  }

  a {
    color: #ccc;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }`;

const Bottom = styled.div`
  color: #777;
  font-size: 13px;
  margin-top: 20px;
  text-align: center;`;

interface FooterProps {
  sectionRefs?: Record<string, RefObject<HTMLElement>>;
}
const Footer: React.FC<FooterProps> = ({ sectionRefs }) => {
  const { t, ready } = useTranslation('footer');
  if (!ready) return <Loading />;

  const handleScroll = (section: string, offset = 0) => {
    const ref = sectionRefs?.[section]; if (ref) scrollToRef(ref, offset);
  };

  return (
    <FooterWrapper>
      <div className="footer-content">
        <Column>
          <h2>{t('name')}</h2>
          <p></p>
        </Column>

        <Column>
          <h3>{t('navigation')}</h3>
          <ul>
            <li>
              <a
                onClick={() => handleScroll('home')}
                title="Home">
                {t('home')}
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll('about')}
                title="About">
                {t('about')}
              </a>
            </li>
          </ul>
        </Column>
      </div>
      <Bottom>
        @{new Date().getFullYear()}
        {` ${t('name')}. ${t('all-rights-reserved')}.`}
      </Bottom>
    </FooterWrapper>
  )
}

export default Footer;
