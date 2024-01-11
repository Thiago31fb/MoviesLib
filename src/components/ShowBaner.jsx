import Baner from "./Baner";
import "./ShowBaner.css";



const ShowBaner = ({ movies }) => {

  const filmesComBackdrop = movies.filter((filme) => filme.backdrop_path);
  const pegarFilmesAleatorios = () => {
    const filmesAleatorios = [];
    const numeroMaximoFilmes = 7;

    if (filmesComBackdrop.length > numeroMaximoFilmes) {
      while (filmesAleatorios.length < numeroMaximoFilmes) {
        const filmeAleatorio =
          filmesComBackdrop[
            Math.floor(Math.random() * filmesComBackdrop.length)
          ];
        if (!filmesAleatorios.includes(filmeAleatorio)) {
          filmesAleatorios.push(filmeAleatorio);
        }
      }
    } else {
      filmesAleatorios.push(...filmesComBackdrop);
    }

    return filmesAleatorios;
  };

  const FilmesAleatorios = pegarFilmesAleatorios();



return (
  <div className="containerWrapper">
    <div className="wrapper">
      <div className="containerShow">
        {FilmesAleatorios.map((filme, index) => (
          <Baner
            key={filme.id}
            movie={filme}
            isFirst={index === 0 && true}
          />
        ))}
      </div>
    </div>
  </div>
);

};

export default ShowBaner;
