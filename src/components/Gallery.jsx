import { useContext } from 'react'
import { JsonContext } from '../context/ApiContext'
import { Card, Col, Row, Container } from 'react-bootstrap'
import IconHeart from './IconHeart'
import 'bootstrap/dist/css/bootstrap.min.css'

const Gallery = () => {
  const { data } = useContext(JsonContext)

  return (
    <Container>
      <Row>
        {data.map((photo) => (
          <Col className='p-2' xs={6} md={3} key={photo.id}>
            <Card className='bg-dark text-white'>
              <Card.Img src={photo.src.large} alt={photo.alt} height='200px' width='200px' />
              <Card.ImgOverlay>
                <IconHeart filled={photo.liked} id={photo.id} />
                <Card.Body>
                  <Card.Title> {photo.alt}</Card.Title>
                  <Card.Text> Fotógrafo: {photo.photographer}</Card.Text>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default Gallery
