import styled from "styled-components";

// Cabeçalho
export const Header = styled.header`
  background-color: #1e3a8a;
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 16px;
  }

  nav a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #93c5fd;
    }
  }
`;


// Hero Section
export const HeroSection = styled.section`
  text-align: center;
  padding: 80px 20px;
  background-color: #3b82f6;
  color: white;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  a {
    padding: 10px 20px;
    background-color: white;
    color: #3b82f6;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e5e7eb;
    }
  }
`;

// Seção de Serviços
export const ServicesSection = styled.section`
  padding: 60px 20px;
  background-color: #f3f4f6;
  text-align: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

export const ServiceCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
  text-align: center;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

// Rodapé
export const Footer = styled.footer`
  background-color: #1e3a8a;
  color: white;
  text-align: center;
  padding: 20px;
`;

// Formulário de Contato
export const ContactForm = styled.form`
  max-width: 400px;
  margin: 0 auto;

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #1e3a8a;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #374151;
    }
  }
`;

export const Logo = styled.img`
  height: 80%;
  width: 80%;
  margin-right: 20px;
`;

