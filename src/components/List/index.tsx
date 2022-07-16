import React, { useEffect, useState } from "react";
import Pokemon from "../Pokemon";
import style from "./List.module.scss";

import api from "../../services/api";
import Pagination from "./Pagination";
const url = "/pokemon/?limit=12&offset=0";

type Monster = {
  name: string;
  url: string;
};

type typePagination = {
  count: string;
  next: string;
  previous: string;
};

function List() {
  const [pokemons, setPokemons] = useState<Monster | any>([]);
  const [pagination, setPagination] = useState<typePagination>();
  const [link,setLink] = useState(url);
  useEffect(() => {
    api
      .get(link)
      .then((response) => {
        console.log(response.data);
          setPagination(response.data);
         setPokemons(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [link]);

  function handleCallback (url:string){
    console.log(url)
    setLink(url);
  }

  return (
    <>
      <Pagination {...pagination} parentCallback={handleCallback}/>
      <div className={style.list}>
        {pokemons.map((pokemon: Monster) => (
          <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </>
  );
}

export default List;
