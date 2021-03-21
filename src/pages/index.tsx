import { FormEvent, useState } from 'react';
import { useEffect, useRef } from 'react';
import { Nav, Header, Buttom } from '../styles/header';

import Head from 'next/head';

import logoAndro from '../../public/logo-andro.svg';
import backgroundImage from '../assets/Vetor.png';
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
        <title>Andro</title>
        <link rel="icon" href="/logo-andro.svg" />
      </Head>

      <Header isColoraBlue={isBlue} ref={coloHeader}>
        <div className="container-logo">
          <a href="P-home" ref={home}>
            <img src={logoAndro} alt="Águia em branco com um fundo azul" />
            <h1>Andro</h1>
          </a>
        </div>
        <Nav open={isOpenMenu} ref={myNav}>
          <a href="P-services">serviços</a>
          <a href="P-about">quem somos</a>
          <a href="P-client">clientes</a>
          <a href="P-partnerships">parcerias</a>
          <a href="P-contact">contato</a>
        </Nav>
      </Header>

      <section id="home">
        <h1>Dificuldades com<br />seu negócio?</h1>
        <div className="container-services">
          <h2>Nós damos outra<br />chance pra você.</h2>
          <a href="#second-chance">ganhe um segunda chance</a>
        </div>
        <img src={backgroundImage} alt="pessoa alcançando a bandeira no topo de uma montanha" />
      </section>

      <section id="home-part-two">
        <img src={imageGestão} alt="reunião entre dirigentes com slide no fundo" />
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
        <img src={imageGestão1} alt="reunião entre dirigentes com slide no fundo" />
      </section>
      <section id="home-part-two">
        <img src={imageGestão2} alt="reunião entre dirigentes com slide no fundo" />
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
        <div className="container-title">
          <h1>Nossa <br />Equipe</h1>
          <h2>de profissionais qualificados em fazer seu negócio dar certo.</h2>
        </div>

        <div
          className="container-about"
          ref={caroselRef}
        >
          <div className="we">
            <div className="image"></div>
            <h1>LEANDRO MENDES</h1>
            <p>
              Fundador e Consultor Técnico da Andro, 28 anos. Formado em RH, Administração de Empresas e MBA em Gestão de Negocios. Trabalhou durante 8 anos com Administração de empresa e gestão de projetos.

            </p>
            <h2>CEO da Andro Consultoria e Assessoria</h2>
          </div>

          <div className="we">
            <div className="image"></div>
            <h1>WANGHLEY MARTINS</h1>
            <p>
            Pesquisador, empreendedor social, cientista e analista de dados e desenvolvedor de sistemas especialistas. Tem experiência na área de Computação, engenharia biomédica, com enfase em ciência de dados, solução criativa de problemas, empreendedorismo verde, empreendedorismo Juvenil, Desenvolvimento Desktop, WEB e mobile.

            </p>
            <h2>Consultor de Tecnologia e Inovação</h2>
          </div>
          <div className="we">
            <div className="image"></div>
            <h1>DAVI COLARES</h1>
            <p>
            Redator e designer freelancer, pesquisador e empreendedor, 17 anos. Experiência em oratória, marketing digital, estratégias empresariais, desenvolvimento de identidade visual, experiência de usuário e interface, gestão de mídias.

            </p>
            <h2>Consultor de Mídia</h2>
          </div>
          <div className="we">
            <div className="image"></div>
            <h1>THIAGO ROCHA</h1>
            <p>
            Formando em Administração de empresas e com experiência nas áreas de recursos humanos e finanças em consultoria e multinacional. Com foco em encontrar soluções, desenvolvimento empresarial e planejamento estratégico.

            </p>
            <h2>CONSULTOR ADMINISTRATIVO</h2>
          </div>
          <div className="we">
            <div className="image"></div>
            <h1>PAULO GUILHERME</h1>
            <p>
            Tem 20 anos, empreendedor, analista de processos e gestor logístico. Experiência em gestão de projetos, desenvolver diagnósticos, mapear fluxos de atividade, planejar estratégias e aplicar alternativas, soluções para melhoria dos processos, controle logístico, manutenção de informações, armazenagem e demanda de estoque.

            </p>
            <h2>CONSULTOR DE PROJETOS</h2>
          </div>
        </div>
      </section>

      <section id="services">
        <h1>O que fazemos</h1>
        <div className="container-services">
          <div className="service-1">
            <img src={service} alt="" />
            <h3>Recrutamnto & <br />Gerenciamento</h3>
          </div>
          <div className="service-2">
            <img src={service} alt="" />
            <h3>Marketing & <br />Design Gáfico</h3>
          </div>
          <div className="service-3">
            <img src={service} alt="" />
            <h3>Contabilidade & <br />Investimento</h3>
          </div>
          <div className="service-4">
            <img src={service} alt="" />
            <h3>Controle & <br />Qualidade</h3>
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
            Preencha os dados ao lado pra gente
            se conhecer melhor e marcar uma conversa 😉
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
        <h1>Copyright© 2021 Andro |<br/> Feito com ❤️ pela Underground Devs</h1>
      </footer>
    </>
  )
}
