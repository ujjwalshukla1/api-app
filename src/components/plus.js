import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function ImgOverlay() {
  return (
    <div>
    <p className='plus-text2'>Hébergements Airbnb Plus</p>
    <p className='plus-text3'>Une sélection de logements vérifiés selon des critères de qualité et de design</p>
    <Card className="card4 bg-dark text-white">
      <Card.Img className='img-fluid2' src="Logo.png" alt="Card image" />
      <Card.ImgOverlay>
      <Button className='btn2' variant="light"><img className='img-fluid3' src='Vector1.png'/><p className='plus-text'>Découvrir des logements</p></Button>
      
      </Card.ImgOverlay>
    </Card>
    </div>
  );
}

export default ImgOverlay;