import { useState,useEffect } from 'react'
import axios from 'axios';
import books from '../Records.json';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Promis = () => {
    const [state, setState] = useState([]);
    const [filters, setFilter] = useState([]);
    const requests = `https://jsonplaceholder.typicode.com/todos/`; 
        
    let copy;
        
    
        

    useEffect(() => {
        axios
        .get(requests)
            .then((response) => {
                const data = response.data;
                copy = response.data;
                setState([...state, ...data]);
                setFilter([...filters,...data])
            // console.table(response.data[1]);
              }, (error) => {
    console.log(error);
        });
    }, [])
   
    const ChangeHandle = (e) => {
        if (e.target.value =='') {
          setState(filters);
          
        }
        else{
            console.log(e.target.value);
            
        const filter = state.filter((x, index, array) => {return (e.target.value.includes(x.id))})
       console.log(filter);
          setState(filter);
        }
        }
    

  
    return (
        <div className='pt-4'>
          <input type="search" onChange={ChangeHandle}  name="x" id="" />
          <Container>
          <Row>
          {state.map((x)=> {return (
     <Col>
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>
                    {x.title}
                  </Card.Title>
                  <Card.Text>
                  it's for user {x.userId}  and its  {x.completed?"done":"not complete"}
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


export default Promis