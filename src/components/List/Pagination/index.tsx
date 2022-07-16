import React, { useState } from "react";
import style from './Pagination.module.scss'
type typePagination = {
  count?: string;
  next?: string;
  previous?: string;
  parentCallback?: any;
};

function Pagination({ count, next, previous ,parentCallback }: typePagination) {
  const [active, setActive] = useState(true);
  console.log(count,next,previous)
  
  function onTrigger (url:any){
    console.log(url)
    parentCallback(url);
  }

  return (
    <div className={style.container}>
      <button className={style.prev} onClick={()=>onTrigger(previous)} disabled={previous ? false : true}>Prev</button>
      <p className={style.total}>Total de pokemons:{count}</p>
      <button className={style.next} onClick={()=>onTrigger(next)}>Next</button>
    </div>
  );
}

export default Pagination;
