import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-blue-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">RR Software</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:underline">Serviços</a></li>
              <li><a href="#about" className="hover:underline">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:underline">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Soluções Inovadoras para o Sucesso do Seu Negócio</h2>
          <p className="mb-6">Desenvolvemos softwares sob medida para transformar suas ideias em realidade.</p>
          <a
            href="#contact"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Fale Conosco
          </a>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Nossos Serviços</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-4">Desenvolvimento Web</h4>
              <p>Criação de sites e sistemas personalizados para a sua empresa.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-4">Aplicativos Mobile</h4>
              <p>Apps intuitivos e responsivos para Android e iOS.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-4">Consultoria Técnica</h4>
              <p>Soluções estratégicas para otimizar seus processos tecnológicos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="about" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Quem Somos</h3>
          <p>
            Na RR Software, somos apaixonados por tecnologia e inovação. Nossa missão é criar soluções digitais que
            impulsionem negócios e gerem resultados excepcionais.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Entre em Contato</h3>
          <p className="mb-4">Quer saber mais? Envie uma mensagem para nossa equipe!</p>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Seu E-mail"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <textarea
              placeholder="Sua Mensagem"
              className="w-full p-3 mb-4 border rounded-lg"
              rows="4"
            ></textarea>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-blue-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 RR Software. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
