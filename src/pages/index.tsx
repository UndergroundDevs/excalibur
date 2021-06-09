import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { Nav, Header, Buttom } from '../styles/header';

import Head from 'next/head';

import logoAndro from '../assets/logo-andro.svg';
import backgroundImage from '../assets/Andro-hero.svg';
import imageGestão from '../assets/Vector_Gestao.svg';
import imageGestão1 from '../assets/Vetor-2.svg';
import imageGestão2 from '../assets/Vetor-3.svg';
import service from '../assets/service.svg';
import cieeImage from '../assets/CIEE.png';
import quantoSobraImage from '../assets/quanto_sobra.png'

export default function Home() {
  const [ isOpenMenu, setIsOpenMenu ] = useState(false);
  const [ isBlue, setIsBlue ] = useState(false);

  const myNav = useRef<HTMLBaseElement>(null);
  const coloHeader = useRef<HTMLBaseElement>(null);
  const home = useRef<HTMLAnchorElement>(null);

  function openMenu () {
    setIsOpenMenu(!isOpenMenu)
  }

  function scrollToPage(position: number) {
    window.scroll({behavior: "smooth", top: (position - 48) });
  }

  useEffect(() => {
    const tagAtribute = myNav.current.querySelectorAll('a[href^="P"]');
    home.current.addEventListener('click', (event) => {
      event.preventDefault();

      const idAncora = home.current.getAttribute('href');
      const id = idAncora.split('-');

      const section = document.querySelector(`#${id[1]}`) as HTMLBaseElement;

      window.scroll({behavior: "smooth", top: (section.offsetTop - 48) });
    });

    tagAtribute.forEach(item => {
      item.addEventListener('click', (event) => {
        
        event.preventDefault();

        const idAncora = item.getAttribute('href');
        const id = idAncora.split('-')
        const section = document.querySelector(`#${id[1]}`) as HTMLBaseElement;

        scrollToPage(section.offsetTop);

      });
    })

  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 90 ) {
        coloHeader.current.style.background = "#040A25"
      }

      if (window.scrollY <= 90 ) {
        coloHeader.current.style.background = "transparent"
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Andro | Consultoria e Assessoria</title>
        <link rel="icon" href="/logo_azul.png" />
      </Head>

      <Header isColoraBlue={isBlue} ref={coloHeader}>
        <div className="container-logo">
          <a href="P-home" ref={home}>
            <img src={logoAndro} alt="Águia em branco com um fundo azul"/>
          </a>
        </div>
        <Nav open={isOpenMenu} ref={myNav}>
          <a href="P-about">Quem Somos</a>
          <a href="P-client">Como Trabalhamos</a>
          <a href="P-partnerships">Clientes</a>
          <button>Fale Conosco</button>
        </Nav>
      </Header>

      <section id="home">
        <h1>A agilidade e eficiência que seu negócio precisa</h1>
        <div className="container-services">
          <h2>Somos uma empresa de prestação de serviços para quem já possui ou vai iniciar um negócio e necessita de soluções criativas em financeiro, marketing, pessoas, operacional ou estratégico.</h2>
          <a href="#second-chance">Solicite uma análise gratuita</a>
        </div>
        <img src={backgroundImage} alt="Leão representando a logo da empresa" />
      </section>

      <section id="home-part-two">
        <img src={imageGestão} alt="reunião entre dirigentes com slide no fundo"/>
        <div className="description-section description-section-align-to-right">
          <h1 className="align-text-to-right">A melhor gestão para o seu projeto</h1>
          <h2 className="align-text-to-right">
            Impulsionamos o seu sonho através da
            análise e planejamento alinhado as
            demandas do mercado.
          </h2>
          <a href="#">impusione seu negócio</a>
        </div>
      </section>
      <section id="home-part-two">
        <div className="description-section">
          <h1>A comunicação certa para o seu produto</h1>
          <h2>
            Com as melhores plataformas de 
            comunicação e gerenciamento, criamos
            o melhor caminho entre o seu cliente e o seu produto.
          </h2>
          <a href="#">Encontre seus clientes</a>
        </div>
        <img src={imageGestão1} alt="reunião entre dirigentes com slide no fundo"/>
      </section>
      <section id="home-part-two">
        <img src={imageGestão2} alt="reunião entre dirigentes com slide no fundo"/>
        <div className="description-section description-section-align-to-right">
          <h1 className="align-text-to-right">
            Devolvemos o seu
            controle financeiro
          </h1>
          <h2 className="align-text-to-right">
            Gerenciamos suas finanças, alcançando o melhor desempenho
            financeiro, devolvendo o controle do seu dinheiro.
          </h2>
          <a href="#">Recupere o seu controle</a>
        </div>
      </section>

      <section id="about">
        <div className="container-about">

        </div>
        <div className="container-title">
          <h1>Nossa Equipe</h1>
          <h2>de profissionais qualificados em fazer seu negócio dar certo.</h2>
        </div>
        
      </section>

      <section id="services">
        <h1>O que fazemos</h1>
        <div className="container-services">
          <div className="service-1">
            <img src={service} alt=""/>
            <h3>Recrutamnto & <br/>Gerenciamento</h3>
          </div>
          <div className="service-2">
            <img src={service} alt=""/>
            <h3>Marketing & <br/>Design Gáfico</h3>
          </div>
          <div className="service-3">
            <img src={service} alt=""/>
            <h3>Contabilidade & <br/>Investimento</h3>
          </div>
          <div className="service-4">
            <img src={service} alt=""/>
            <h3>Controle & <br/>Qualidade</h3>
          </div>
        </div>
      </section>

      <section id="client">
        <h1>Nossos Clientes</h1>
        <div className="container-carosel">
          
        </div>
      </section>

      <section id="partnerships">
        <h1>Nosssos Parceiros</h1>
        <div className="container-partnerships">
          <img src={quantoSobraImage} alt="quanto sobra"/>
          <img src={cieeImage} alt="Centro de integração Empresa-Escola"/>
        </div>
      </section>

      <section id="contact">
        <div className="container-contact-title">
          <h1>Entre em contato</h1>
          <h2>
            Preencha os dados ao lado pra gente
            se conhecer melhor e marcar uma conversa 😉
          </h2>
        </div>
        <form action="/">
          <fieldset>
            <label htmlFor="name">Como devemos te chamar?</label>
            <input type="text" name="name" id="name"/>

            <label htmlFor="email">Como devemos te chamar?</label>
            <input type="email" name="email" id="email"/>

            <label htmlFor="body">Como devemos te chamar?</label>
            <textarea name="body" id="body" cols={10} rows={10} />
            <button>Enviar</button>
          </fieldset>
        </form>
      </section>
      
      <Buttom
        open={isOpenMenu}
        onClick={() => {openMenu()}}
      >
        <span></span>
      </Buttom>

      <footer>

      </footer>
    </>
  )
}
