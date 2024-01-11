import { Link } from "react-router-dom";

import { MdOutlineMovieFilter } from "react-icons/md";

const imageUrl = import.meta.env.VITE_IMG;

const Baner = ({ movie, isFirst = false }) => {
const labelStyle = {
  background:`url(${imageUrl + movie.backdrop_path})`,
};



  return (
    <>
      <input
        type="radio"
        name="slide"
        id={movie.id}
        defaultChecked={isFirst ? "checked" : ""}
      />
      <label htmlFor={movie.id} className="card" style={labelStyle}>
        <div className="row">
          <div className="icon">
            <MdOutlineMovieFilter />
          </div>
          <div className="description">
            <h4>{movie.title}</h4>
            <Link to={`/movie/${movie.id}`}>Detalhes</Link>
          </div>
        </div>
      </label>
    </>
  );
};

export default Baner;
