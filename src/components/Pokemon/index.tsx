import React, { useEffect, useState } from "react";

import api from "../../services/api";
import style from "./Pokemon.module.scss";

type Monster = {
  name: string;
  sprites: any;
};

function Pokemon({ name, url }: { name: string; url: string }) {
  const [pokemon, setPokemon] = useState<Monster>();
  const [official, setOfficial] = useState(false);
  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        // console.log(response);
        setPokemon(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className={style.card}>
      <p className={style.nome}>{name}</p>
      <img
        className={style.imagem}
        src={
          official
            ? pokemon?.sprites?.other?.["official-artwork"]?.front_default
            : pokemon?.sprites.front_default
        }
        alt=""
      />
    </div>
  );
}

export default Pokemon;
