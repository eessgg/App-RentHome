import React from 'react';
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import minilogo from '../images/mini-logo.png';
import '../styles/components/sidebar.css'

export default function Sidebar() {
  const { goBack } = useHistory()

  return (
    <aside className="app-sidebar">
      <Link to="/">
        <img src={minilogo} alt="mini Logo" />
      </Link>

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
}