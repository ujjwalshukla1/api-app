import Card from 'react-bootstrap/Card';

function BodyShorthandExample() {
  return (<div>
  <p className='c-text'>Explorer Airbnb</p>
  <Card className='card text-center' body><img className='img-fluid' src='Rectangle4.png'/><p className='c-para'>Logements</p></Card>
  <Card className='card2' body> <img className='img-fluid' src='Rectangle5.png'/><p className='c-para'>Expérience</p></Card>;
  <Card className='card3' body> <img className='img-fluid' src='Rectangle6.png'/><p className='c-para'>Aventures</p></Card>;
  </div>
  )
}

export default BodyShorthandExample;