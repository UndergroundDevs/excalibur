import { FormEvent, useState } from 'react';
import { useEffect, useRef } from 'react';
import { Nav, Header, Buttom } from '../styles/header';

import Head from 'next/head';

import logoAndro2 from '../assets/logo-andro.svg';
import backgroundImage from '../assets/Andro-hero.svg';
import cieeImage from '../assets/Ciee.png';
import quantoSobraImage from '../assets/quanto_sobra.png';
import parceiro1 from '../assets/perceiro1.png';
import parceiro2 from '../assets/parceiro2.png';
import logoFacebook from '../assets/facebook.png';
import logoInstagram from '../assets/instagram.png';
import logoLinkedin from '../assets/linkedin.png';
import logoMail from '../assets/mail.png';
import imgRising from '../assets/Rising-cuate.svg';
import imgScrum from '../assets/Scrum board.gif';
import imgInvoice from '../assets/Invoice.gif';
import imgLaw from '../assets/Lawyer.gif';
import Leandro from '../assets/Leandro.png';
import Wanghley from '../assets/Wang.png';
import Davi from '../assets/davi.png';
import Cibele from '../assets/Cibele.png';
import Lucas from '../assets/Lucas.png';
import Paulo from '../assets/Paulo.png';
import Thiago from '../assets/Thiago.png';
import quality from '../assets/quality.svg';
import rh from '../assets/rh.svg';
import tech from '../assets/tech.svg';
import comercial from '../assets/comercial.svg';
import financeiro from '../assets/financeiro.svg';
import processos from '../assets/processos.svg';
import necessidades from '../assets/icons/image 4.svg';
import solucoes from '../assets/icons/image 5.svg';
import acoes from '../assets/icons/image 6.svg';
import projeto from '../assets/icons/image 8.svg';
import number from '../assets/Group 6.svg';
import mosaic from '../assets/Andro-mosaic.svg'

// ICONS
import carimbo from '../assets/icons/stamp (1).svg';
import roundComputer from '../assets/icons/round-computer.svg';
import star from '../assets/icons/star-review.svg';
import box from '../assets/icons/box.svg';
import paper from '../assets/icons/paper.svg';
import coin from '../assets/icons/coing.svg';
import person from '../assets/icons/person.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import money from '../assets/icons/money (2).svg';
import stairs from '../assets/icons/i-stairs.svg';

// LOGO CLIENTES
import farmaclin from '../assets/clients/farmaclin.png';
import cheirinBao from '../assets/clients/cheirinbao.png';
import doceria1 from '../assets/clients/doceria-1.png';
import mrwolf from '../assets/clients/mr wolf.jpg';

// GIFS
import consEmpresa from '../assets/gif/Social strategy.png';
import departamentos from '../assets/gif/Scrum board.png';
import invoice from '../assets/gif/Invoice.png';

// PARTNERS
import quantoSobra from '../assets/partners/quanto_sobra.png'
import ciee from '../assets/partners/CIEE.png'

export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isBlue, setIsBlue] = useState(false);
  const [scrollNumber, setScrollNumber] = useState(0);

  const myNav = useRef<HTMLBaseElement>(null);
  const coloHeader = useRef<HTMLBaseElement>(null);
  const home = useRef<HTMLAnchorElement>(null);
  const caroselRef = useRef<HTMLDivElement>(null);
  const caroselRef2 = useRef<HTMLDivElement>(null);
  const caroselRefWhatWeDo = useRef<HTMLDivElement>(null);
  const ancorCopy = useRef<HTMLDivElement>(null);

  function openMenu() {
    setIsOpenMenu(!isOpenMenu)
  }

  function scrollToPage(position: number) {
    window.scroll({ behavior: "smooth", top: (position - 48) });
  }

  useEffect(() => {
    const color = coloHeader.current.style;
    color.backgroundColor = "#222967"

    window.addEventListener('scroll', () => {
      setScrollNumber(window.scrollY);

      if (scrollNumber >= 90) {
        color.backgroundColor = "#222967"
      }

      if (scrollNumber <= 90) {
        color.backgroundColor = "transparent"
      }
    });
  }, [scrollNumber]);

  useEffect(() => {
    const tagAtribute = myNav.current.querySelectorAll('a[href^="P"]');
    home.current.addEventListener('click', (event) => {
      event.preventDefault();

      const idAncora = home.current.getAttribute('href');
      const id = idAncora.split('-');

      const section = document.querySelector(`#${id[1]}`) as HTMLBaseElement;

      window.scroll({ behavior: "smooth", top: (section.offsetTop - 48) });
    });

    tagAtribute.forEach(item => {
      item.addEventListener('click', (event) => {

        event.preventDefault();

        const idAncora = item.getAttribute('href');
        const id = idAncora.split('-')
        const section = document.querySelector(`#${id[1]}`) as HTMLBaseElement;

        scrollToPage(section.offsetTop);

      });
    });

    const slideWhatWeDo = caroselRefWhatWeDo.current;

    let isDown3 = false;
    let startX3;
    let scrollLeft3;

    slideWhatWeDo.addEventListener('mousedown', (event) => {
      isDown3 = true;
      slideWhatWeDo.classList.add('active');
      startX3 = event.pageX - slideWhatWeDo.offsetLeft;
      scrollLeft3 = slideWhatWeDo.scrollLeft;
    });

    slideWhatWeDo.addEventListener('mouseleave', () => {
      isDown3 = false;
    });

    slideWhatWeDo.addEventListener('mouseup', () => {
      isDown3 = false;
    });

    slideWhatWeDo.addEventListener('mousemove', (e) => {
      if (!isDown3) return;
      e.preventDefault();
      const x = e.pageX - slideWhatWeDo.offsetLeft;
      const walk = (x - startX3) * 2.5; //scroll-fast
      slideWhatWeDo.scrollLeft = scrollLeft3 - walk;
    });

  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log("Submit")
  }

  function copyEmail(event: React.MouseEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Andro | Consultoria e Assessoria</title>
        <link rel="icon" href="/logo_azul.png" />
      </Head>

      <Header isColoraBlue={isBlue} ref={coloHeader}>
        <div className="container-logo">
          <a href="P-home" ref={home}>
            <img src={logoAndro2} alt="Águia em branco com um fundo azul" />
          </a>
        </div>
        <Nav open={isOpenMenu} ref={myNav}>
          <a href="P-somos">Quem Somos</a>
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

      <section id="whatwedo">
        <div className="container-title">
          <h1>O que nós fazemos?</h1>
          <h2>Oferecemos mais que serviços, com entrega rápida e trabalho<br />humanizado, somos a melhor escolha para seu negócio.</h2>
        </div>

        <div
          className="container-about"
          ref={caroselRefWhatWeDo}
        >
          <div className="we">
            <div className="image">
              <img src={necessidades} alt="necessidades" />
            </div>
            <h1>Necessidades</h1>
            <p>
              Levantar as dores e necessidades do cliente.
            </p>
          </div>

          <div className="we">
            <div className="image">
              <img src={solucoes} alt="necessidades" />
            </div>
            <h1>Soluções</h1>
            <p>
              Identificar todas as possibilidades de soluções e avaliar cada questão em específico.
            </p>
          </div>

          <div className="we">
            <div className="image">
              <img src={acoes} alt="acoes" />
            </div>
            <h1>Ações</h1>
            <p>
              Recomendar ações de curto e longo prazos, a fim de gerar negócios e reduzir custos.
            </p>
          </div>

          <div className="we">
            <div className="image">
              <img src={projeto} alt="necessidades" />
            </div>
            <h1>Projeto</h1>
            <p>
              Desenvolver, implantar e viabilizar o projeto de acordo com as metas de cada cliente.
            </p>
          </div>
        </div>
      </section>
      <section id="numbers">
        <div className="row">
          <img src={number} alt="desenho de 2 pessoas construindo casa" />
          <div className="element">
            <h1>+20</h1>
            <h2>Empresas renovadas em <span>8 meses</span></h2>
          </div>
          <div className="element">
            <h1>+10</h1>
            <h2><span>Identidades Visuais</span> criadas</h2>
          </div>
          <div className="element">
            <h1>+1K</h1>
            <h2><span>Seguidores</span> nas redes sociais</h2>
          </div>
        </div>
      </section>

      {/* NOSSOS CLIENTES */}
      <section id="clients">
        <div className='container-title'>
          <h1>Nossos Clientes</h1>
          <p>Conheça nossos clientes que tiveram seu negócio transformado!</p>
        </div>
        <div className="rows">
          <div className="container-cliente">
            <div className="container-carosel">
              <img className='hero' src={farmaclin} alt="Farma Clin" />
              <div className="container-data">
                <h1>O que foi feito?</h1>
                <ul>
                  <li><span><img src={carimbo} alt="carimbo" /></span> Criação de Identidade Visual</li>
                  <li><img src={carimbo} alt="carimbo" /> Marketing digital e Social Media</li>
                  <li><img src={roundComputer} alt="icone computador" /> Implementação de Sistema de Gestão</li>
                  <li><img src={star} alt="estrela" /> Gestão de Estoque: Entrada e Saída</li>
                  <li><img src={star} alt="estrela" /> Organização Física do estabelecimento</li>
                </ul>
              </div>
              <h1>Resultados</h1>
              <div className="container-result">
                <div>
                  <h1>45%↑</h1>
                  <h2>Aumento de Faturamento</h2>
                </div>
                <div>
                  <img src={box} alt="" />
                  <h2>Estoque com pedidos automatizados</h2>
                </div>
              </div>
            </div>
            <div className="container-carosel">
              <img className='hero' src={cheirinBao} alt="logo cheirinBao" />
              <div className="container-data">
                <h1>O que foi feito?</h1>
                <ul>
                  <li><img src={carimbo} alt="carimbo" /> Marketing digital e Social Media</li>
                  <li><img src={roundComputer} alt="icone computador" /> Implementação de Sistema de Gestão</li>
                  <li><img src={star} alt="estrela" /> Gestão de Estoque: Entrada e Saída</li>
                  <li><img src={star} alt="estrela" /> Organização Física do estabelecimento</li>
                </ul>
              </div>
              <h1>Resultados</h1>
              <div className="container-result">
                <div>
                  <h1>65%↓</h1>
                  <h2>Redução de depesas fixas e variáveis</h2>
                </div>
                <div>
                  <img src={box} alt="" />
                  <h2>Estoque com pedidos automatizados</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section id="clients-2">
        <div className="rows">
          <div className="container-cliente">
            <div className="container-carosel">
              <img className='hero' src={doceria1} alt="Doceria 1" />
              <div className="container-data">
                <h1>O que foi feito?</h1>
                <ul>
                  <li><span><img src={carimbo} alt="carimbo" /></span> Criação de Identidade Visual</li>
                  <li><img src={carimbo} alt="carimbo" /> Marketing digital e Social Media</li>
                  <li><img src={roundComputer} alt="icone computador" /> Implementação de Sistema de Gestão</li>
                  <li><img src={star} alt="estrela" /> Gestão de Estoque: Entrada e Saída</li>
                  <li><img src={star} alt="estrela" /> Organização Física do estabelecimento</li>
                </ul>
              </div>
              <h1>Resultados</h1>
              <div className="container-result">
                <div>
                  <img src={paper} alt="icone de cardápio" />
                  <h2>Aumento no cardápio e produtos</h2>
                </div>
                <div>
                  <img src={coin} alt="" />
                  <h2>Melhoria do controle financeiro</h2>
                </div>
              </div>
            </div>
            <div className="container-carosel">
              <img className='hero' src={mrwolf} alt="logo cliente mrwolf" />
              <div className="container-data">
                <h1>O que foi feito?</h1>
                <ul>
                  <li><span><img src={carimbo} alt="carimbo" /></span> Criação de Identidade Visual</li>
                  <li><img src={carimbo} alt="carimbo" /> Marketing digital e Social Media</li>
                  <li><img src={roundComputer} alt="icone computador" /> Implementação de Sistema de Gestão</li>
                  <li><img src={star} alt="estrela" /> Gestão de Estoque: Entrada e Saída</li>
                  <li><img src={star} alt="estrela" /> Organização Física do estabelecimento</li>
                </ul>
              </div>
              <h1>Resultados</h1>
              <div className="container-result">
                <div>
                  <h1>45%↑</h1>
                  <h2>Aumento de faturamento</h2>
                </div>
                <div>
                  <img src={box} alt="" />
                  <h2>Estoque com pedidos automatizados</h2>
                </div>
              </div>
            </div>
            <div className="container-tambem-quero">
              <img className='hero' src={person} alt="logo cheirinBao" />
              <h1>TAMBÉM QUERO SER UM CASE DE SUCESSO!</h1>
              <a href="#">Fale conosco <img src={arrowRight} alt="arrow to the right" /></a>
            </div>
          </div>
        </div>
      </section>
      {/* =============== */}
      {/* SERVIÇOS */}
      <section id="service">
        <div className='container-title'>
          <h1>Serviços</h1>
          <p>Oferecemos o serviço que seu negócio necessita. Para um<br />serviço personalizado, entre em contato.</p>
        </div>
        <div className="row">
          <div className="container-services">
            <div className="container-carosel">
              <img className='hero' src={consEmpresa} alt="peças de xadrez" />
              <div className="container-data">
                <h1>Consultoria
                  Empresarial</h1>
                <p>Através de análise e pesquisa, planejamos o melhor meio de gerenciar o seu projeto tornando-o mais eficaz e qualificado a atuação no mercado atual.</p>
              </div>
            </div>
            <div className="container-carosel">
              <img className='hero' src={departamentos} alt="post its" />
              <div className="container-data">
                <h1>Assessoria de Departamentos</h1>
                <ul>
                  Terceirização de serviços
                  <li>Administrativo</li>
                  <li>Financeiro</li>
                  <li>Comercial</li>
                  <li>Marketing Digital</li>
                  <li>Recursos Humanos</li>
                  <li>Social Media</li>
                </ul>
              </div>
            </div>
            <div className="container-carosel">
              <img className='hero' src={invoice} alt="peças de xadrez" />
              <div className="container-data">
                <h1>Consultoria
                  Empresarial</h1>
                <p>Através de análise e pesquisa, planejamos o melhor meio de gerenciar o seu projeto tornando-o mais eficaz e qualificado a atuação no mercado atual.</p>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* =============== */}
      {/* SOMOS A ANDRO */}
      <section id="somos">
        <div className="description">
          <h1>Somos Andro.</h1>
          <p>Nosso objetivo é levar estratégias e gestão à empresas que buscam inovação e entendem a importância destes fatores para o sucesso do negócio. Com nossos resultados adaptamos e reinventamos estratégias já existentes, gerando uma nova metodologia, onde implementamos a cultura de pequenas vitórias, para o alcance do sucesso como um todo.</p>
          <p>Todo esse processo depende  do coletivo com real envolvimento do cliente em todas as inovações e decisões. Isso ajuda a identificar problemas específicos e a propor soluções reais para gerar os resultados positivos.</p>

          <a href="#contact">QUERO SABER MAIS</a>
        </div>
        <div className="leon"><img src={mosaic} alt="reunião entre dirigentes com slide no fundo" /></div>
      </section>
      {/* =============== */}
      {/* PARCEIROS */}
      <section id="partners">
        <h1 className="title">nossos parceiros</h1>
        <div className="business">
          <div className="circle">
            <img src={quantoSobra} alt="" />
          </div>
          <div className="circle">
            <img src={ciee} alt="" />
          </div>
          <div className="circle">
            <img src={ciee} alt="" />
          </div>
          <div className="circle">
            <img src={ciee} alt="" />
          </div>
        </div>
      </section>
      {/* =============== */}
      {/* WHAT WE DO SPECIFIC*/}
      <section id="whatdowedospecific">
        <h1 className="title">O que nós fazemos?</h1>
        <div className="row">
          <div className="container-carosel">
            <img className='hero' src={acoes} alt="peças de xadrez" />
            <div className="container-data">
              <h1>Gestão
                <span><br />Estratégica</span></h1>
              <ul>
                <li>Plano de Metas</li>
                <li>Planejamento Estratégico</li>
                <li>Plano de negócios</li>
                <li>Pesquisa de mercado</li>
              </ul>
            </div>
          </div>
          <div className="container-carosel middle">
            <img className='hero' src={money} alt="post its" />
            <div className="container-data">
              <h1>Gestão<span><br />Financeira</span></h1>
              <ul>
                <li>Revisão de Custos e Despesas</li>
                <li>Valuation</li>
                <li>Inovação de Ciclo de Caixa</li>
                <li>Planejamento Financeiro</li>
              </ul>
            </div>
          </div>
          <div className="container-carosel">
            <img className='hero' src={star} alt="peças de xadrez" />
            <div className="container-data">
              <h1>Gestão<span><br />Talentos</span></h1>
              <ul>
                <li>Revisão de Custos e Despesas</li>
                <li>Valuation</li>
                <li>Inovação de Ciclo de Caixa</li>
                <li>Planejamento Financeiro</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="container-carosel">
            <img className='hero' src={carimbo} alt="peças de xadrez" />
            <div className="container-data">
              <h1>Processo<span><br />Branding</span></h1>
              <ul>
                <li>Plano de Metas</li>
                <li>Planejamento Estratégico</li>
                <li>Plano de negócios</li>
                <li>Pesquisa de mercado
                </li>
              </ul>
            </div>
          </div>
          <div className="middle container-carosel">
            <img className='hero' src={roundComputer} alt="post its" />
            <div className="container-data">
              <h1><span>Tecnologia</span> &<br /><span>Informação</span></h1>
              <ul>
                <li>Revisão de Custos e Despesas</li>
                <li>Valuation</li>
                <li>Inovação de Ciclo de Caixa</li>
                <li>Planejamento Financeiro</li>
              </ul>
            </div>
          </div>
          <div className="container-carosel">
            <img className='hero' src={stairs} alt="peças de xadrez" />
            <div className="container-data">
              <h1>Gestão<br /><span>Processos</span></h1>
              <ul>
                <li>Revisão de Custos e Despesas</li>
                <li>Valuation</li>
                <li>Inovação de Ciclo de Caixa</li>
                <li>Planejamento Financeiro</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container-contact-title">
          <h1>Entre em contato</h1>
          <h2>
            Preencha os dados de contato pra gente
            se conhecer melhor e marcarmos uma conversa 😉
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="email">e-mail:</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="body">Mensagem:</label>
            <textarea name="body" id="body" cols={10} rows={10} />
            <button type="submit">Enviar</button>
          </fieldset>
        </form>
      </section>

      <Buttom
        open={isOpenMenu}
        onClick={() => { openMenu() }}
      >
        <span></span>
      </Buttom>

      <footer>
        <div className="container">
          <div className="social-medias">
            <img src={logoLinkedin} alt="Linkedin" />
            <a target="_blank" href="https://www.linkedin.com/company/andro-consultoria-assessoria/">@andro-consultoria-assessoria</a>
          </div>
          <div className="social-medias">
            <img src={logoFacebook} alt="Facebook" />
            <a target="_blank" href="https://www.facebook.com/androconsult">@androconsult</a>
          </div>
          <div className="social-medias">
            <img src={logoInstagram} alt="Instagram" />
            <a target="_blank" href="https://www.instagram.com/androaac/">@androaac</a>
          </div>
          <div className="social-medias">
            <img src={logoMail} alt="Email" />
            <a onClick={copyEmail} id="copy" href="comercial@androconsult.com.br">comercial@androconsult.com.br</a>
          </div>
        </div>
        <h1>Copyright© 2021 Andro Consultoria & Assessoria | Feito com ❤️ pela <a href="http://www.undergrounds.rf.gd/" target="_blank">Underground Devs</a></h1>
      </footer>
    </>
  )
}
