import React from 'react'
import style from './Header.module.scss';
import logo from '../../assets/img/logo.png'

function Header() {
  return (
    <header className={style.header}>
        <img className={style.imagem} src={logo} alt="" />
    </header>
  )
}

export default Header;