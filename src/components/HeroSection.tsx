import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, var(--primary) 0%, var(--text-light) 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 var(--spacing-md);
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: clamp(var(--font-size-3xl), 5vw, 4rem);
  margin-bottom: var(--spacing-md);
  color: white;
  
  span {
    color: var(--accent);
  }
`;

const HeroSubtitle = styled.p`
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xl);
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.button`
  background-color: var(--accent);
  color: var(--primary);
  font-size: var(--font-size-lg);
  font-weight: 600;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 15px rgba(255, 150, 25, 0.3);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 150, 25, 0.4);
  }
`;

const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <HeroContainer id="inicio">
      <HeroContent>
        <HeroTitle>
          Soluções Completas em <span>Tecnologia</span>
        </HeroTitle>
        <HeroSubtitle>
          Suporte técnico, automação, treinamento e gestão completa da sua infraestrutura de TI. 
          Disponível 24 horas para empresas que precisam de resultados.
        </HeroSubtitle>
        <CTAButton onClick={scrollToServices}>
          Conhecer Serviços
        </CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;