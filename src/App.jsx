import "./App.css";

import Logo from "./assets/logo-fabrica.png";
import HeroImg from "./assets/hero-img.png";
import Corredor from "./assets/corredor.png";
import Grafico from "./assets/grafico.png";
import Vector from "./assets/vector.png";

function App() {
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
            <p>transformando a alimentação</p>
            <button type="button">módulo 1</button>
          </div>

          <div className="box-2">
            <p>transformando a alimentação</p>
            <button type="button">módulo 1</button>
          </div>

          <div className="box-3">
            <p>transformando a alimentação</p>
            <button type="button">módulo 1</button>
          </div>

          <div className="box-4">
            <p>transformando a alimentação</p>
            <button type="button">módulo 1</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
