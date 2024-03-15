import { useContext } from 'react'
import { JsonContext } from '../context/ApiContext'
import { Card, Col, Row, Container, Image, Button } from 'react-bootstrap'
import giff from '../assets/favoritegiff.gif'
import IconHeart from '../components/IconHeart'
import 'bootstrap/dist/css/bootstrap.min.css'

const Favorites = () => {
  const { filteredData, showHeart } = useContext(JsonContext)

  return (
    <Container>
      {showHeart
        ? (<Row>
          {filteredData.map((photo) => (<Col className='p-2' xs={6} md={3} key={photo.id}>
            <Card className='bg-dark text-white'>
              <Card.Img
                src={photo.src.large}
                alt={photo.alt}
                height='300px'
                width='300px'
              />
              <Card.ImgOverlay>
                <Card.Title>{photo.alt}</Card.Title>
                <Card.Text>Fotógrafo: {photo.photographer}</Card.Text>
                <IconHeart className='justify-content-center' filled={photo.liked} id={photo.id} />
              </Card.ImgOverlay>
            </Card>
          </Col>
          ))}
        </Row>
          )
        : (
          <Row>
            <Col xs={12} className='justify-content-center m-2 text-center'>
              <Image fluid src={giff} alt='notfavoritephoto' />
              <p>
                No hay favoritos aquí
              </p>
              <Button variant='success'><a href='/'> Elige uno </a> </Button>

            </Col>
          </Row>
          )}
    </Container>
  )
}
export default Favorites
