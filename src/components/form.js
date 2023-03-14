import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
    return (
        <Form className='form'>
            <Form.Group className="first mb-3" controlId="formGridAddress1">
                <Form.Label>Où</Form.Label>
                <Form.Control placeholder="Partout" />
            </Form.Group>
            <h2 className='text mx-4'>Réservez des hébergements et des activités uniques.</h2>
            <Row className=" second mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Arrivée</Form.Label>
                    <Form.Control type="DD/MM/YYYY" placeholder="DD/MM/YYYY" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Départ</Form.Label>
                    <Form.Control type="DD/MM/YYYY" placeholder="DD/MM/YYYY" />
                </Form.Group>
            </Row>

            <Form.Group className=" third mb-3" controlId="formGridAddress2">
                <Form.Label>Voyageurs</Form.Label>
                <Form.Control placeholder="Voyageurs" />
            </Form.Group>

            <Button className='btn' variant="primary" type="submit">
            Rechercher
            </Button>
        </Form>
    );
}

export default GridComplexExample;