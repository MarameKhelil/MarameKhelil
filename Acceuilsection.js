import React from 'react'
import {Button} from './button'
import './acceuil.css'
import '../App.css'
function Acceuilsection() {
  return (
    <div className='acceuil-container'>
        <div className='par'>
            <h1>Le BON EMPLOI:<br>
           </br> OFFRE D'EMPLOI ET STAGE EN TUNISIE</h1>
       
           <h3>Avec LE BON Emploi,<br></br>
          trouvez l'offre d'emploi ou de stage  idéal, toutes les opportunités en simple clique,<br></br>
          parcourez nos offres  et trouvez votre futur Travail en Tunisie.</h3>
        </div>
       
        <div className='acceuil-btn'>
          <ul>
            <li>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Rechercher un offre
                </Button>
            </li>
            <li>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Rechercher un Candidat
                </Button>
            </li>
          </ul>
        </div>
    </div>
   
  )
}
export default Acceuilsection
