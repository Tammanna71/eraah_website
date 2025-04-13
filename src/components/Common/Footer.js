// src/components/Common/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  padding: 3rem 2rem;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const EmailSignup = styled.div`
  flex: 1;
  min-width: 300px;
  margin-right: 2rem;
`;

const EmailInput = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  padding-bottom: 0.5rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 0;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

const SubscribeButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  a {
    color: ${({ theme }) => theme.text};
    margin-right: 1rem;
    font-size: 1.5rem;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <EmailSignup>
          <h2>Stay Updated</h2>
          <p>Sign up to receive the latest news.</p>
          <EmailInput>
            <Input type="email" placeholder="Email Address" />
            <SubscribeButton>&gt;</SubscribeButton>
          </EmailInput>
          <SocialIcons>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaPinterest /></a>
          </SocialIcons>
        </EmailSignup>
        <Links>
          <LinkList>
            <a href="#">Get in Touch</a>
            <a href="#">Join Our Team</a>
            <a href="#">About</a>
            <a href="#">FAQ</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
          </LinkList>
          <LinkList>
            <a href="#">Terms of Service</a>
          </LinkList>
        </Links>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;