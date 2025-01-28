import React from "react";
import {
  Header,
  HeroSection,
  ServicesSection,
  ServiceCard,
  Footer,
  ContactForm,
} from "./styles/StyledComponents";
import logo from "./assets/logo.png"; // Caminho para a imagem da logo

<Header>
  <div style={{ display: "flex", alignItems: "center" }}>
    {/* Substitua o URL pelo link do seu ícone */}
    <img
      src="/Users/luisrigaud/Desktop/projects/rr-software-landing/src/assets/logo.png"
      alt="Logo RR Software"
      style={{ height: "50px", marginRight: "16px" }}
    />
    <h1>RR Software</h1>
  </div>
  <nav>
    <ul>
      <li><a href="#services">Serviços</a></li>
      <li><a href="#about">Sobre Nós</a></li>
      <li><a href="#contact">Contato</a></li>
    </ul>
  </nav>
</Header>

const App = () => {
  return (
    <div>
      {/* Cabeçalho */}
      <Header>
        <img src={logo} alt="RR Software Logo" style={{ height: "50px" }} />
        <nav>
          <ul>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </Header>

      {/* Hero Section */}
      <HeroSection>
        <h2>Soluções Inovadoras para o Sucesso do Seu Negócio</h2>
        <p>Desenvolvemos softwares sob medida para transformar suas ideias em realidade.</p>
        <a href="#contact">Fale Conosco</a>
      </HeroSection>

      {/* Seção de Serviços */}
      <ServicesSection id="services">
        <h3>Nossos Serviços</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <ServiceCard>
            <h4>Desenvolvimento Web</h4>
            <p>Criação de sites e sistemas personalizados para a sua empresa.</p>
          </ServiceCard>
          <ServiceCard>
            <h4>Aplicativos Mobile</h4>
            <p>Apps intuitivos e responsivos para Android e iOS.</p>
          </ServiceCard>
          <ServiceCard>
            <h4>Consultoria Técnica</h4>
            <p>Soluções estratégicas para otimizar seus processos tecnológicos.</p>
          </ServiceCard>
        </div>
      </ServicesSection>

      {/* Formulário de Contato */}
      <section id="contact" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h3>Entre em Contato</h3>
        <p>Quer saber mais? Envie uma mensagem para nossa equipe!</p>
        <ContactForm>
          <input type="text" placeholder="Seu Nome" />
          <input type="email" placeholder="Seu E-mail" />
          <textarea placeholder="Sua Mensagem" rows="4"></textarea>
          <button type="submit">Enviar</button>
        </ContactForm>
      </section>

      {/* Rodapé */}
      <Footer>
        <p>&copy; 2025 RR Software. Todos os direitos reservados.</p>
      </Footer>
    </div>
  );
};

export default App;
