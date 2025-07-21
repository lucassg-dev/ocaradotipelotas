import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: var(--spacing-2xl) var(--spacing-md);
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const AboutText = styled.div``;

const SectionTitle = styled.h2`
  margin-bottom: var(--spacing-lg);
  color: var(--primary);
`;

const AboutParagraph = styled.p`
  margin-bottom: var(--spacing-md);
  color: var(--text-light);
  font-size: var(--font-size-lg);
  line-height: 1.7;
`;

const HighlightBox = styled.div`
  background-color: var(--surface);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  border-left: 4px solid var(--accent);
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
`;

const StatItem = styled.div`
  text-align: center;
  background: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.div`
  font-size: var(--font-size-3xl);
  font-weight: bold;
  color: var(--accent);
  margin-bottom: var(--spacing-xs);
`;

const StatLabel = styled.div`
  color: var(--text-light);
  font-size: var(--font-size-sm);
`;

const AboutSection: React.FC = () => {
  return (
    <AboutContainer id="sobre">
      <Container>
        <AboutContent>
          <AboutText>
            <SectionTitle>Sobre O Cara do T.I.</SectionTitle>
            <AboutParagraph>
              Somos especialistas em soluções completas de tecnologia da informação, 
              oferecendo suporte técnico profissional e personalizado para empresas 
              de todos os tamanhos.
            </AboutParagraph>
            <AboutParagraph>
              Nossa missão é simplificar a tecnologia para nossos clientes, 
              proporcionando soluções eficientes, seguras e inovadoras que 
              impulsionam o crescimento dos negócios.
            </AboutParagraph>
            <HighlightBox>
              <h4 style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-sm)' }}>
                Por que escolher O Cara do T.I.?
              </h4>
              <ul style={{ color: 'var(--text-light)', paddingLeft: 'var(--spacing-md)' }}>
                <li>Suporte 24 horas disponível</li>
                <li>Serviço altamente qualificado</li>
                <li>Soluções personalizadas</li>
                <li>Preços competitivos</li>
                <li>Foco na satisfação do cliente</li>
              </ul>
            </HighlightBox>
          </AboutText>
          
          <StatsContainer>
            <StatItem>
              <StatNumber>24h</StatNumber>
              <StatLabel>Suporte Disponível</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>100+</StatNumber>
              <StatLabel>Clientes Atendidos</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>5+</StatNumber>
              <StatLabel>Anos de Experiência</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>100%</StatNumber>
              <StatLabel>Satisfação</StatLabel>
            </StatItem>
          </StatsContainer>
        </AboutContent>
      </Container>
    </AboutContainer>
  );
};

export default AboutSection;