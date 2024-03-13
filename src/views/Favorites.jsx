import { useContext } from 'react'
import { JsonContext } from '../context/ApiContext'
import { Card, Col, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Favorites = () => {
  const { data } = useContext(JsonContext)
  const filteredData = data.filter((photo) => photo.liked)

  return (
    <Container>
      <Row>
        {filteredData.map((photo) => (
          <Col className='p-2' xs={6} md={3} key={photo.id}>
            <Card className='bg-dark text-white'>
              <Card.Img src={photo.src.large} alt={photo.alt} height='300px' width='300px' />
              <Card.ImgOverlay>
                <Card.Title>{photo.alt}</Card.Title>
                <Card.Text>
                  Fotógrafo: {photo.photographer}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default Favorites
