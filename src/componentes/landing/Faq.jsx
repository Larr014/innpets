import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import React, { useState } from "react"


export const Faq = () => {
  
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow); 
  return (
    <>
    <div className="container">
      
<MDBAccordion initialActive={1} className="row">
      <MDBAccordionItem collapseId={1} headerTitle='¿Cuando puedo usarla?'>
        <p>Cuando tú quieras, siempre y cuando existan host disponibles</p>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='¿Cómo saber si el lugar donde se quedará mi mascota cumple con lo que espero?'>
        <p>
        Puedes agendar una visita previa con el Host, así conoceras el lugar donde se quedará tu mascota y tambien el Host que la cuidará
</p>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='¿Si luego de ver el lugar no me gusta?'>
        <p>        
        Puedes agendar una visita a otro lugar.
</p>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={5} headerTitle='¿El Host que cuidados le dará a mi mascota?'>
        <p>Dependerá de los servicios que ofrezca cada host, pero siempre bajo tus instrucciones. </p>
        
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={6} headerTitle='¿Cómo me comunico con el Host?'>
      
        <p>Mediante un chat disponible en la aplicación</p>
        
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={7} headerTitle='¿Cómo puedo saber como esta mi mascota?'>
      
        <p>Podras pedirle al Host que te envie fotos y videos de tu mascota</p>
        
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={8} headerTitle='¿Cómo valido que tan bueno es el Host?'>
        
        <p>Cada Host tiene una valoración respecto de su hospedajes previos, asi como tambien comentarios. Adicionalmente recuerda, podras reunirte con él y charlar presencialmente sin obligación de reservar.</p>
        
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={9} headerTitle='¿Solo eso?'>
        
        <p>No, algunos Host cuentan con camaras que transmiten 24/7 por lo que podrás ver a tu mascota en todo momento.</p>
        
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={10} headerTitle='Muy buena la app, pero mi mascota esta muy acostumbrada a su hogar'>
    
        
        <p>Aun no nos descartes, hay Host que estan disponibles para cuidar a tu mascota en tu hogar</p>
            
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle='Si luego de ver el lugar no me gusta?'>
        
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle='Si luego de ver el lugar no me gusta?'>
        
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle='Si luego de ver el lugar no me gusta?'>
        
        </MDBAccordionItem>
                  
    </MDBAccordion>
    
</div>        
    </>
  )
}
