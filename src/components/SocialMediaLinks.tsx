import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinktreeLogoFill } from "react-icons/pi";
import { styled } from "styled-components";

interface SocialProps {
    hoverColor?: string;
}
const Social = styled.a.withConfig({
    shouldForwardProp: (prop) => prop !== "hoverColor"
}) <SocialProps >`
    color: #CFCFCF;
    cursor: pointer;
    margin: 12px;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: ${props => props.hoverColor};
    }`;

const Footer = styled.footer`
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 10%;
    padding: 1% 12.5%;
    position: relative;
    width: 100%;`;

const SocialMediaLinks: React.FC = () => {
    return (
        <Footer>
            <ul >
                <li>
                    <Social
                        href="https://www.github.com/oiurisoares/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github profile of Iuri Soares"
                        hoverColor="white">
                        <FaGithub size={32} />
                    </Social>
                    <Social
                        href="https://www.instagram.com/oiurisoares.iso/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Instagram profile of Iuri Soares"
                        hoverColor="#FF377A">
                        <FaInstagram size={32} />
                    </Social>
                    <Social
                        href="https://www.linkedin.com/in/oiurisoares/"
                        target="_blank"
                        rel="noopener"
                        aria-label="LinkedIn profile of Iuri Soares"
                        hoverColor="#0A66C2">
                        <FaLinkedin size={32} />
                    </Social>
                    <Social
                        href="https://www.x.com/oiurisoares/"
                        target="_blank"
                        rel="noopener"
                        aria-label="X/Twitter profile of Iuri Soares"
                        hoverColor="white">
                        <FaXTwitter size={32} />
                    </Social>
                    <Social
                        href="https://www.linktr.ee/oiurisoares/"
                        target="_blank"
                        rel="noopener"
                        aria-label="LinkTree profile of Iuri Soares"
                        hoverColor="#6ED309">
                        <PiLinktreeLogoFill size={32} />
                    </Social>
                </li>
            </ul>
        </Footer>
    )
}

export default SocialMediaLinks;