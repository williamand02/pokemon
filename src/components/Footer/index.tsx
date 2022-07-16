import React from 'react'
import pikachu from '../../assets/img/pikachuPokebola.png';
import style from './Footer.module.scss';

function Footer() {
  return (
    <footer className={style.footer}>
        <p className={style.text}>Desenvolvido por William</p>
        <img className={style.image} src={pikachu} alt="" />
    </footer>
  )
}

export default Footer