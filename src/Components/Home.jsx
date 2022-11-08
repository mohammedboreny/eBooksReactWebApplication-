import React from 'react'
import { useState,useEffect } from 'react';
import books from '../Records.json';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Home = () => {
  const [getBooks, setBooks] = useState(books.eBooks);
  useEffect(() => {
    setBooks(books.eBooks);
  },[]);
  const ChangeHandle = (e) => {
    if (e.target.value == "") {
      setBooks(books.eBooks);
      
    }
    else{
    console.log(e.target.value);
    const filter = getBooks.filter(x => {  return (x.language.toLowerCase().includes(e.target.value.toLowerCase()))})
   console.log(filter);
      setBooks(filter);
    }
    }

  
  return (
    <div className='pt-4'>
      <input type="search" onChange={ChangeHandle} name="x" id="" />
      <Container>
      <Row>
      {getBooks.map((x)=> {return (
 <Col>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>
                {x.language}
              </Card.Title>
              <Card.Text>
              {x.edition} price is = {x.price}
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          </Col>
    
      )
      })};
        </Row>
        </Container>
    </div>
  )
}

export default Home