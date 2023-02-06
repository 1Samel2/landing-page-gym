/* import React, { useEffect, useRef } from "react"; */
import list from "./List-sumary.jsx";
import "./App.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Logo from "./assets/logo-fabrica.png";
import HeroImg from "./assets/hero-img.png";
import Corredor from "./assets/corredor.png";
import Grafico from "./assets/grafico.png";
import Vector from "./assets/vector.png";
import Hero from "./assets/hero.svg";
import Investimento from "./assets/img.svg";
import Carousel from "./Carousel.jsx";

function App() {
  /* const summaryRef = useRef(null);

  useEffect(() => {
    summaryRef.current.addEventListener("toggle", handleToggle);
  }, []);

  const handleToggle = () => {
    summaryRef.current
      .querySelector(".paragraph-sumary")
      .style.transition = "max-height 0.25s ease-in-out";
  }; */
  return (
    <main>
      <div className="div-principal">
        <div>
          <img className="logo" src={Logo} alt="logo-fabrica" />
          <h1>
            Transforme o seu corpo <span>5x</span> <br /> mais{" "}
            <span>rápido</span>
          </h1>
          <p>
            Faça parte do método mais utilizado por atletas de alto nível. Venha
            transformar seu corpo e reconquistar a sua autoestima
          </p>
          <button type="button">começar agora</button>
        </div>

        <div>
          <img src={HeroImg} alt="imagem musculo" />
        </div>
      </div>

      <div className="container-grafico">
        <p className="title">feito para você</p>
        <div className="grafico">
          <div>
            <img src={Vector} alt="imagem físico" />
            <p>
              Iniciante na busca do
              <br /> corpo perfeito
            </p>
          </div>
          <div>
            <img src={Grafico} alt="imagem físico" />
            <p>
              Praticante que não <br />
              conseguem mais evoluir
            </p>
          </div>
          <div>
            <img src={Corredor} alt="imagem físico" />
            <p>
              Atleta em evolução e em <br />
              competições fisiculturistas
            </p>
          </div>
        </div>
      </div>

      <section className="container-module">
        <h2>
          Como funciona o <span>método 5x</span>
        </h2>
        <div className="container-box">
          <div className="box-1">
            <div className="box-align">
              <p>
                transformando a <br />
                alimentação
              </p>
              <div className="link">
                <button type="button">módulo 1</button>
                <a>
                  <ArrowRightIcon />
                  saiba mais
                </a>
              </div>
            </div>
          </div>

          <div className="box-2">
            <div className="box-align">
              <p>
                cronograma dos <br />
                treinos
              </p>
              <div className="link">
                <button type="button">módulo 2</button>
                <a>
                  <ArrowRightIcon />
                  saiba mais
                </a>
              </div>
            </div>
          </div>
          <div className="box-3">
            <div className="box-align">
              <p>
                a importância do <br />
                descanso
              </p>
              <div className="link">
                <button type="button">módulo 3</button>
                <a>
                  <ArrowRightIcon />
                  saiba mais
                </a>
              </div>
            </div>
          </div>
          <div className="box-4">
            <div className="box-align">
              <p>
                alcançando os <br />
                objetivos
              </p>
              <div className="link">
                <button type="button">módulo 4</button>
                <a>
                  <ArrowRightIcon />
                  saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="button-começar">
          <button>
            <a className="começar">QUERO COMEÇAR AGORA</a>
          </button>
        </div>

        <p className="metodo">
          o que estão falando do nosso <br /> método de treinamento
        </p>

        <div className="align-carousel">
          <Carousel /> {/* Erro de react versão desatualizada */}
        </div>
      </section>

      <div className="container-info">
        <div className="div-info">
          <h3>quem é seu treinador</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur. In augue egestas ullamcorper
            nec viverra orci risus egestas. Lacus consequat auctor lacus amet
            volutpat sed. Pharetra suscipit in vitae ante etiam in. Convallis
            blandit dolor in nisl malesuada venenatis dignissim mauris. Nisl mi
            vehicula cursus nisi sit nulla donec adipiscing.
            <br />
            <br />
            Ipsum nibh aliquam integer faucibus purus. Orci eu malesuada morbi
            et interdum nunc lorem a adipiscing. Nisl suscipit maecenas risus
            amet at convallis massa.Lorem ipsum dolor sit amet consectetur.
            <br />
            <br />
            In augue egestas ullamcorper nec viverra orci risus egestas. Lacus
            consequat auctor lacus amet volutpat sed. Pharetra suscipit in vitae
            ante etiam in.
            <br />
            <br />
            Convallis blandit dolor in nisl malesuada venenatis dignissim
            mauris.
          </p>

          <div className="align-items-info">
            <p>
              <span>+200</span>
              <br /> Vidas <br />
              transformadas
            </p>
            <p>
              <span> +14</span> <br />
              atetlas
              <br />
              profissionais
            </p>
            <p>
              <span>+8</span> <br />
              Vidas <br />
              transformadas
            </p>
          </div>
        </div>

        <div>
          <img src={Hero} alt="" />
        </div>
      </div>

      <div className="price">
        <div className="box">
          <div className="tamanho">
            <p className="inves">investimento</p>
            <p className="descriptio">
              Lorem ipsum dolor sit amet consectetur. <br />
              Lacus consequat auctor lacus amet volutpat sed.
              <br />
              <br /> Ipsum nibh aliquam integer faucibus purus. Orci eu
              malesuada morbi et interdum nunc lorem a adipiscing.
            </p>
            <p className="apenas">
              Por apenas <span className="price-1">R$1.940,00</span>
            </p>
            <p className="text">
              Ou 12x de <span className="price-2">R$175,80</span>
            </p>
            <button className="buy">
              <a>quero começar agora</a>
            </button>
          </div>
        </div>
        <div className="div-img">
          <img src={Investimento} alt="" />
          <p>
            Se em 7 dias você perceber que esse método não é para você, é só
            solicitar seu dinheiro de volta que a devolução será realizada de
            maneira simples e rápida, não precisa de justificativa.
          </p>
        </div>
      </div>

      <div className="container-questions">
        <div>
          <div>
            <div className="top-text">Faq</div>
          </div>
          <p className="fre">Perguntas Frequentes:</p>
        </div>

        <div>
          {list.map((item) => (
            <details key={item.id}>
              <summary>{item.title}</summary>
              <p className="paragraph-sumary">{item.paragraph}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App
