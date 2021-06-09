import { FormEvent, useState } from 'react';
import { useEffect, useRef } from 'react';
import { Nav, Header, Buttom } from '../styles/header';

import Head from 'next/head';

import logoAndro from '../../public/logo-andro.svg';
import logoAndro2 from '../assets/logo-andro.svg';
import backgroundImage from '../assets/Andro-hero.svg';
import imageGestão from '../assets/Vector_Gestão.png';
import imageGestão1 from '../assets/Vetor-2.png';
import imageGestão2 from '../assets/Vetor-3.png';
import service from '../assets/services.png';
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


export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isBlue, setIsBlue] = useState(false);
  const [scrollNumber, setScrollNumber] = useState(0);

  const myNav = useRef<HTMLBaseElement>(null);
  const coloHeader = useRef<HTMLBaseElement>(null);
  const home = useRef<HTMLAnchorElement>(null);
  const caroselRef = useRef<HTMLDivElement>(null);
  const caroselRef2 = useRef<HTMLDivElement>(null);
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

    const slide = caroselRef.current;

    let isDown = false;
    let startX;
    let scrollLeft;

    slide.addEventListener('mousedown', (event) => {
      isDown = true;
      slide.classList.add('active');
      startX = event.pageX - slide.offsetLeft;
      scrollLeft = slide.scrollLeft;
    });

    slide.addEventListener('mouseleave', () => {
      isDown = false;
      slide.classList.remove('active');
    });

    slide.addEventListener('mouseup', () => {
      isDown = false;
      slide.classList.remove('active');
    });

    slide.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slide.offsetLeft;
      const walk = (x - startX) * 2.5; //scroll-fast
      slide.scrollLeft = scrollLeft - walk;
    });

    const slide2 = caroselRef2.current;

    let isDown2 = false;
    let startX2;
    let scrollLeft2;

    slide2.addEventListener('mousedown', (event) => {
      isDown2 = true;
      slide2.classList.add('active');
      startX2 = event.pageX - slide2.offsetLeft;
      scrollLeft2 = slide2.scrollLeft;
    });

    slide2.addEventListener('mouseleave', () => {
      isDown2 = false;
    });

    slide2.addEventListener('mouseup', () => {
      isDown2 = false;
    });

    slide2.addEventListener('mousemove', (e) => {
      if (!isDown2) return;
      e.preventDefault();
      const x = e.pageX - slide2.offsetLeft;
      const walk = (x - startX2) * 2.5; //scroll-fast
      slide2.scrollLeft = scrollLeft2 - walk;
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
            <img src={logoAndro2} alt="Águia em branco com um fundo azul"/>
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

      <section id="about">
        <div className="container-title">
          <h1>Nossa <br />Equipe</h1>
          <h2>de profissionais qualificados em fazer seu negócio dar certo.</h2>
        </div>

        <div
          className="container-about"
          ref={caroselRef}
        >
          <div className="we">
            <div className="image">
            <img src={Leandro} alt="Leandro" />
            </div>
            <h1>LEANDRO MENDES</h1>
            <p>
              Fundador e Consultor Técnico da Andro, 28 anos. Formado em RH, Administração de Empresas e MBA em Gestão de Negocios. Trabalhou durante 8 anos com Administração de empresa e gestão de projetos.

            </p>
            <h2>CEO da Andro Consultoria e Assessoria</h2>
          </div>

          <div className="we">
            <div className="image">
            <img src={Wanghley} alt="Wanghley" />
            </div>
            <h1>WANGHLEY MARTINS</h1>
            <p>
            Pesquisador, empreendedor social, cientista e analista de dados e desenvolvedor de sistemas especialistas. Tem experiência na área de Computação com enfase em ciência de dados, solução criativa de problemas, empreendedorismo verde, empreendedorismo Juvenil, Desenvolvimento Desktop, WEB e mobile.

            </p>
            <h2>Consultor de Tecnologia e Inovação</h2>
          </div>
          <div className="we">
            <div className="image">
              <img src={Davi} alt="Davi" />
            </div>
            <h1>DAVI COLARES</h1>
            <p>
            Redator e designer freelancer, pesquisador e empreendedor, 17 anos. Experiência em oratória, marketing digital, estratégias empresariais, desenvolvimento de identidade visual, experiência de usuário e interface, gestão de mídias.

            </p>
            <h2>Consultor de Mídia</h2>
          </div>
          <div className="we">
          <div className="image">
              <img src={Thiago} alt="Thiago" />
            </div>
            <h1>THIAGO ROCHA</h1>
            <p>
            Formando em Administração de empresas e com experiência nas áreas de recursos humanos e finanças em consultoria e multinacional. Com foco em encontrar soluções, desenvolvimento empresarial e planejamento estratégico.

            </p>
            <h2>CONSULTOR ADMINISTRATIVO</h2>
          </div>
          <div className="we">
            <div className="image">
              <img src={Paulo} alt="Paulo" />
            </div>
            <h1>PAULO GUILHERME</h1>
            <p>
            Tem 20 anos, empreendedor, analista de processos e gestor logístico. Experiência em gestão de projetos, desenvolver diagnósticos, mapear fluxos de atividade, planejar estratégias e aplicar alternativas, soluções para melhoria dos processos, controle logístico, armazenagem e demanda de estoque.

            </p>
            <h2>CONSULTOR DE PROJETOS</h2>
          </div>
          <div className="we">
            <div className="image">
            <img src={Cibele} alt="Wanghley" />
            </div>
            <h1>CIBELE DINIZ</h1>
            <p>
            Pré-universitária com expriência em edição de vídeos e ilustrações, buscando sempre inovar e se expressar através da estética audiovisual.

            </p>
            <h2>Consultora de Mídia</h2>
          </div>
          <div className="we">
            <div className="image">
            <img src={Lucas} alt="Wanghley" />
            </div>
            <h1>LUCAS COELHO</h1>
            <p>
            Certificado pela Hansai em engenharia de processos para negócios e com experiência em gerência de tráfego, marketing digital, gestão de mídias, design para mídias e empreendedorismo social.

            </p>
            <h2>Consultor de processos</h2>
          </div>
        </div>
      </section>

      <section id="home-part-two">
        <div className="description-section">
          <h1 className="align-text-to-right">Possua o gerenciamento mais eficiente</h1>
          <h2 className="align-text-to-right">
          Administre de forma ágil e precisa o fluxo do seu negócio.
          </h2>
          <ul>
            <li>Controle de Estoque</li>
            <li>Fluxograma dos processos e dos departamentos</li>
            <li>Gestão de Arquivos e Documentos</li>
          </ul>
          {/* <a href="#">impusione seu negócio</a> */}
        </div>
        <img src={imgScrum} alt="reunião entre dirigentes com slide no fundo" />
      </section>
      <section id="home-part-two">
      <img src={imgInvoice} alt="reunião entre dirigentes com slide no fundo" />
        <div className="description-section">
          <h1>Retome o controle do seu dinheiro</h1>
          <h2>Reduza gastos, otimizando sua renda e fazendo investimentos mais certeiros.</h2>
          <ul>
            <li>Extrato (Pagar e Receber) </li>
            <li>Fluxo de Caixa</li>
            <li>Projeções e Métricas</li>
            <li>Criação de Relatórios</li>
          </ul>
        </div>
      </section>
      <section id="home-part-two">
        <div className="description-section">
          <h1 className="align-text-to-right">Desburocratize seu negócio</h1>
          <h2 className="align-text-to-right">
          Cuidamos da papelada, organizando
          e acertando todos os termos
          facilitando o desenvolvimento do
          seu empreendimento.
          </h2>
          <ul>
            <li>Análise de documentação</li>
            <li>Elaboração de Contratos</li>
            <li>Processos em andamento</li>
          </ul>
        </div>
        <img src={imgLaw} alt="reunião entre dirigentes com slide no fundo" />
      </section>

      <section id="about">
        <div className="container-title">
          <h1>Nossa <br />Equipe</h1>
          <h2>de profissionais qualificados em fazer seu negócio dar certo.</h2>
        </div>

        <div
          className="container-about"
          ref={caroselRef}
        >
          <div className="we">
            <div className="image">
            <img src={Leandro} alt="Leandro" />
            </div>
            <h1>LEANDRO MENDES</h1>
            <p>
              Fundador e Consultor Técnico da Andro, 28 anos. Formado em RH, Administração de Empresas e MBA em Gestão de Negocios. Trabalhou durante 8 anos com Administração de empresa e gestão de projetos.

            </p>
            <h2>CEO da Andro Consultoria e Assessoria</h2>
          </div>

          <div className="we">
            <div className="image">
            <img src={Wanghley} alt="Wanghley" />
            </div>
            <h1>WANGHLEY MARTINS</h1>
            <p>
            Pesquisador, empreendedor social, cientista e analista de dados e desenvolvedor de sistemas especialistas. Tem experiência na área de Computação com enfase em ciência de dados, solução criativa de problemas, empreendedorismo verde, empreendedorismo Juvenil, Desenvolvimento Desktop, WEB e mobile.

            </p>
            <h2>Consultor de Tecnologia e Inovação</h2>
          </div>
          <div className="we">
            <div className="image">
              <img src={Davi} alt="Davi" />
            </div>
            <h1>DAVI COLARES</h1>
            <p>
            Redator e designer freelancer, pesquisador e empreendedor, 17 anos. Experiência em oratória, marketing digital, estratégias empresariais, desenvolvimento de identidade visual, experiência de usuário e interface, gestão de mídias.

            </p>
            <h2>Consultor de Mídia</h2>
          </div>
          <div className="we">
          <div className="image">
              <img src={Thiago} alt="Thiago" />
            </div>
            <h1>THIAGO ROCHA</h1>
            <p>
            Formando em Administração de empresas e com experiência nas áreas de recursos humanos e finanças em consultoria e multinacional. Com foco em encontrar soluções, desenvolvimento empresarial e planejamento estratégico.

            </p>
            <h2>CONSULTOR ADMINISTRATIVO</h2>
          </div>
          <div className="we">
            <div className="image">
              <img src={Paulo} alt="Paulo" />
            </div>
            <h1>PAULO GUILHERME</h1>
            <p>
            Tem 20 anos, empreendedor, analista de processos e gestor logístico. Experiência em gestão de projetos, desenvolver diagnósticos, mapear fluxos de atividade, planejar estratégias e aplicar alternativas, soluções para melhoria dos processos, controle logístico, armazenagem e demanda de estoque.

            </p>
            <h2>CONSULTOR DE PROJETOS</h2>
          </div>
          <div className="we">
            <div className="image">
            <img src={Cibele} alt="Wanghley" />
            </div>
            <h1>CIBELE DINIZ</h1>
            <p>
            Pré-universitária com expriência em edição de vídeos e ilustrações, buscando sempre inovar e se expressar através da estética audiovisual.

            </p>
            <h2>Consultora de Mídia</h2>
          </div>
          <div className="we">
            <div className="image">
            <img src={Lucas} alt="Wanghley" />
            </div>
            <h1>LUCAS COELHO</h1>
            <p>
            Certificado pela Hansai em engenharia de processos para negócios e com experiência em gerência de tráfego, marketing digital, gestão de mídias, design para mídias e empreendedorismo social.

            </p>
            <h2>Consultor de processos</h2>
          </div>
        </div>
      </section>

      <section id="services">
        <h1>O que fazemos</h1>
        <div className="container-services">
          <div className="service-1">
            <img src={quality} alt="" />
            <h3>Gestão de <br />Qualidade</h3>
            <p>Missão, Visão e Valores;
            Conjunto de políticas e diretrizes;
            Relação de poder e comando da organização. 
            </p>
          </div>
          <div className="service-2">
            <img src={tech} alt="" />
            <h3>Tecnologias e <br />Sistemas</h3>
            <p>Sistemas especialistas para o seu negócio, conforme sua demanda. Desde estoque à site promocional.</p>
          </div>
          <div className="service-3">
            <img src={rh} alt="" />
            <h3>Recursos<br /> Humanos</h3>
            <p>Processo de Recrutamento e seleção;
            Folha de pagamento;
            Plano de cargos e salários;
            e muito mais.
            </p>
          </div>
          <div className="service-4">
            <img src={comercial} alt="" />
            <h3>Comercial & <br />Marketing</h3>
            <p>Réguas de relacionamento comercial 
            <br/>
            Estratégias atuais de Marketing Digital. 
            </p>
          </div>
          <div className="service-5">
            <img src={financeiro} alt="" />
            <h3>Financeiro</h3>
            <p>Principais processos do fluxo de caixa;
            Realização de tarefas inerentes à contabilidade e controles;
            e muito mais.
            </p>
          </div>
          <div className="service-6">
            <img src={processos} alt="" />
            <h3>Processos e Qualidade</h3>
            <p>Situação atual e melhoria nos principais processos;
            Como é realizada a gestão de qualidade.
            </p>
          </div>
        </div>
      </section>

      <section id="client">
        <h1>Nossos Clientes</h1>
        <div className="container-cliente" ref={caroselRef2}>
          <div className="container-carosel">
            <img src={parceiro2} alt="Farma Clin" />
            <div className="container-data">
              <h1>Cheirin Bão</h1>
              <h2>Nossa Senhora da Paz</h2>
            </div>
            <div className="container-data-1">
              <p>
                A Andro me surpreendeu com se profissionalismo, meu negócio lucrou como nunca!
              </p>
              <h5> - Chris, dona da franqueada</h5>
            </div>
          </div>
          <div className="container-carosel">
            <img src={parceiro1} alt="Farma Clin" />
            <div className="container-data">
              <h1>Farma Clin</h1>
              <h2>Guaratiba</h2>
            </div>
            <div className="container-data-1">
              <p>
                Vi meu negócio crescer diante dos meus olhos como mágica,
                recomendo a Andro para todos.
              </p>
              <h5> - Rodrigo, Dono das Farmácias</h5>
            </div>
          </div>
          <div className="container-carosel">
            <img src={parceiro1} alt="Farma Clin" />
            <div className="container-data">
              <h1>Farma Clin</h1>
              <h2>Guaratiba</h2>
            </div>
            <div className="container-data-1">
              <p>
                Vi meu negócio crescer diante dos meus olhos como mágica,
                recomendo a Andro para todos.
              </p>
              <h5> - Rodrigo, Dono das Farmácias</h5>
            </div>
          </div>
        </div>
      </section>

      <section id="partnerships">
        <h1>Nosssos Parceiros</h1>
        <div className="container-partnerships">
          <img src={quantoSobraImage} alt="quanto sobra" />
          <img src={cieeImage} alt="Centro de integração Empresa-Escola" />
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
