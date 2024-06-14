import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #f5e9c9; /* Cor de fundo escura para contraste */
  color: #533a22; /* Cor do texto */
  padding: 1rem 0;
  text-align: center;
  /* position: fixed;  */
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const SocialLink = styled.a`
  color: #533a22;
  margin: 0 0.5rem;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #c27ba0; // Cor rosa ao passar o mouse
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>
        &copy; {currentYear} Luke Diary. Todos os direitos reservados.
      </FooterText>

      <SocialLinks>
        <SocialLink
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </SocialLink>
        <SocialLink
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
