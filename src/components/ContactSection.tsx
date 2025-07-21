import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: var(--spacing-2xl) var(--spacing-md);
  background-color: var(--surface);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  color: var(--primary);
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  color: var(--primary);
  margin-bottom: var(--spacing-lg);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--spacing-md);
  font-size: var(--font-size-lg);
`;

const ContactDetails = styled.div`
  h4 {
    color: var(--primary);
    margin-bottom: var(--spacing-xs);
    font-size: var(--font-size-base);
  }
  
  p {
    color: var(--text-light);
    margin: 0;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-md);
`;

const FormLabel = styled.label`
  display: block;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
`;

const FormInput = styled.input`
  width: 100%;
  padding: var(--spacing-sm);
  border: 2px solid var(--surface);
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: var(--spacing-sm);
  border: 2px solid var(--surface);
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
  font-family: inherit;
  resize: vertical;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--accent);
  color: var(--primary);
  font-size: var(--font-size-base);
  font-weight: 600;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  transition: var(--transition);
  
  &:hover {
    background-color: #e5850f;
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const texto = `Olá! Gostaria de entrar em contato.\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Telefone:* ${phone || 'Não informado'}\n*Mensagem:* ${message}`;
    const textoCodificado = encodeURIComponent(texto);

    const numeroWhatsApp = '+5553984688644'; // Use o número com DDI e DDD, sem espaços ou símbolos
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(linkWhatsApp, '_blank'); // Abre em nova aba
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <ContactContainer id="contato">
      <Container>
        <SectionTitle>Entre em Contato</SectionTitle>
        <ContactContent>
          <ContactInfo>
            <InfoTitle>Fale Conosco</InfoTitle>
            <ContactItem>
              <ContactIcon>📞</ContactIcon>
              <ContactDetails>
                <h4>Telefone</h4>
                <p>(53) 98468-8644</p>
              </ContactDetails>
            </ContactItem>
            <ContactItem>
              <ContactIcon>📧</ContactIcon>
              <ContactDetails>
                <h4>E-mail</h4>
                <p>lucassg.dev@gmail.com</p>
              </ContactDetails>
            </ContactItem>
            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              <ContactDetails>
                <h4>Endereço</h4>
                <p>Pelotas, RS</p>
              </ContactDetails>
            </ContactItem>
            <ContactItem>
              <ContactIcon>⏰</ContactIcon>
              <ContactDetails>
                <h4>Horário</h4>
                <p>Suporte 24h disponível</p>
              </ContactDetails>
            </ContactItem>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Nome *</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">E-mail *</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="phone">Telefone</FormLabel>
              <FormInput
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Mensagem *</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Descreva como podemos ajudar você..."
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit">
              Enviar Mensagem
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactContainer>
  );
};

export default ContactSection;