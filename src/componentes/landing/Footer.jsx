import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
    <>
        <footer id="footer" className="footer">
            
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3 style={{'fontFamily': 'var(--font-default)'}}>InnPets</h3>
                                <p>
                                    Calle Falsa <br/>
                                    Copiapó, Chile<br/><br/>
                                    <strong>Telefono:</strong> +56 9 XXXX XXXX <br/>
                                    <strong>Correo:</strong> contacto@innpets.cl<br/>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                            <h4>Atención al Cliente</h4>
                            
                                <p>
                                    Calle Falsa <br/>
                                    Copiapó, Chile<br/><br/>
                                    <strong>Telefono:</strong> +56 9 XXXX XXXX <br/>
                                    <strong>Correo:</strong> contacto@innpets.cl<br/>
                                </p>
                            </div>
                        </div>

                        

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Servicios</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right" ></i> <NavLink to={'/host'}>Host</NavLink></li>
                                <li><i className="bi bi-chevron-right"></i> <NavLink to={'/petsparents'}>Pets Parents</NavLink></li>
                                
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-newsletter">
                            <h4 style={{'fontFamily': 'var(--font-primary)'}}>Patrocinadores</h4>
                            <p style={{'fontFamily': 'var(--font-secondary)'}}>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            

                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-legal text-center">
                <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
                    <div className="d-flex flex-column align-items-center align-items-lg-start">
                        <div className="copyright" style={{'fontFamily': 'var(--font-primary)'}}>
                            &copy; Copyright <strong><span>ALBEAN SpA</span></strong>. All Rights Reserved
                        </div>
                        
                    </div>

                    <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>

                </div>
            </div>

        </footer>
    </>
                                )
}
