import { MdOutlineMovie } from "react-icons/md";

import "./Produtora.css";

const imageUrl = import.meta.env.VITE_IMG;

const Produtora = ({ produtora }) => {
  return (
    <div className="produtoraContainer" >
      <h3>{produtora.name}</h3>
        {produtora.logo_path ? (
      <div className="imgContainer">
          <img src={imageUrl + produtora.logo_path} alt={produtora.name} />
      </div>
        ) : (
          <MdOutlineMovie/>
        )}
    </div>
  );
};

export default Produtora;
