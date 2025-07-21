import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--primary);
  color: white;
  padding: var(--spacing-xl) var(--spacing-md) var(--spacing-md);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`;

const FooterSection = styled.div`
  h4 {
    color: var(--accent);
    margin-bottom: var(--spacing-md);
    font-size: var(--font-size-lg);
  }
  
  p, li {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: var(--spacing-xs);
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  a {
    color: rgba(255, 255, 255, 0.8);
    transition: var(--transition);
    
    &:hover {
      color: var(--accent);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: var(--spacing-md);
  text-align: center;
  
  p {
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
    font-size: var(--font-size-sm);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent);
    transform: translateY(-2px);
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <h4>O Cara do T.I.</h4>
            <p>
              Soluções completas em tecnologia da informação para empresas 
              que buscam eficiência, segurança e inovação.
            </p>
            <SocialLinks>
              <SocialLink href="https://wa.me/5553984688644" aria-label="WhatsApp" target='_blank'>
                📱
              </SocialLink>
              <SocialLink href="mailto:lucassg.dev@gmail.com" aria-label="E-mail" target='_blank'>
                📧
              </SocialLink>
              <SocialLink href="https://brand.contact/ocaradoti-lucas" aria-label="Cartão de visitas" target='_blank'>
                🔗
              </SocialLink>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <h4>Serviços</h4>
            <ul>
              <li>Suporte Técnico 24h</li>
              <li>Gestão de Infraestrutura</li>
              <li>Automação de Processos</li>
              <li>Treinamento de Equipes</li>
              <li>Soluções IoT</li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h4>Contato</h4>
            <ul>
              <li>📞 (53) 98468-8644</li>
              <li>📧 lucassg.dev@gmail.com</li>
              <li>📍 Pelotas, RS</li>
              <li>⏰ Suporte 24h disponível</li>
            </ul>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <p>
            © 2025 O Cara do T.I. Todos os direitos reservados. Desenvolvido com tecnologia e dedicação.
          </p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;