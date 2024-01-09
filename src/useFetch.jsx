import { useState } from "react";
const [data, setData] = useState(null);

const useFetch = async (url) => {
  const res = await fetch(url);
  const dados = await res.json();
  setData(dados.results);
  return data;
};

export default useFetch;
