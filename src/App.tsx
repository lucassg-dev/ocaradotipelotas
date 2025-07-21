import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const Main = styled.main`
  padding-top: 0;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </Main>
      <Footer />
    </AppContainer>
  );
};

export default App;