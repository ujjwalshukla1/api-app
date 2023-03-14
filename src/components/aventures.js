import Card from 'react-bootstrap/Card';

function Basic() {
    return (
        <div>
        <p className='av-para'>Découvrez les aventures Airbnb</p>
        <p className='av-para2'>Voyages de plusieurs jours organisés par des experts locaux avec activités, repas et logements compris</p>
            <Card className='card5' style={{ width: '190px', height: '390px' }}>
                <Card.Img variant="top" src="Image.png" style={{ height: '240px' }} />
                <Card.Body>
                    <p className='av-text'>Cayman Islands</p>
                    <Card.Text className='av-text2'>2 Nights PACKAGE All Inclusive</Card.Text>
                    <Card.Text className='av-text3'>
                        À partir de 577€/personne - 3 jours
                    </Card.Text>
                    <Card.Text className='av-text4'> 5.0 <img className='star' src='Star1.png' /> </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card6' style={{ width: '190px', height: '390px' }}>
                <Card.Img variant="top" src="Image2.png" style={{ height: '240px' }} />
                <Card.Body>
                    <p className='av-text'>Uruguay</p>
                    <Card.Text className='av-text2'>2 Nights PACKAGE All Inclusive</Card.Text>
                    <Card.Text className='av-text3'>
                        À partir de 577€/personne - 3 jours
                    </Card.Text>
                    <Card.Text className='av-text4'> 5.0 <img className='star' src='Star1.png' /> </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card7' style={{ width: '190px', height: '390px' }}>
                <Card.Img variant="top" src="Image3.png" style={{ height: '240px' }} />
                <Card.Body>
                    <p className='av-text'>Iceland</p>
                    <Card.Text className='av-text2'>2 Nights PACKAGE All Inclusive</Card.Text>
                    <Card.Text className='av-text3'>
                        À partir de 577€/personne - 3 jours
                    </Card.Text>
                    <Card.Text className='av-text4'> 5.0 <img className='star' src='Star1.png' /> </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card8' style={{ width: '190px', height: '390px' }}>
                <Card.Img variant="top" src="Image4.png" style={{ height: '240px' }} />
                <Card.Body>
                    <p className='av-text'>Mongolia</p>
                    <Card.Text className='av-text2'>2 Nights PACKAGE All Inclusive</Card.Text>
                    <Card.Text className='av-text3'>
                        À partir de 577€/personne - 3 jours
                    </Card.Text>
                    <Card.Text className='av-text4'> 5.0 <img className='star' src='Star1.png' /> </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card9' style={{ width: '190px', height: '390px' }}>
                <Card.Img variant="top" src="Image5.png" style={{ height: '240px' }} />
                <Card.Body>
                    <p className='av-text'>Bahrain</p>
                    <Card.Text className='av-text2'>2 Nights PACKAGE All Inclusive</Card.Text>
                    <Card.Text className='av-text3'>
                        À partir de 577€/personne - 3 jours
                    </Card.Text>
                    <Card.Text className='av-text4'> 5.0 <img className='star' src='Star1.png' /> </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card10' style={{ width: '190px', height: '390px' }}>
                <Card.Img variant="top" src="Image6.png" style={{ height: '240px' }} />
                <Card.Body>
                    <p className='av-text'>Bosnia and Herzegovina</p>
                    <Card.Text className='av-text2'>2 Nights PACKAGE All Inclusive</Card.Text>
                    <Card.Text className='av-text3'>
                        À partir de 577€/personne - 3 jours
                    </Card.Text>
                    <Card.Text className='av-text4'> 5.0 <img className='star' src='Star1.png' /> </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Basic;