import React from 'react'
import './../../assets/vendor/bootstrap/css/bootstrap.min.css'
import './../../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './../../assets/vendor/aos/aos.css'
import './../../assets/vendor/glightbox/css/glightbox.min.css'
import './../../assets/css/variables.css'
import './../../assets/vendor/swiper/swiper-bundle.min.css'
import './../../assets/css/main.css'

import { NavLink } from 'react-router-dom'


export const Header = () => {
  return (
    <>
    
  <header id="header" className="header fixed-top" data-scrollto-offset="0">
    <div className="container-fluid d-flex align-items-center justify-content-between">

      <NavLink to={"/"} className="logo d-flex align-items-center scrollto me-auto me-lg-0">
         <img src="assets/img/logo.png" alt=""/>
        <h1 style={{"font-family":"Fredoka One"}}>InnPets<span></span></h1>
      </NavLink>

      <nav id="navbar" className="navbar">
        <ul>

         

          <li><NavLink to={"/comofunciona"} className="nav-link scrollto" >Como funciona</NavLink></li>
          <li><NavLink to={"/host"} className="nav-link scrollto" >Host</NavLink></li>
          <li><NavLink to={"/petsparents"} className="nav-link scrollto" >Pets Parents</NavLink></li>
          <li><NavLink to={"/faq"} className="nav-link scrollto" >FAQ</NavLink></li>
          
          <li><NavLink to={"/equipo"} className="nav-link scrollto" >Equipo</NavLink></li>
          
          
          <li><NavLink to={"/contactanos"} className="nav-link scrollto" >Contactanos</NavLink></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle d-none"></i>
      </nav>

      <NavLink to={"/inscribete"} className="btn-getstarted scrollto" >Inscribete</NavLink>

    </div>
  </header>
    
    </>
  )
}
