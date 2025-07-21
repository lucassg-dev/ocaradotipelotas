import React, { useState } from 'react';
import styled from 'styled-components';
import LogoIcon from './ui/LogoIcon';

const HeaderContainer = styled.header`
  background-color: var(--primary);
  padding: 0 var(--spacing-md);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-sm) 0;
`;

const Logo = styled.div`
  font-size: var(--font-size-xl);
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  
  span > span {
    color: var(--accent);
  }
`;

const NavList = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--primary);
    flex-direction: column;
    padding: var(--spacing-md);
    gap: var(--spacing-sm);
    transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${props => props.$isOpen ? '1' : '0'};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transition: var(--transition);
  }
`;

const NavItem = styled.li`
  a {
    color: white;
    font-size: var(--font-size-base);
    font-weight: 500;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius);
    transition: var(--transition);
    
    &:hover {
      background-color: var(--accent);
      color: var(--primary);
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  color: white;
  font-size: var(--font-size-xl);
  padding: var(--spacing-xs);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const LogoAnchor = styled.a`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  &:hover {
    color: var(--accent);
  }

`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <LogoAnchor href='/'>
            <LogoIcon width="40" height="40" color="currentColor" />
          </LogoAnchor>
          <span>
            O Cara do <span>T.I.</span>
          </span>
        </Logo>
        
        <NavList $isOpen={isMenuOpen}>
          <NavItem>
            <a href="#inicio" onClick={(e) => {
              e.preventDefault();
              scrollToSection('inicio');
            }}>
              Início
            </a>
          </NavItem>
          <NavItem>
            <a href="#servicos" onClick={(e) => {
              e.preventDefault();
              scrollToSection('servicos');
            }}>
              Serviços
            </a>
          </NavItem>
          <NavItem>
            <a href="#sobre" onClick={(e) => {
              e.preventDefault();
              scrollToSection('sobre');
            }}>
              Sobre
            </a>
          </NavItem>
          <NavItem>
            <a href="#contato" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contato');
            }}>
              Contato
            </a>
          </NavItem>
        </NavList>
        
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;