import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import './nav.css';

function BasicExample() {
  return (
    <div className='bg'>
      <img className='nav' src='Logo_Airbnb.png' />
      <div>
        <p className='para'>Français (FR)</p>
        <p className='para2'>EUR €</p>
        <p className='para3'>Devenir hôte</p>
        <p className='para4'>Créer son expérience</p>
        <p className='para5'>Aide</p>
        <p className='para6'>Inscription</p>
        <p className='para7'>Connexion</p>
      </div>
    </div>
  );
}

export default BasicExample;



