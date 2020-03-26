import React from 'react'
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form action="">
          <input placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro.
          </Link>
        </form>
      </section>

      <img src={herosImg} alt="Heroes"/>
    </div>
  )
}
