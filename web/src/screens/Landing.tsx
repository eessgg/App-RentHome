import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import logoLanding from '../images/logo-2.png';
import '../styles/screens/landing.css'

const Landing = () => {
  return (
    <div id="landing-container">
      <div className="content-wrapper">
        <header>
          <Link to="/">
            <img src={logoLanding} alt="Logo RentHome"/>
          </Link>
            <div className="location">
          <strong>Brasil</strong> | <span>São Paulo</span>
        </div>
        </header>

        <main>
          <div className="content">
            <p>Encontre casas para alugar em  toda cidade.</p>
            <Link to="/houses/map" className="enter-app">
              <span >Casas Disponíveis </span>     <FiArrowRight size={18} color="rgba(0, 0, 0, 0.6)" />     
            </Link>
          </div>
          <div className="bg">
          </div>
        </main>
      </div>
    </div>
  );
}

export default Landing;
